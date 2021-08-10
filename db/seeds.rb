# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'
User.destroy_all
Listing.destroy_all
Booking.destroy_all
Review.destroy_all



#Users

demo= User.create!(email: "DemoUser@wherebnb.com", password: "123456", first_name: 'Demo', last_name: 'User', birthdate: "1990-10-10")
bob= User.create!(email: "bob@bob.com", password: "123456", first_name: 'Bob', last_name: 'Bobson', birthdate: "1900-10-10")
felix= User.create!(email: "felix@bob.com", password: "123456", first_name: 'Felix', last_name: 'Dealix', birthdate: "1980-11-10")
sally= User.create!(email: "sally@bob.com", password: "123456", first_name: 'Sally', last_name: 'Alley', birthdate: "1970-10-11")

#LISTINGS
# New York City lat: 40.730610, lng: -73.935242 

ny_listing1 = Listing.create!(title: "My house!", price: 100, guest_num: 5, description: "My awesome lounge pad!",
    num_beds: 3, latitude: 40.830610, longitude: -73.935242, host_id: bob.id, city: 'New York City, New York')
    ny_listing1_cover= open("https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/bernadette-gatsby-bN_TkedaBuQ-unsplash.jpg")
    ny_listing1.coverphoto.attach(io: ny_listing1_cover, filename: 'bernadette-gatsby-bN_TkedaBuQ-unsplash.jpg'  )

ny_listing2 = Listing.create!(title: "Beautiful cottage", price: 200, guest_num: 3, description: "Beautiful cottage in the water",
    num_beds: 2, latitude: 40.730510, longitude: -73.935242, host_id: demo.id, city: 'New York City, New York')
    ny_listing2_cover= open("https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/annie-spratt-rti3HfYJzOM-unsplash.jpg")
    ny_listing2.coverphoto.attach(io: ny_listing2_cover, filename: 'annie-spratt-rti3HfYJzOM-unsplash.jpg')

ny_listing3 = Listing.create!(title: "Special Igloo", price: 300, guest_num: 2, description: "Come chill in my igloo!",
    num_beds: 3, latitude: 40.930610, longitude: -73.735242, host_id: felix.id, city: 'New York City, New York')
    ny_listing3_cover= open("https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/lauri-vuokila-8_58RjtO4bQ-unsplash.jpg")
    ny_listing3.coverphoto.attach(io: ny_listing3_cover, filename: 'lauri-vuokila-8_58RjtO4bQ-unsplash.jpg')

ny_listing4 = Listing.create!(title: "Victorian Mansion", price: 700, guest_num: 12, description: "Come to our river spot and come fishing for salmon",
    num_beds: 6, latitude: 40.730410, longitude: -73.235242, host_id: sally.id, city: 'New York City, New York')
    ny_listing4_cover= open("https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/marc-zimmer-kEP-zO-w4nE-unsplash.jpg")
    ny_listing4.coverphoto.attach(io: ny_listing4_cover, filename: 'marc-zimmer-kEP-zO-w4nE-unsplash.jpg')

ny_listing5 = Listing.create!(title: "Shack in the water", price: 50, guest_num: 1, description: "We can share this place together probably",
    num_beds: 1, latitude: 40.730410, longitude: -73.435242, host_id: demo.id, city: 'New York City, New York')
    ny_listing5_cover= open("https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/luca-bravo-lake.jpg")
    ny_listing5.coverphoto.attach(io: ny_listing5_cover, filename: 'luca-bravo-lake.jpg'  )


# Austin lat: 30.266666	lng: -97.733330

austin_listing1 = Listing.create!(title: "My Barn!", price: 65, guest_num: 3, description: "Come visit the animals and enjoy true pastures",
    num_beds: 2, latitude: 30.266666, longitude: -97.733330, host_id: bob.id, city: 'Austin, TX')
    austin_listing1_cover= open("https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/amy-reed-8hRr0IFz6qA-unsplash.jpg")
    austin_listing1.coverphoto.attach(io: austin_listing1_cover, filename: 'amy-reed-8hRr0IFz6qA-unsplash.jpg')

austin_listing2 = Listing.create!(title: "Mega Mansion", price: 1000, guest_num: 10, description: "The most beautiful home in the entirety of Austin, TX",
    num_beds: 6, latitude: 30.264676, longitude: -97.783530, host_id: demo.id, city: 'Austin, TX')
    austin_listing2_cover= open("https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/matin-keivanloo-2Fn53YULM48-unsplash.jpg")
    austin_listing2.coverphoto.attach(io: austin_listing2_cover, filename: 'matin-keivanloo-2Fn53YULM48-unsplash.jpg')

austin_listing3 = Listing.create!(title: "Luscious Sand Castle", price: 300, guest_num: 5, description: "Experience true nature and true grit!",
    num_beds: 1, latitude: 30.564676, longitude: -97.983560, host_id: sally.id, city: 'Austin, TX')
    austin_listing3_cover= open("https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/kit-suman-aIh-ic7kPo8-unsplash.jpg")
    austin_listing3.coverphoto.attach(io: austin_listing3_cover, filename: 'kit-suman-aIh-ic7kPo8-unsplash.jpg')

austin_listing4 = Listing.create!(title: "Beautiful Medeivel Castle", price: 2000, guest_num: 20, description: "Come experience the fear and excitement of the middle ages!",
    num_beds: 10, latitude: 30.764676, longitude: -97.753530, host_id: felix.id, city: 'Austin, TX')
    austin_listing4_cover= open("https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/marc-zimmer-kEP-zO-w4nE-unsplash.jpg")
    austin_listing4.coverphoto.attach(io: austin_listing4_cover, filename: 'marc-zimmer-kEP-zO-w4nE-unsplash.jpglph')

