class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.text :title, null: false, limit: 280 
      t.integer :price, null: false 
      t.integer :guest_num, null: false 
      t.text :description, null: false
      t.integer :num_beds, null: false
      t.float :longitude, null: false 
      t.float :latitude, null: false
      t.integer :host_id, null: false
      t.timestamps 
    end
    add_index :listings, :host_id
  end
end
