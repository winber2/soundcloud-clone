# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(username: 'darude', password: 'sandstorm')

song1 = Song.create(
    title: 'username song',
    author_id: '1',
    genre: 'Future Funk',
    album: 'album',
    release_date: '05/14/2017',
    image_url: 'http://res.cloudinary.com/winber1/image/upload/v1494889520/ditto_fag_qjnfcv.jpg',
    track_url: 'http://res.cloudinary.com/winber1/video/upload/v1494889475/05_-_Love_Ya_ei2alj.mp3'
    )

song2 = Song.create(
    title: 'username song',
    author_id: '1',
    genre: 'Future Funk',
    album: 'album',
    release_date: '05/14/2017',
    image_url: 'http://res.cloudinary.com/winber1/image/upload/v1494889520/ditto_fag_qjnfcv.jpg',
    track_url: 'http://res.cloudinary.com/winber1/video/upload/v1494889475/05_-_Love_Ya_ei2alj.mp3'
    )

song3 = Song.create(
    title: 'username song',
    author_id: '1',
    genre: 'Future Funk',
    album: 'album',
    release_date: '05/14/2017',
    image_url: 'http://res.cloudinary.com/winber1/image/upload/v1494889520/ditto_fag_qjnfcv.jpg',
    track_url: 'http://res.cloudinary.com/winber1/video/upload/v1494889475/05_-_Love_Ya_ei2alj.mp3'
    )
