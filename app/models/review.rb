# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  body       :text             not null
#  rating     :integer          not null
#  guest_id   :integer          not null
#  listing_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Review < ApplicationRecord
    validates :rating, inclusion: { in: (1..5) }
    validates :body, :rating, :guest_id, :listing_id, presence: true

    belongs_to :listing,
        primary_key: :id,
        foreign_key: :listing_id,
        class_name: :Listing

    belongs_to :guest,
        primary_key: :id,
        foreign_key: :guest_id,
        class_name: :User 
    
end