austin_listing5 = Listing.create!(title: "Newly Redone Townhouse", price: 250, guest_num: 4, description: "Live in a little slice of paradise here in the Longhorn state",
    num_beds: 3, latitude: 30.374676, longitude: -97.874530, host_id: bob.id, city: 'Austin, TX')
    austin_listing5_cover= open("https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/bernadette-gatsby-bN_TkedaBuQ-unsplash.jpg")
    austin_listing5.coverphoto.attach(io: austin_listing5_cover, filename: 'jon-flobrant-sheds.jpg')

# Boston lat: 42.346268, lng: -71.095764
boston_listing1 = Listing.create!(title: "Fenway Park", price: 10000, guest_num: 1000, description: "Live in baseball history at Fenway park",
    num_beds: 9, latitude: 42.346268, longitude: -71.095764, host_id: bob.id, city: 'Boston, MA')
    boston_listing1_cover= open( "https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/robert-f-9t5sV4KarVA-unsplash.jpg")
    boston_listing1.coverphoto.attach(io: boston_listing1_cover, filename: 'robert-f-9t5sV4KarVA-unsplash.jpg')

boston_listing2 = Listing.create!(title: "Citgo Sign", price: 1000, guest_num: 1, description: "No Greater landmark in Boston for views and history",
    num_beds: 0, latitude: 42.456268, longitude: -71.186764, host_id: demo.id, city: 'Boston, MA')
    boston_listing2_cover= open("https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/todd-kent-iRKv_XiN--M-unsplash.jpg")
    boston_listing2.coverphoto.attach(io: boston_listing2_cover, filename: 'todd-kent-iRKv_XiN--M-unsplash.jpg')

boston_listing3 = Listing.create!(title: "Dorcester Beauty", price: 100, guest_num: 3, description: "Come experience the real Boston in Dorcester, Southie is a lie!",
    num_beds: 2, latitude: 42.457268, longitude: -71.115764, host_id: felix.id, city: 'Boston, MA')
    boston_listing3_cover= open("https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/christian-koch-D_4R9CcYZOk-unsplash.jpg")
    boston_listing3.coverphoto.attach(io: boston_listing3_cover, filename: 'christian-koch-D_4R9CcYZOk-unsplash.jpg')

boston_listing4 = Listing.create!(title: "Condo in Back Bay", price: 300, guest_num: 4, description: "Check out pure luxury in the Back Bay of Boston",
    num_beds: 2, latitude: 42.236268, longitude: -71.575764, host_id: sally.id, city: 'Boston, MA')
    boston_listing4_cover= open("https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/folco-masi-fhA8jbG49zU-unsplash.jpg")
    boston_listing4.coverphoto.attach(io: boston_listing4_cover, filename: 'folco-masi-fhA8jbG49zU-unsplash.jpg')

boston_listing5 = Listing.create!(title: "Southie Paradise", price: 50, guest_num: 1, description: "Come visit Southie, where you can get there but can't leave",
    num_beds: 1, latitude: 42.226268, longitude: -71.084764, host_id: bob.id, city: 'Boston, MA')
    boston_listing5_cover= open("https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/tiffany-chan-lT2hiMUACco-unsplash.jpg")
    boston_listing5.coverphoto.attach(io: boston_listing5_cover, filename: 'tiffany-chan-lT2hiMUACco-unsplash.jpg')


# Chicago lat: 41.881832, lng: -87.623177
chicago_listing1 = Listing.create!(title: "Wrigleyville", price: 220, guest_num: 3, description: "Stay in the ivy in the outfield for as long as you like",
    num_beds: 2, latitude: 41.881832, longitude: -87.623177, host_id: bob.id, city: 'Chicago, IL')
    chicago_listing1_cover= open("https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/heather-maguire-1nKs6Js_JxA-unsplash.jpg")
    chicago_listing1.coverphoto.attach(io: chicago_listing1_cover, filename: 'heather-maguire-1nKs6Js_JxA-unsplash.jpg')

chicago_listing2 = Listing.create!(title: "Linkin Park Apartment", price: 320, guest_num: 5, description: "In the end it doesn't even matter, had to fall to lose it all",
    num_beds: 3, latitude: 41.771832, longitude: -87.533177, host_id: demo.id, city: 'Chicago, IL')
    chicago_listing2_cover= open("https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/christian-koch-D_4R9CcYZOk-unsplash.jpg")
    chicago_listing2.coverphoto.attach(io: chicago_listing2_cover, filename: 'christian-koch-D_4R9CcYZOk-unsplash.jpg')

chicago_listing3 = Listing.create!(title: "The Great Lake ", price: 70, guest_num: 2, description: "A great lake with an even greater view!",
    num_beds: 5, latitude: 41.981832, longitude: -87.723177, host_id: felix.id, city: 'Chicago, IL')
    chicago_listing3_cover= open("https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/morgane-perraud-rPA5JlVuf7Q-unsplash.jpg")
    chicago_listing3.coverphoto.attach(io: chicago_listing3_cover, filename: 'morgane-perraud-rPA5JlVuf7Q-unsplash.jpg')

chicago_listing4 = Listing.create!(title: "Deep Dish Driveup", price: 105, guest_num: 6, description: "Drive up and stay up when you hit the Deep Dish",
    num_beds: 2, latitude: 41.882632, longitude: -87.625377, host_id: sally.id, city: 'Chicago, IL')
    chicago_listing4_cover= open("https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/matt-antonioli-ctwbBwcwI9U-unsplash.jpg")
    chicago_listing4.coverphoto.attach(io: chicago_listing4_cover, filename: 'matt-antonioli-ctwbBwcwI9U-unsplash.jpg')

