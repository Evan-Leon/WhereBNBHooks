json.array! @bookings do |booking|
    json.extract! booking, :id, :check_in, :check_out, :listing_id, :guest_id, :num_guests, :guest, :listing
end