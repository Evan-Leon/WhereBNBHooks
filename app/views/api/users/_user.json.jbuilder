
# if user 
#     json.extract! user, :id, :email, :first_name, :last_name
# else 
#     users.each do |user|
#       json.extract! user, :id, :email, :first_name, :last_name
#     end
# end

json.extract! user, :id, :email, :first_name, :last_name, :birthdate

