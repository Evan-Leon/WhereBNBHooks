class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.text :body, null:false
      t.integer :rating, null: false
      t.integer :guest_id, null: false
      t.integer :listing_id, null: false
      t.integer :booking_id, null: false
      t.timestamps
    end
    add_index :reviews, :guest_id
    add_index :reviews, :listing_id
    add_index :reviews, :booking_id
    add_column :bookings, :num_guests, :integer, null: false
  end
end
