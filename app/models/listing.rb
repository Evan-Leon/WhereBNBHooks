# == Schema Information
#
# Table name: listings
#
#  id          :bigint           not null, primary key
#  title       :text             not null
#  price       :integer          not null
#  guest_num   :integer          not null
#  description :text             not null
#  num_beds    :integer          not null
#  longitude   :float            not null
#  latitude    :float            not null
#  host_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  city        :string
#
class Listing < ApplicationRecord
  validates :title, :price, :guest_num, :description, :num_beds, :longitude, :latitude, :host_id, presence: true
  # validates :coverphoto
  belongs_to :host,
    primary_key: :id,
    foreign_key: :host_id,
    class_name: :User
  
  has_many :bookings,
    primary_key: :id,
    foreign_key: :listing_id,
    class_name: :Booking
  
  has_many :reviews,
    primary_key: :id,
    foreign_key: :listing_id,
    class_name: :Review

  has_one_attached :coverphoto
  

  def self.search_results(search_string)
    listings = Listing.all 
    string = search_string.downcase 
    cities = listings.select { |listing| listing.city.downcase.include?(string) }
    title = listings.select { |listing| listing.title.downcase.include?(string) }
    return cities + title
  end

  def self.get_reviews(listing_id)
    reviews = Review.all 
    listing_reviews = reviews.select {|review| review.listing_id == listing_id.to_i}
    return listing_reviews
  end

end