chicago_listing5 = Listing.create!(title: "Sears Tower", price: 420, guest_num: 6, description: "Stay in the highest place in Chicago, the Sears Tower",
    num_beds: 9, latitude: 41.991832, longitude: -87.553177, host_id: bob.id, city: 'Chicago, IL')
    chicago_listing5_cover= open("https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/guido-coppa-nMERjkt2o5k-unsplash.jpg")
    chicago_listing5.coverphoto.attach(io: chicago_listing5_cover, filename: 'guido-coppa-nMERjkt2o5k-unsplash.jpg')
# Miami lat:25.761681, lng: -80.191788

miami_listing1 = Listing.create!(title: "Waterside Apartment in Downtown Miami", price: 250, guest_num: 4, description: "See the Ocean from your room, hear it in a shell, great location",
    num_beds: 3, latitude: 25.761681, longitude: -80.191788, host_id: bob.id, city: 'Miami, FL')
    miami_listing1_cover= open("https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/cody-board-aBPx_3gOhig-unsplash.jpg")
    miami_listing1.coverphoto.attach(io: miami_listing1_cover, filename: 'cody-board-aBPx_3gOhig-unsplash.jpg')

miami_listing2 = Listing.create!(title: "80's Style White Condo", price: 350, guest_num: 3, description: "Come experience a piece of history from the boon of Miami",
    num_beds: 1, latitude: 25.871681, longitude: -80.292788, host_id: demo.id, city: 'Miami, FL')
    miami_listing2_cover= open("https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/jason-briscoe--T0La6F_WrE-unsplash.jpg")
    miami_listing2.coverphoto.attach(io: miami_listing2_cover, filename: 'jason-briscoe--T0La6F_WrE-unsplash.jpg')

miami_listing3 = Listing.create!(title: "Club DLUX", price: 550, guest_num: 10, description: "Come to the most happening spot...and stay when you're done partying!",
    num_beds: 5, latitude: 25.661681, longitude: -80.591788, host_id: felix.id, city: 'Miami, FL')
    miami_listing3_cover= open("https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/ryan-spencer-Um9AkOiIDcU-unsplash.jpg")
    miami_listing3.coverphoto.attach(io: miami_listing3_cover, filename: 'ryan-spencer-Um9AkOiIDcU-unsplash.jpg')

miami_listing4 = Listing.create!(title: "Large Miami Beach Mansion", price: 800, guest_num: 6, description: "Stay in the most exclusive spot in Miami....may even see some stars",
    num_beds: 8, latitude: 25.761792, longitude: -80.191899, host_id: sally.id, city: 'Miami, FL')
    miami_listing4_cover= open("https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/matin-keivanloo-2Fn53YULM48-unsplash.jpg")
    miami_listing4.coverphoto.attach(io: miami_listing4_cover, filename: 'matin-keivanloo-2Fn53YULM48-unsplash.jpg')

miami_listing5 = Listing.create!(title: "Dolphin's Home", price: 110, guest_num: 2, description: "Experience living with live dolphins (oxygen costs extra)",
    num_beds: 1, latitude: 25.561681, longitude: -80.991788, host_id: bob.id, city: 'Miami, FL')
    miami_listing5_cover= open("https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/noaa-NsvzdXtvyio-unsplash.jpg")
    miami_listing5.coverphoto.attach(io: miami_listing5_cover, filename: 'noaa-NsvzdXtvyio-unsplash.jpg')

# Seattle lat: 47.608013, lng: -122.335167
seattle_listing1 = Listing.create!(title: "The Space Needle", price: 300, guest_num: 2, description: "Stay at the best view in the city",
    num_beds: 1, latitude: 47.608013, longitude: -122.335167, host_id: bob.id, city: 'Seattle, WA')
    seattle_listing1_cover= open("https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/andrea-leopardi-QfhbK2pY0Ao-unsplash.jpg")
    seattle_listing1.coverphoto.attach(io: seattle_listing1_cover, filename: 'andrea-leopardi-QfhbK2pY0Ao-unsplash.jpg')

seattle_listing2 = Listing.create!(title: "West Seattle Beauty", price: 150, guest_num: 4, description: "Experience the best part of the city with easy access to everywhere",
    num_beds: 3, latitude: 47.718013, longitude: -122.445167, host_id: demo.id, city: 'Seattle, WA')
    seattle_listing2_cover= open("https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/folco-masi-fhA8jbG49zU-unsplash.jpg")
    seattle_listing2.coverphoto.attach(io: seattle_listing2_cover, filename: 'folco-masi-fhA8jbG49zU-unsplash.jpg')

seattle_listing3 = Listing.create!(title: "Mariner Mansion", price: 500, guest_num: 8, description: "Meet your baseball favorites and live in luxury",
    num_beds: 5, latitude: 47.609123, longitude: -122.336277, host_id: felix.id, city: 'Seattle, WA')
    seattle_listing3_cover= open("https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/matin-keivanloo-2Fn53YULM48-unsplash.jpg")
    seattle_listing3.coverphoto.attach(io: seattle_listing3_cover, filename: 'matin-keivanloo-2Fn53YULM48-unsplash.jpg')

seattle_listing4 = Listing.create!(title: "Mercer Island", price: 50, guest_num: 6, description: "If you can make it here you can stay here, make sure to tuck and roll",
    num_beds: 3, latitude: 47.598013, longitude: -122.225167, host_id: sally.id, city: 'Seattle, WA')
    seattle_listing4_cover= open("https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/luca-bravo-lake.jpg")
    seattle_listing4.coverphoto.attach(io: seattle_listing4_cover, filename: 'luca-bravo-lake.jpg')

seattle_listing5 = Listing.create!(title: "Historic Colonial", price: 250, guest_num: 4, description: "A beautiful home that looks right into Canada!",
    num_beds: 3, latitude: 47.628213, longitude: -123.335167, host_id: bob.id, city: 'Seattle, WA')
    seattle_listing5_cover= open("https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/lindsay-e-durant-HIfkoSBuFXc-unsplash.jpg")
    seattle_listing5.coverphoto.attach(io: seattle_listing5_cover, filename: 'lindsay-e-durant-HIfkoSBuFXc-unsplash.jpg')

