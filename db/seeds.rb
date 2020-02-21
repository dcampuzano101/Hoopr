# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all
Business.destroy_all
Review.destroy_all
Photo.destroy_all

user1 = User.create({
  email: 'kingjames@lakers.com',
  password: 'michaeljordan',
  first_name: 'Lebron',
  last_name: 'James',
  zip_code: 11211
  })

file1 = open('https://hoopr-seeds.s3.amazonaws.com/profile_photos/lebron_james_pf.png')

user1.profile_photo.attach(io: file1, filename: 'lebron_james_pf.png')


user2 = User.create({
  email: 'chefcurry@warriors.com',
  password: 'splashbro',
  first_name: 'Stephen',
  last_name: 'Curry',
  zip_code: 11237
  })

file2 = open('https://hoopr-seeds.s3.amazonaws.com/profile_photos/stephen_curry_pf.png')

user2.profile_photo.attach(io: file2, filename: 'stepen_curry.png')

user3 = User.create({
  email: 'killaklay@warriors.com',
  password: 'splashbro',
  first_name: 'Klay',
  last_name: 'Thompson',
  zip_code: 11207
  })

file3 = open('https://hoopr-seeds.s3.amazonaws.com/profile_photos/klay_thompson_pf.png')

user3.profile_photo.attach(io: file3, filename: 'klay_thompson_pf.png')



user4 = User.create({
  email: 'luka@mavs.com',
  password: 'eurostep',
  first_name: 'Luka',
  last_name: 'Doncic',
  zip_code: 11008
  })

file4 = open('https://hoopr-seeds.s3.amazonaws.com/profile_photos/luka_doncic_pf.png')

user4.profile_photo.attach(io: file4, filename: 'luka_doncic_pf.png')



b1 = Business.create({
  name: 'Rucker Park',
  email: 'ruckerpark@harlem.com',
  price_range: '$',
  owner_id: user1.id,
  rating: 3,
  court_type: 'Outdoor',
  start_time: '6:00 am',
  end_time: '8:00 pm',
  neighborhood: 'harlem',
  borough: 'manhattan',
  website: 'https://www.nycgovparks.org/parks/holcombe-rucker-park',
  latitude: 40.829045,
  longitude: -73.935837
})

b2 = Business.create({
  name: 'The Cage',
  email: 'west4@thecage.com',
  price_range: '$',
  owner_id: user2.id,
  rating: 3,
  court_type: 'Outdoor',
  start_time: 'Sunrise',
  end_time: 'Dusk',
  neighborhood: 'west village',
  borough: 'manhattan',
  website: 'https://www.nycgovparks.org/parks/west-4th-street-courts',
  latitude: 40.731392,
  longitude: -74.001019
})

b3 = Business.create({
  name: 'Canal St. Courts',
  email: 'hudsonriverparkway@canalst.com',
  price_range: '$',
  owner_id: user3.id,
  rating: 4,
  court_type: 'Outdoor',
  start_time: '6:00 am',
  end_time: '9:30 pm',
  neighborhood: 'lower-manhattan',
  borough: 'manhattan',
  website: 'https://hudsonriverpark.org/explore-the-park/activities/basketball-at-canal-st',
  latitude: 40.725586,
  longitude: -74.011522
})

b4 = Business.create({
  name: 'Brooklyn Bridge Park Basketball Courts',
  email: 'bball@bbp.com',
  price_range: '$',
  owner_id: user4.id,
  rating: 4,
  court_type: 'Outdoor',
  start_time: '6:00 am',
  end_time: '10:30 pm',
  neighborhood: 'brooklyn heights',
  borough: 'brooklyn',
  website: 'https://www.brooklynbridgepark.org/activities/basketball',
  latitude: 40.699434,
  longitude: -73.998738
})

b5 = Business.create({
  name: 'American Playground',
  email: 'n/a',
  price_range: '$',
  owner_id: user3.id,
  rating: 4,
  court_type: 'Outdoor',
  start_time: 'Sunrise',
  end_time: 'Dusk',
  neighborhood: 'greenpoint',
  borough: 'brooklyn',
  website: 'https://www.nycgovparks.org/parks/american-playground',
  latitude: 40.728884,
  longitude: -73.957725
})

b6 = Business.create({
  name: 'Maria Hernandez Park',
  email: 'n/a',
  price_range: '$',
  owner_id: user4.id,
  rating: 3,
  court_type: 'Outdoor',
  start_time: 'Sunrise',
  end_time: 'Dusk',
  neighborhood: 'bushwick',
  borough: 'brooklyn',
  website: 'https://www.nycgovparks.org/parks/maria-hernandez-park',
  latitude: 40.703405,
  longitude: -73.924269
})

b7 = Business.create({
  name: 'Cooper Park',
  email: 'n/a',
  price_range: '$',
  owner_id: user2.id,
  rating: 5,
  court_type: 'Outdoor',
  start_time: 'Sunrise',
  end_time: 'Dusk',
  neighborhood: 'williamsburg',
  borough: 'brooklyn',
  website: 'https://www.nycgovparks.org/parks/cooper-park',
  latitude: 40.715921,
  longitude: -73.936259
})

b7 = Business.create({
  name: 'Dean Playground',
  email: 'n/a',
  price_range: '$',
  owner_id: user3.id,
  rating: 4,
  court_type: 'Outdoor',
  start_time: 'Sunrise',
  end_time: 'Dusk',
  neighborhood: 'park slope',
  borough: 'brooklyn',
  website: 'https://www.nycgovparks.org/parks/dean-playground',
  latitude: 40.680816,
  longitude: -73.973160
})

