# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(username: 'darude', password: 'sandstorm', profile_image_url: 'https://res.cloudinary.com/winber1/image/upload/v1495486745/ramipf5zx0trf7dtqhyv.jpg')
user2 = User.create(username: 'winber1', password: 'password', profile_image_url: 'http://res.cloudinary.com/winber1/image/upload/v1494889520/ditto_fag_qjnfcv.jpg')

song1 = Song.create(
    title: 'username song',
    author_id: '1',
    genre: 'Future Funk',
    album: 'album',
    description: 'this is a really good song description.',
    release_date: Date.new(2014,5,14),
    image_url: 'http://res.cloudinary.com/winber1/image/upload/v1494889520/ditto_fag_qjnfcv.jpg',
    track_url: 'http://res.cloudinary.com/winber1/video/upload/v1494889475/05_-_Love_Ya_ei2alj.mp3'
    )

song2 = Song.create(
    title: 'username song',
    author_id: '2',
    genre: 'OST',
    album: 'Nier',
    description: 'HELLO AND THANK YOU PLS PLAY NIER',
    release_date: Date.new(2017,3,17),
    image_url: 'http://res.cloudinary.com/winber1/image/upload/v1495061726/nier_n4nkb5.png',
    track_url: 'http://res.cloudinary.com/winber1/video/upload/v1495062337/02._%E9%81%BA%E3%82%B5%E3%83%AC%E3%82%BF%E5%A0%B4%E6%89%80_%E6%96%9C%E5%85%89_luvxlt.mp3'
    )

song3 = Song.create(
    title: 'username song',
    author_id: '2',
    genre: 'OST',
    album: 'Nier',
    description: 'HELLO AND THANK YOU PLS PLAY NIER',
    release_date: Date.new(2017,3,17),
    image_url: 'http://res.cloudinary.com/winber1/image/upload/v1495061726/nier_n4nkb5.png',
    track_url: 'http://res.cloudinary.com/winber1/video/upload/v1495061844/15._Weight_of_the_World_English_Version_jbsja7.mp3'
    )

comment1 = Comment.create(author_id: user2.id, song_id: song1.id, body: 'sick wubs')
comment2 = Comment.create(author_id: user2.id, song_id: song1.id, body: 'LOVE YA')
comment3 = Comment.create(author_id: user2.id, song_id: song1.id, body: 'pure GENius bruh')
comment4 = Comment.create(author_id: user2.id, song_id: song2.id, body: 'NIER IS AMAZING')
