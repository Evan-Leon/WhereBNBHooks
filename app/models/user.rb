# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  birthdate       :date             not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord 
    
  validates :email, :first_name, :last_name, :birthdate, :password_digest, :session_token, presence: true
  validates :email, :session_token, uniqueness: true 
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP } 
  validates :password, length: { minimum: 6, allow_nil: true}

  has_many :listings,
    primary_key: :id,
    foreign_key: :host_id,
    class_name: :Listing

  has_many :bookings,
    primary_key: :id,
    foreign_key: :guest_id,
    class_name: :Booking

  has_many :reviews,
    primary_key: :id,
    foreign_key: :guest_id,
    class_name: :Review

  after_initialize :ensure_session_token

  attr_reader :password 

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    if user && user.is_password?(password)
        return user 
    else  
        return nil 
    end
  end

  def self.generate_session_token 
    SecureRandom::urlsafe_base64
  end

  def password=(password)
    @password = password 
    self.password_digest = BCrypt::Password.create(password)
    
  end

  def is_password?(password)
    pass_obj = BCrypt::Password.new(self.password_digest)
    pass_obj.is_password?(password)
  end

  def ensure_session_token 
    self.session_token ||= User.generate_session_token
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

end
