@listings.each do |listing|
    json.set! listing.id do 
        json.partial! 'listing', listing: listing 
    end
end

# json.array! @listings do |listing|
#     json.extract! listing, :id, :title, :price, :guest_num, :description, :num_beds, :longitude, :latitude, :host_id, :city
# end

# @listings.each do |listing|
#     json.set! listing.id do 
#         json.partial! 'listing', listing: listing 
#     end
# end

# @listings.each do |listing|
#     json.set! listing.id do 
#         json.partial! 'listing', listing: listing 
#     end
# end