# San Francisco lat: 37.733795, lng: -122.446747

sanfran_listing1 = Listing.create!(title: "Colorful Home on the Hill", price: 250, guest_num: 4, description: "Gain some leg strength and stay on the hill! A quick roll to anywhere",
    num_beds: 2, latitude: 37.733795, longitude: -122.446747, host_id: bob.id, city: 'San Francisco, CA')
    sanfran_listing1_cover= open("https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/kyle-smith-LBo8KX84t7o-unsplash.jpg")
    sanfran_listing1.coverphoto.attach(io: sanfran_listing1_cover, filename: 'kyle-smith-LBo8KX84t7o-unsplash.jpg')

sanfran_listing2 = Listing.create!(title: "Golden Gate Bridge", price: 900, guest_num: 2, description: "Very convienient location to the road and the best views in San Francisco",
    num_beds: 1, latitude: 37.833795, longitude: -122.486747, host_id: demo.id, city: 'San Francisco, CA')
    sanfran_listing2_cover= open("https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/joonyeop-baek-1kf69eE7VR4-unsplash.jpg")
    sanfran_listing2.coverphoto.attach(io: sanfran_listing2_cover, filename: 'joonyeop-baek-1kf69eE7VR4-unsplash.jpg')

sanfran_listing3 = Listing.create!(title: "Alcatraz Prison", price: 2000, guest_num: 40, description: "Feel free to stay because the only way to leave is by raincoat raft",
    num_beds: 40, latitude: 37.744795, longitude: -122.556747, host_id: felix.id, city: 'San Francisco, CA')
    sanfran_listing3_cover= open("https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/aldric-rivat-6bwYJgtzvE0-unsplash.jpg")
    sanfran_listing3.coverphoto.attach(io: sanfran_listing3_cover, filename: 'aldric-rivat-6bwYJgtzvE0-unsplash.jpg')

sanfran_listing4 = Listing.create!(title: "The Full House", price: 500, guest_num: 8, description: "The real house from Full House, it is up to you to fill it now!",
    num_beds: 5, latitude: 37.722795, longitude: -122.336747, host_id: sally.id, city: 'San Francisco, CA')
    sanfran_listing4_cover= open("https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/jordan-m-lomibao-QlBG1hIi02g-unsplash.jpg")
    sanfran_listing4.coverphoto.attach(io: sanfran_listing4_cover, filename: 'jordan-m-lomibao-QlBG1hIi02g-unsplash.jpg')

sanfran_listing5 = Listing.create!(title: "Trolley Car Tiny House", price: 150, guest_num: 2, description: "Stay at the most unique and most San Francisco place of them all...a Trolley Car!",
    num_beds: 1, latitude: 37.733885, longitude: -122.448847, host_id: bob.id, city: 'San Francisco, CA')
    sanfran_listing5_cover= open("https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/fringer-cat-IchEp56ZYjY-unsplash.jpg")
    sanfran_listing5.coverphoto.attach(io: sanfran_listing5_cover, filename: 'fringer-cat-IchEp56ZYjY-unsplash.jpg')

#Bookings
booking_1 = Booking.create!(check_in: '2021-07-13', check_out: '2021-07-16', guest_id: demo.id, listing_id: ny_listing1.id, num_guests: 3)
booking_2 = Booking.create!(check_in: '2021-08-13', check_out: '2021-08-20', guest_id: demo.id, listing_id: boston_listing1.id, num_guests: 4)
booking_3 = Booking.create!(check_in: '2021-09-13', check_out: '2021-09-21', guest_id: demo.id, listing_id: austin_listing1.id, num_guests: 5)
booking_4 = Booking.create!(check_in: '2021-10-01', check_out: '2021-10-10', guest_id: demo.id, listing_id: seattle_listing1.id, num_guests: 3)
booking_5 = Booking.create!(check_in: '2021-11-10', check_out: '2021-11-20', guest_id: demo.id, listing_id: sanfran_listing1.id, num_guests: 4)


