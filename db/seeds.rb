# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user1 = User.create({ 
  username: 'lbj23',
  password: 'michaeljordan',
  email: 'kingjames@lakers.com',
  first_name: 'Lebron',
  last_name: 'James',
  zip_code: 11211
})

user2 = User.create({ 
  username: 'sc30',
  password: 'splashbro',
  email: 'chefcurry@warriors.com',
  first_name: 'Stephen',
  last_name: 'Curry',
  zip_code: 11237
})

user3 = User.create({ 
  username: 'killaklay',
  password: 'splashbro',
  email: 'killaklay@warriors.com',
  first_name: 'Klay',
  last_name: 'Thompson',
  zip_code: 11207
})

user4 = User.create({ 
  username: 'luka2nasty',
  password: 'eurostep',
  email: 'luka@mavs.com',
  first_name: 'Luka',
  last_name: 'Doncic',
  zip_code: 11008
})