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
  owner_id: user1.id
})

b2 = Business.create({
  name: 'The Cage',
  email: 'west4@thecage.com',
  price_range: '$',
  owner_id: user2.id
})

b3 = Business.create({
  name: 'Canal St. Courts',
  email: 'hudsonriverparkway@canalst.com',
  price_range: '$',
  owner_id: user3.id
})

b4 = Business.create({
  name: 'Brooklyn Bridge Park Basketball Courts',
  email: 'bball@bbp.com',
  price_range: '$',
  owner_id: user4.id
})


