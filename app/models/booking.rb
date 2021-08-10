# == Schema Information
#
# Table name: bookings
#
#  id         :bigint           not null, primary key
#  check_in   :date             not null
#  check_out  :date             not null
#  guest_id   :integer          not null
#  listing_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  num_guests :integer          not null
#
class Booking < ApplicationRecord 

    validates :check_in, :check_out, :guest_id, :listing_id, presence: true

    belongs_to :guest,
      primary_key: :id,
      foreign_key: :guest_id,
      class_name: :User

    belongs_to :listing,
      primary_key: :id,
      foreign_key: :listing_id,
      class_name: :Listing

   

end