#Reviews
review_1 = Review.create!(body:"Such a beautiful location", rating: 5, guest_id: demo.id, listing_id: ny_listing1.id )
review_2 = Review.create!(body:"The host was so great!", rating: 4, guest_id: bob.id, listing_id: ny_listing1.id )
review_3 = Review.create!(body:"Had a lot of fun this house was adequate", rating: 3, guest_id: felix.id, listing_id: ny_listing1.id )
review_4 = Review.create!(body:"Bring me back!", rating: 5, guest_id: sally.id, listing_id: ny_listing1.id )
review_5 = Review.create!(body:"Could not get me to leave even though they tried", rating: 4, guest_id: demo.id, listing_id: ny_listing2.id )
review_6 = Review.create!(body:"Eh pretty good", rating: 3, guest_id: bob.id, listing_id: ny_listing2.id )
review_7 = Review.create!(body:"OOO heaven is a place on earth", rating: 5, guest_id: felix.id, listing_id: ny_listing2.id )
review_8 = Review.create!(body:"Was very solid, would suggest", rating: 4, guest_id: sally.id, listing_id: ny_listing2.id )
review_9 = Review.create!(body:"Would NOT suggest", rating: 3, guest_id: demo.id, listing_id: ny_listing3.id )
review_10 = Review.create!(body:"Unbelievable views!", rating: 5, guest_id: bob.id, listing_id: ny_listing3.id )
review_11 = Review.create!(body:"Much wow, such beauty", rating: 4, guest_id: felix.id, listing_id: ny_listing3.id )
review_12 = Review.create!(body:"Country roads take me home", rating: 4, guest_id: sally.id, listing_id: ny_listing3.id )
review_13 = Review.create!(body:"So great, love that my dog could come!", rating: 5, guest_id: demo.id, listing_id: ny_listing4.id )
review_14 = Review.create!(body:"Maybe a little too good...", rating: 4, guest_id: bob.id, listing_id: ny_listing4.id )
review_15 = Review.create!(body:"Had a lovely time, would have liked to stay longer", rating: 4, guest_id: felix.id, listing_id: ny_listing4.id )
review_16 = Review.create!(body:"Eh pretty good", rating: 3, guest_id: sally.id, listing_id: ny_listing4.id )
review_17 = Review.create!(body:"The place was so clean...beds could be better", rating: 4, guest_id: demo.id, listing_id: ny_listing5.id )
review_18 = Review.create!(body:"Such a beautiful location", rating: 5, guest_id: bob.id, listing_id: ny_listing5.id )
review_19 = Review.create!(body:"Unbelievable views!", rating: 5, guest_id: felix.id, listing_id: ny_listing5.id )
review_20 = Review.create!(body:"Was very solid, would suggest", rating: 4, guest_id: sally.id, listing_id: ny_listing5.id )
review_21 = Review.create!(body:"The host was so great!", rating: 5, guest_id: demo.id, listing_id: austin_listing1.id )
review_22 = Review.create!(body:"Would NOT suggest", rating: 3, guest_id: bob.id, listing_id: austin_listing1.id )
review_23 = Review.create!(body:"So great, love that my dog could come!", rating: 5, guest_id: felix.id, listing_id: austin_listing1.id )
review_24 = Review.create!(body:"Rascal had a great time :)", rating: 4, guest_id: sally.id, listing_id: austin_listing1.id )
review_25 = Review.create!(body:"Now I get it", rating: 5, guest_id: bob.id, listing_id: austin_listing2.id )
review_26 = Review.create!(body:"The place was so clean...beds could be better", rating: 3, guest_id: felix.id, listing_id: austin_listing2.id )
review_27 = Review.create!(body:"I physically can not leave a bad review", rating: 5, guest_id: sally.id, listing_id: austin_listing2.id )
review_28 = Review.create!(body:"Pretty good, but you should stay at my house", rating: 4, guest_id: demo.id, listing_id: austin_listing2.id )
review_29 = Review.create!(body:"Country roads take me home", rating: 5, guest_id: bob.id, listing_id: austin_listing3.id )
review_30 = Review.create!(body:"Had a lot of fun this house was adequate", rating: 3, guest_id: felix.id, listing_id: austin_listing3.id )
review_31 = Review.create!(body:"Such a beautiful location", rating: 5, guest_id: sally.id, listing_id: austin_listing3.id )
review_32 = Review.create!(body:"So great, love that my dog could come!", rating: 5, guest_id: demo.id, listing_id: austin_listing3.id )
review_33 = Review.create!(body:"Unbelievable views!", rating: 5, guest_id: bob.id, listing_id: austin_listing4.id )
review_34 = Review.create!(body:"Was very solid, would suggest", rating: 4, guest_id: felix.id, listing_id: austin_listing4.id )
review_35 = Review.create!(body:"Bring me back!", rating: 5, guest_id: sally.id, listing_id: austin_listing4.id )
review_36 = Review.create!(body:"I physically can not leave a bad review", rating: 5, guest_id: demo.id, listing_id: austin_listing4.id )
review_37 = Review.create!(body:"Eh pretty good", rating: 3, guest_id: demo.id, listing_id: austin_listing5.id )
review_38 = Review.create!(body:"The host was so great!", rating: 5, guest_id: bob.id, listing_id: austin_listing5.id )
review_39 = Review.create!(body:"Maybe a little too good...", rating: 4, guest_id: felix.id, listing_id: austin_listing5.id )
review_40 = Review.create!(body:"Rascal had a great time :)", rating: 5, guest_id: sally.id, listing_id: austin_listing5.id )
review_41 = Review.create!(body:"Such a beautiful location", rating: 5, guest_id: bob.id, listing_id: boston_listing1.id )
review_42 = Review.create!(body:"Had a lot of fun this house was adequate", rating: 3, guest_id: felix.id, listing_id: boston_listing1.id )
review_43 = Review.create!(body:"Had a lovely time, would have liked to stay longer", rating: 5, guest_id: sally.id, listing_id: boston_listing1.id )
review_44 = Review.create!(body:"I physically can not leave a bad review", rating: 5, guest_id: bob.id, listing_id: boston_listing1.id )
review_45 = Review.create!(body:"The place was so clean...beds could be better", rating: 4, guest_id: felix.id, listing_id: boston_listing2.id )
review_46 = Review.create!(body:"Such a beautiful location", rating: 5, guest_id: sally.id, listing_id: boston_listing2.id )
review_47 = Review.create!(body:"Country roads take me home", rating: 5, guest_id: bob.id, listing_id: boston_listing2.id )
review_48 = Review.create!(body:"Maybe a little too good...", rating: 3, guest_id: felix.id, listing_id: boston_listing2.id )
review_49 = Review.create!(body:"Had some Sam Adams...might have seen Sam Adams", rating: 5, guest_id: sally.id, listing_id: boston_listing3.id )
review_50 = Review.create!(body:"Could not get me to leave even though they tried", rating: 4, guest_id: demo.id, listing_id: boston_listing3.id )
review_51 = Review.create!(body:"Rascal had a great time :)", rating: 5, guest_id: bob.id, listing_id: boston_listing3.id )
review_52 = Review.create!(body:"Saw the sox...and they saw me", rating: 5, guest_id: felix.id, listing_id: boston_listing3.id )
review_53 = Review.create!(body:"Eh pretty good", rating: 3, guest_id: sally.id, listing_id: boston_listing4.id )
review_54 = Review.create!(body:"So great, love that my dog could come!", rating: 5, guest_id: demo.id, listing_id: boston_listing4.id )
review_55 = Review.create!(body:"Had a lovely time, would have liked to stay longer", rating: 5, guest_id: bob.id, listing_id: boston_listing4.id )
review_56 = Review.create!(body:"The place was so clean...beds could be better", rating: 4, guest_id: demo.id, listing_id: boston_listing4.id )
review_57 = Review.create!(body:"Such a beautiful location", rating: 5, guest_id: bob.id, listing_id: boston_listing5.id )
review_58 = Review.create!(body:"Unbelievable views!", rating: 5, guest_id: felix.id, listing_id: boston_listing5.id )
review_59 = Review.create!(body:"Was very solid, would suggest", rating: 4, guest_id: sally.id, listing_id: boston_listing5.id )
review_60 = Review.create!(body:"Going to move here now", rating: 5, guest_id: bob.id, listing_id: boston_listing5.id )
review_61 = Review.create!(body:"Rascal had a great time :)", rating: 5, guest_id: bob.id, listing_id: chicago_listing1.id )
review_62 = Review.create!(body:"The host was so great!", rating: 4, guest_id: felix.id, listing_id: chicago_listing1.id )
review_63 = Review.create!(body:"Such a beautiful location", rating: 5, guest_id: sally.id, listing_id: chicago_listing1.id )
review_64 = Review.create!(body:"I physically can not leave a bad review", rating: 5, guest_id: demo.id, listing_id: chicago_listing1.id )
review_65 = Review.create!(body:"Pretty good, but you should stay at my house", rating: 4, guest_id: bob.id, listing_id: chicago_listing2.id )
review_66 = Review.create!(body:"Wow so lit, loved it", rating: 5, guest_id: felix.id, listing_id: chicago_listing2.id )
review_67 = Review.create!(body:"Let me go to CHICAGOOOO", rating: 5, guest_id: sally.id, listing_id: chicago_listing2.id )
review_68 = Review.create!(body:"The place was so clean...beds could be better", rating: 4, guest_id: demo.id, listing_id: chicago_listing2.id )
review_69 = Review.create!(body:"Could not get me to leave even though they tried", rating: 4, guest_id: bob.id, listing_id: chicago_listing3.id )
review_70 = Review.create!(body:"Going to move here now", rating: 5, guest_id: felix.id, listing_id: chicago_listing3.id )
review_71 = Review.create!(body:"Had a lovely time, would have liked to stay longer", rating: 4, guest_id: sally.id, listing_id: chicago_listing3.id )
review_72 = Review.create!(body:"Such a beautiful location", rating: 5, guest_id: demo.id, listing_id: chicago_listing3.id )
review_73 = Review.create!(body:"Maybe a little too good...", rating: 4, guest_id: demo.id, listing_id: chicago_listing4.id )
review_74 = Review.create!(body:"So great, love that my dog could come!", rating: 5, guest_id: bob.id, listing_id: chicago_listing4.id )
review_75 = Review.create!(body:"Country roads take me home", rating: 4, guest_id: felix.id, listing_id: chicago_listing4.id )
review_76 = Review.create!(body:"Unbelievable views!", rating: 5, guest_id: sally.id, listing_id: chicago_listing4.id )
review_77 = Review.create!(body:"Had a lot of fun this house was adequate", rating: 3, guest_id: demo.id, listing_id: chicago_listing5.id )
review_78 = Review.create!(body:"Bring me back!", rating: 5, guest_id: bob.id, listing_id: chicago_listing5.id )
review_79 = Review.create!(body:"Was very solid, would suggest", rating: 4, guest_id: felix.id, listing_id: chicago_listing5.id )
review_80 = Review.create!(body:"The place was so clean...beds could be better", rating: 4, guest_id: sally.id, listing_id: chicago_listing5.id )
review_81 = Review.create!(body:"Rascal had a great time :)", rating: 5, guest_id: demo.id, listing_id: miami_listing1.id )
review_82 = Review.create!(body:"The host was so great!", rating: 5, guest_id: bob.id, listing_id: miami_listing1.id )
review_83 = Review.create!(body:"Such a beautiful location", rating: 4, guest_id: felix.id, listing_id: miami_listing1.id )
review_84 = Review.create!(body:"I physically can not leave a bad review", rating: 5, guest_id: sally.id, listing_id: miami_listing1.id )
review_85 = Review.create!(body:"Eh pretty good", rating: 3, guest_id: demo.id, listing_id: miami_listing1.id )
review_86 = Review.create!(body:"Had a lovely time, would have liked to stay longer", rating: 5, guest_id: bob.id, listing_id: miami_listing2.id )
review_87 = Review.create!(body:"Pretty good, but you should stay at my house", rating: 4, guest_id: felix.id, listing_id: miami_listing2.id )
review_88 = Review.create!(body:"Take me to Miami", rating: 5, guest_id: sally.id, listing_id: miami_listing2.id )
review_89 = Review.create!(body:"Maybe a little too good...", rating: 4, guest_id: demo.id, listing_id: miami_listing2.id )
review_90 = Review.create!(body:"Could not get me to leave even though they tried", rating: 5, guest_id: bob.id, listing_id: miami_listing2.id )
review_91 = Review.create!(body:"The place was so clean...beds could be better", rating: 4, guest_id: felix.id, listing_id: miami_listing3.id )
review_92 = Review.create!(body:"Such a beautiful location", rating: 5, guest_id: sally.id, listing_id: miami_listing3.id )
review_93 = Review.create!(body:"Had a lot of fun this house was adequate", rating: 3, guest_id: demo.id, listing_id: miami_listing3.id )
review_94 = Review.create!(body:"Much wow, such beauty", rating: 5, guest_id: bob.id, listing_id: miami_listing3.id )
review_95 = Review.create!(body:"Rascal had a great time :)", rating: 4, guest_id: felix.id, listing_id: miami_listing4.id )
review_96 = Review.create!(body:"Country roads take me home", rating: 5, guest_id: sally.id, listing_id: miami_listing4.id )
review_97 = Review.create!(body:"Would NOT suggest", rating: 3, guest_id: demo.id, listing_id: miami_listing4.id )
review_98 = Review.create!(body:"So great, love that my dog could come!", rating: 5, guest_id: bob.id, listing_id: miami_listing4.id )
review_99 = Review.create!(body:"Was very solid, would suggest", rating: 4, guest_id: felix.id, listing_id: miami_listing5.id )
review_100 = Review.create!(body:"Had a lovely time, would have liked to stay longer", rating: 5, guest_id: sally.id, listing_id: miami_listing5.id )
review_101 = Review.create!(body:"Such a beautiful location", rating: 3, guest_id: demo.id, listing_id: miami_listing5.id )
review_102 = Review.create!(body:"Bring me back!", rating: 5, guest_id: bob.id, listing_id: miami_listing5.id )
review_103 = Review.create!(body:"Maybe a little too good...", rating: 4, guest_id: felix.id, listing_id: seattle_listing1.id )
review_104 = Review.create!(body:"Unbelievable views!", rating: 5, guest_id: sally.id, listing_id: seattle_listing1.id )
review_105 = Review.create!(body:"Eh pretty good", rating: 3, guest_id: demo.id, listing_id: seattle_listing1.id )
review_106 = Review.create!(body:"Could not get me to leave even though they tried", rating: 5, guest_id: bob.id, listing_id: seattle_listing1.id )
review_107 = Review.create!(body:"Rascal had a great time :)", rating: 4, guest_id: felix.id, listing_id: seattle_listing2.id )
review_108 = Review.create!(body:"Country roads take me home", rating: 5, guest_id: sally.id, listing_id: seattle_listing2.id )
review_109 = Review.create!(body:"Had a lot of fun this house was adequate", rating: 3, guest_id: demo.id, listing_id: seattle_listing2.id )
review_110 = Review.create!(body:"So good! thank you for hosting us!", rating: 5, guest_id: bob.id, listing_id: seattle_listing2.id )
review_111 = Review.create!(body:"Much wow, such beauty", rating: 4, guest_id: felix.id, listing_id: seattle_listing3.id )
review_112 = Review.create!(body:"I physically can not leave a bad review", rating: 5, guest_id: sally.id, listing_id: seattle_listing3.id )
review_113 = Review.create!(body:"Had a lovely time, would have liked to stay longer", rating: 4, guest_id: demo.id, listing_id: seattle_listing3.id )
review_114 = Review.create!(body:"So great, love that my dog could come!", rating: 5, guest_id: bob.id, listing_id: seattle_listing3.id )
review_115 = Review.create!(body:"Maybe a little too good...", rating: 4, guest_id: felix.id, listing_id: seattle_listing4.id )
review_116 = Review.create!(body:"Was very solid, would suggest", rating: 4, guest_id: sally.id, listing_id: seattle_listing4.id )
review_117 = Review.create!(body:"Such a beautiful location", rating: 5, guest_id: demo.id, listing_id: seattle_listing4.id )
review_118 = Review.create!(body:"Bring me back!", rating: 5, guest_id: bob.id, listing_id: seattle_listing4.id )
review_119 = Review.create!(body:"I physically can not leave a bad review", rating: 5, guest_id: felix.id, listing_id: seattle_listing5.id )
review_120 = Review.create!(body:"The place was so clean...beds could be better", rating: 4, guest_id: sally.id, listing_id: seattle_listing5.id )
review_121 = Review.create!(body:"Unbelievable views!", rating: 5, guest_id: demo.id, listing_id: seattle_listing5.id )
review_122 = Review.create!(body:"Could not get me to leave even though they tried", rating: 5, guest_id: bob.id, listing_id: seattle_listing5.id )
review_123 = Review.create!(body:"Maybe a little too good...", rating: 4, guest_id: felix.id, listing_id: sanfran_listing1.id )
review_124 = Review.create!(body:"Going to move here now", rating: 5, guest_id: sally.id, listing_id: sanfran_listing1.id )
review_125 = Review.create!(body:"Had a lot of fun this house was adequate", rating: 3, guest_id: demo.id, listing_id: sanfran_listing1.id )
review_126 = Review.create!(body:"Had a lovely time, would have liked to stay longer", rating: 5, guest_id: bob.id, listing_id: sanfran_listing1.id )
review_127 = Review.create!(body:"Much wow, such beauty", rating: 5, guest_id: felix.id, listing_id: sanfran_listing2.id )
review_128 = Review.create!(body:"Was very solid, would suggest", rating: 4, guest_id: sally.id, listing_id: sanfran_listing2.id )
review_129 = Review.create!(body:"So great, love that my dog could come!", rating: 5, guest_id: demo.id, listing_id: sanfran_listing2.id )
review_130 = Review.create!(body:"Unbelievable views!", rating: 5, guest_id: bob.id, listing_id: sanfran_listing2.id )
review_131 = Review.create!(body:"Eh pretty good", rating: 3, guest_id: felix.id, listing_id: sanfran_listing3.id )
review_132 = Review.create!(body:"Such a beautiful location", rating: 5, guest_id: sally.id, listing_id: sanfran_listing3.id )
review_133 = Review.create!(body:"Bring me back!", rating: 5, guest_id: demo.id, listing_id: sanfran_listing3.id )
review_134 = Review.create!(body:"Maybe a little too good...", rating: 4, guest_id: bob.id, listing_id: sanfran_listing3.id )
review_135 = Review.create!(body:"The host was so great!", rating: 5, guest_id: felix.id, listing_id: sanfran_listing4.id )
review_136 = Review.create!(body:"Country roads take me home", rating: 5, guest_id: sally.id, listing_id: sanfran_listing4.id )
review_137 = Review.create!(body:"Had a lot of fun this house was adequate", rating: 3, guest_id: demo.id, listing_id: sanfran_listing4.id )
review_138 = Review.create!(body:"Much wow, such beauty", rating: 5, guest_id: bob.id, listing_id: sanfran_listing4.id )
review_139 = Review.create!(body:"So great, love that my dog could come!", rating: 5, guest_id: felix.id, listing_id: sanfran_listing5.id )
review_140 = Review.create!(body:"Was very solid, would suggest", rating: 4, guest_id: sally.id, listing_id: sanfran_listing5.id )
review_141 = Review.create!(body:"Could not get me to leave even though they tried", rating: 5, guest_id: demo.id, listing_id: sanfran_listing5.id )
review_142 = Review.create!(body:"Eh pretty good", rating: 3, guest_id: bob.id, listing_id: sanfran_listing5.id )

    # Space needle - "https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/andrea-leopardi-QfhbK2pY0Ao-unsplash.jpg",
    # trolley - "https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/fringer-cat-IchEp56ZYjY-unsplash.jpg",
    # alcatraz - "https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/aldric-rivat-6bwYJgtzvE0-unsplash.jpg",
    #fullhouse - "https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/jordan-m-lomibao-QlBG1hIi02g-unsplash.jpg",
    # San Fran - "https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/kyle-smith-LBo8KX84t7o-unsplash.jpg",
    # castle - "https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/marc-zimmer-kEP-zO-w4nE-unsplash.jpg",
    # fenway - "https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/robert-f-9t5sV4KarVA-unsplash.jpg",
    # space needle - "https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/timothy-eberly-CXEqz2g0j9g-unsplash.jpg",
    # Citgo sign - "https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/todd-kent-iRKv_XiN--M-unsplash.jpg",
    #water -cabin - "https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/luca-bravo-lake.jpg",
    # main photo - "https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/jon-flobrant-sheds.jpg",
    #golden gate - "https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/joonyeop-baek-1kf69eE7VR4-unsplash.jpg",
    #boston-style -"https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/alexander-london-hIz8LZW8qfI-unsplash.jpg"
    #barn -"https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/amy-reed-8hRr0IFz6qA-unsplash.jpg"
    #cottage -"https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/annie-spratt-rti3HfYJzOM-unsplash.jpg"
    #townhome -"https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/bernadette-gatsby-bN_TkedaBuQ-unsplash.jpg"
    #boston townhome -"https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/christian-koch-D_4R9CcYZOk-unsplash.jpg	"
    #miami apt -"https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/cody-board-aBPx_3gOhig-unsplash.jpg	"
    #highrise apt -"https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/folco-masi-fhA8jbG49zU-unsplash.jpg	"
    #sears tower -"https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/guido-coppa-nMERjkt2o5k-unsplash.jpg"
    #Wirgley -"https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/heather-maguire-1nKs6Js_JxA-unsplash.jpg"
    #miami cockedo -"https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/jason-briscoe--T0La6F_WrE-unsplash.jpg"
    #sandcastle -"https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/kit-suman-aIh-ic7kPo8-unsplash.jpg"
    #igloo -"https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/lauri-vuokila-8_58RjtO4bQ-unsplash.jpg"
    #boston-townhome -"https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/lindsay-e-durant-HIfkoSBuFXc-unsplash.jpg"
    #miami mansion -"https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/matin-keivanloo-2Fn53YULM48-unsplash.jpg"
    #pizza -"https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/matt-antonioli-ctwbBwcwI9U-unsplash.jpg"
    #house lake -"https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/morgane-perraud-rPA5JlVuf7Q-unsplash.jpg"
    #dolphin -"https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/noaa-NsvzdXtvyio-unsplash.jpg"
    #miami club -"https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/ryan-spencer-Um9AkOiIDcU-unsplash.jpg"
    #chicago bean -"https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/sawyer-bengtson-tnv84LOjes4-unsplash.jpg"
    #southie -"https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/tiffany-chan-lT2hiMUACco-unsplash.jpg"
    