b7 = Business.create({
  name: 'Brower Park',
  email: 'n/a',
  price_range: '$',
  owner_id: user1.id,
  rating: 4,
  court_type: 'Outdoor',
  start_time: 'Sunrise',
  end_time: 'Dusk',
  neighborhood: 'crown heights',
  borough: 'brooklyn',
  website: 'https://www.nycgovparks.org/parks/brower-park',
  latitude: 40.673467,
  longitude: -73.943803
})

b7 = Business.create({
  name: 'Christopher "Biggie" Wallace Basketball Courts',
  email: 'n/a',
  price_range: '$',
  owner_id: user2.id,
  rating: 4,
  court_type: 'Outdoor',
  start_time: 'Sunrise',
  end_time: 'Dusk',
  neighborhood: 'bedford-stuyvesant',
  borough: 'brooklyn',
  website: 'https://www.nycgovparks.org/parks/crispus-attucks-playground/',
  latitude: 40.681569,
  longitude: -73.959064
})


# user1 = User.create({
#   email: 'kingjames@lakers.com',
#   password: 'michaeljordan',
#   first_name: 'Lebron',
#   last_name: 'James',
#   zip_code: 11211
#   })

# file1 = open('https://hoopr-seeds.s3.amazonaws.com/profile_photos/lebron_james_pf.png')

# user1.profile_photo.attach(io: file1, filename: 'lebron_james_pf.png')

rucker1 = Photo.create({
  business_id: b1.id,
  user_id: user1.id,
  description: 'rucker 1'
})

ruckerPhotoFile1 = open('https://hoopr-seeds.s3.amazonaws.com/park_pics/rucker_seed_1.jpg')

rucker1.photo_file.attach(io: ruckerPhotoFile1, filename: 'rucker_seed_1.jpg')

rucker2 = Photo.create({
  business_id: b1.id,
  user_id: user1.id,
  description: 'rucker 2'
  })

ruckerPhotoFile2 = open('https://hoopr-seeds.s3.amazonaws.com/park_pics/rucker_seed_2.jpg')

rucker2.photo_file.attach(io: ruckerPhotoFile2, filename: 'rucker_seed_2.jpg')

rucker3 = Photo.create({
  business_id: b1.id,
  user_id: user1.id,
  description: 'rucker 3'
  })

ruckerPhotoFile3 = open('https://hoopr-seeds.s3.amazonaws.com/park_pics/rucker_seed_3.jpg')

rucker3.photo_file.attach(io: ruckerPhotoFile3, filename: 'rucker_seed_3.jpg')

rucker4 = Photo.create({
  business_id: b1.id,
  user_id: user1.id,
  description: 'rucker 4'
  })

ruckerPhotoFile4 = open('https://hoopr-seeds.s3.amazonaws.com/park_pics/rucker_seed_4.jpg')

rucker4.photo_file.attach(io: ruckerPhotoFile4, filename: 'rucker_seed_4.jpg')

cage1 = Photo.create({
  business_id: b2.id,
  user_id: user2.id,
  description: 'cage 1'
  })

cagePhotoFile1 = open('https://hoopr-seeds.s3.amazonaws.com/park_pics/cage_seed_1.jpg')

cage1.photo_file.attach(io: cagePhotoFile1, filename: 'cage_seed_1.jpg')

cage2 = Photo.create({
  business_id: b2.id,
  user_id: user2.id,
  description: 'cage 2'
  })

cagePhotoFile2 = open('https://hoopr-seeds.s3.amazonaws.com/park_pics/cage_seed_2.jpg')

cage2.photo_file.attach(io: cagePhotoFile2, filename: 'cage_seed_2.jpg')

cage3 = Photo.create({
  business_id: b2.id,
  user_id: user2.id,
  description: 'cage 3'
  })

cagePhotoFile3 = open('https://hoopr-seeds.s3.amazonaws.com/park_pics/cage_seed_3.jpg')

cage3.photo_file.attach(io: cagePhotoFile3, filename: 'cage_seed_3.jpg')

cage4 = Photo.create({
  business_id: b2.id,
  user_id: user2.id,
  description: 'cage 4'
  })

cagePhotoFile4 = open('https://hoopr-seeds.s3.amazonaws.com/park_pics/cage_seed_4.jpg')

cage4.photo_file.attach(io: cagePhotoFile4, filename: 'cage_seed_4.jpg')

canal1 = Photo.create({
  business_id: b3.id,
  user_id: user3.id,
  description: 'canal 1'
  })

canalPhotoFile1 = open('https://hoopr-seeds.s3.amazonaws.com/park_pics/canal_seed_1.jpg')

canal1.photo_file.attach(io: canalPhotoFile1, filename: 'canal_seed_1.jpg')

canal2 = Photo.create({
  business_id: b3.id,
  user_id: user3.id,
  description: 'canal 2'
  })

canalPhotoFile2 = open('https://hoopr-seeds.s3.amazonaws.com/park_pics/canal_seed_2.jpeg')

canal2.photo_file.attach(io: canalPhotoFile2, filename: 'canal_seed_2.jpg')

canal3 = Photo.create({
  business_id: b3.id,
  user_id: user3.id,
  description: 'canal 3'
  })

canalPhotoFile3 = open('https://hoopr-seeds.s3.amazonaws.com/park_pics/canal_seed_3.jpg')

canal3.photo_file.attach(io: canalPhotoFile3, filename: 'canal_seed_3.jpg')

canal4 = Photo.create({
  business_id: b3.id,
  user_id: user3.id,
  description: 'canal 4'
  })

canalPhotoFile4 = open('https://hoopr-seeds.s3.amazonaws.com/park_pics/canal_seed_4.jpg')

canal4.photo_file.attach(io: canalPhotoFile4, filename: 'canal_seed_4.jpg')