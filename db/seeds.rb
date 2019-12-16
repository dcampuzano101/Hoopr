# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Business.destroy_all

user1 = User.create({ 
  email: 'kingjames@lakers.com',
  password: 'michaeljordan',
  first_name: 'Lebron',
  last_name: 'James',
  zip_code: 11211
})

user2 = User.create({ 
  email: 'chefcurry@warriors.com',
  password: 'splashbro',
  first_name: 'Stephen',
  last_name: 'Curry',
  zip_code: 11237
})

user3 = User.create({ 
  email: 'killaklay@warriors.com',
  password: 'splashbro',
  first_name: 'Klay',
  last_name: 'Thompson',
  zip_code: 11207
})

user4 = User.create({ 
  email: 'luka@mavs.com',
  password: 'eurostep',
  first_name: 'Luka',
  last_name: 'Doncic',
  zip_code: 11008
})



b1 = Business.create({
  name: 'Rucker Park',
  email: 'ruckerpark@harlem.com',
  price_range: '$',
  owner_id: user1.id,
  rating: 3,
  court_type: 'Outdoor',
  start_time: '6:00 am',
  end_time: '8:00 pm',
  telephone: '(718) 917-1987'
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
  telephone: '(646) 646-1986'
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
  telephone: '(718) 516-2019'
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
  telephone: '(917) 212-1996'
})


