# json.review do 
#     json.extract! @review, :id, :rating, :listing_id, :guest_id
# end


json.extract! @review, :id, :body, :rating, :listing_id, :created_at, :guest, :listing 
