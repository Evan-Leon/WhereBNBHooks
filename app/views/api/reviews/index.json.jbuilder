json.array! @reviews do |review|
    json.extract! review, :id, :body, :rating, :listing_id, :created_at, :guest, :listing 
end