photo_urls = [
    "https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/alberto-castillo-q-mx4mSkK9zeo-unsplash.jpg",	
    "https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/andrea-davis-IWfe63thJxk-unsplash.jpg",	
    "https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/andrea-davis-nbI8gqbBaHo-unsplash.jpg",	
    "https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/jakob-owens-DJV40FsmPSg-unsplash.jpg",	
    "https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/patrick-perkins-iRiVzALa4pI-unsplash.jpg",
    "https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/roberto-nickson-emqnSQwQQDo-unsplash.jpg",	
    "https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/sidekix-media-BAVam-y_9Wg-unsplash.jpg",	
    "https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/sidekix-media-r_y2VBvEOIE-unsplash.jpg",	
    "https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/zac-gudakov-95UK5aVgx54-unsplash.jpg",
    "https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/andrea-davis-0SSPeyokubs-unsplash.jpg",	
    "https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/im3rd-media-9USszO6wZqU-unsplash.jpg",	
    "https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/justin-schuler-dAAk8Aqd_-I-unsplash.jpg",	
    "https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/kyoshi-reyes-Ps_ujcY0oT8-unsplash.jpg",	
    "https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/marvin-meyer--wzNB4Fsoa0-unsplash.jpg",	
    "https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/neonbrand-mGZX2MOPR-s-unsplash.jpg",
    "https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/orlova-maria-b37mDyPzdJM-unsplash.jpg",
    "https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/vinicius-amnx-amano-17NCG_wOkMY-unsplash.jpg",
    "https://photos-wherebnb.s3.us-east-1.amazonaws.com/photo_seeds/zac-gudakov-_VH7-2PB3bc-unsplash.jpg",
]



	

	



	

	







	



	

	

	

	

 

	

	

	

	



