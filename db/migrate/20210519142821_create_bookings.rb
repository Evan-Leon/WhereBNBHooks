class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.date :check_in, null: false
      t.date :check_out, null: false 
      t.integer :guest_id, null: false 
      t.integer :listing_id, null: false
      t.timestamps
    end

    add_index :bookings, :guest_id
    add_index :bookings, :listing_id
    add_index :bookings, :check_in
    add_index :bookings, :check_out
  end
end
