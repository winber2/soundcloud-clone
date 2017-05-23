user1 = User.create!(
  username: 'darude',
  password: 'sandstorm',
  profile_image_url: 'https://res.cloudinary.com/winber1/image/upload/v1495486745/ramipf5zx0trf7dtqhyv.jpg',
  header_image_url: 'https://res.cloudinary.com/winber1/image/upload/v1495513488/darude_crppxl.jpg'
  )

user2 = User.create!(
  username: 'cametek',
  password: 'password',
  profile_image_url: 'https://res.cloudinary.com/winber1/image/upload/v1495513485/cametek_igiyiy.jpg',
  header_image_url: 'https://res.cloudinary.com/winber1/image/upload/v1495513489/cametek_bg_srvjjs.jpg'
  )

user3 = User.create!(
  username: 'Billain',
  password: 'password',
  profile_image_url: 'https://res.cloudinary.com/winber1/image/upload/v1495513488/billain_tsprra.jpg',
  header_image_url: 'https://res.cloudinary.com/winber1/image/upload/v1495513489/billain_bg_wnrwx0.jpg'
  )

user4 = User.create!(
  username: 'YUC\'e',
  password: 'password',
  profile_image_url: 'https://res.cloudinary.com/winber1/image/upload/v1495516981/yuce_ikcl5g.jpg',
  header_image_url: 'https://res.cloudinary.com/winber1/image/upload/v1495513486/galaxy_bjq8qh.jpg'
  )

user5 = User.create!(
  username: 'RockNetwork',
  password: 'password',
  profile_image_url: 'http://res.cloudinary.com/winber1/image/upload/v1495513488/dog_faofh9.jpg',
  header_image_url: 'https://res.cloudinary.com/winber1/image/upload/v1495513487/metal-bg_n3xo1j.jpg'
  )


user6 = User.create!(
  username: 'NierAutomata',
  password: 'password',
  profile_image_url: 'https://res.cloudinary.com/winber1/image/upload/v1495061726/nier_n4nkb5.png',
  header_image_url: 'https://res.cloudinary.com/winber1/image/upload/v1495517575/nier_hacoif.jpg'
  )

user7 = User.create!(
  username: 'Aiobahn',
  password: 'password',
  profile_image_url: 'https://res.cloudinary.com/winber1/image/upload/v1495513485/izumi_wmzb2y.jpg',
  header_image_url: 'http://res.cloudinary.com/winber1/image/upload/v1495517356/sagiri_zvbxwp.png'
  )

user8 = User.create!(
  username: 'Dj Leanrock',
  password: 'password',
  profile_image_url: 'https://res.cloudinary.com/winber1/image/upload/v1495513487/leanrock_py25hz.jpg',
  header_image_url: 'https://res.cloudinary.com/winber1/image/upload/v1495513487/leanrockbg_ni7n4b.jpg'
  )

user9 = User.create!(
  username: 'Jesus',
  password: 'password',
  profile_image_url: 'https://res.cloudinary.com/winber1/image/upload/v1495513486/senpai_a3grjr.jpg',
  header_image_url: 'https://res.cloudinary.com/winber1/image/upload/v1495513485/sunset-anime-girl-1366x768_hnl6yq.jpg'
  )

song1 = Song.create!(
  title: 'Weight of the World',
  author_id: user6.id,
  genre: 'OST',
  description: 'Nier Automata OST: Weight of the world. One of the most beautiful songs in the game. Speaking of which, you should really play the game, BECAUSE IT\'S AMAZING. DO IT NOW!!',
  release_date: Date.new(2017,3,17),
  image_url: 'https://res.cloudinary.com/winber1/image/upload/v1495061726/nier_n4nkb5.png',
  track_url: 'https://res.cloudinary.com/winber1/video/upload/v1495061844/15._Weight_of_the_World_English_Version_jbsja7.mp3',
  )

song2 = Song.create!(
  title: '崩壊ノ虚妄',
  author_id: user6.id,
  genre: 'OST',
  description: 'To be honest, I don\'t know what the title even says, but this song it still really cool :). Oh, by the way, did I mention how amazing this game is? You haven\'t lived if you have\'t played it, just so you know. PLAY IT NOW!!',
  release_date: Date.new(2017,3,17),
  image_url: 'https://res.cloudinary.com/winber1/image/upload/v1495061726/nier_n4nkb5.png',
  track_url: 'https://res.cloudinary.com/winber1/video/upload/v1495062148/03._崩壊ノ虚妄_cufozg.mp3',
  )

song3 = Song.create!(
  title: '美シキ歌',
  author_id: user6.id,
  genre: 'OST',
  description: 'GOOSBUMPS ALL DAY. SIMONE BOSS BATTLE MUSIC. ONE OF THE BEST SPINECHILLING OST\'s OUT THERE. YOU GOTTA PLAY THIS GAME NOW. LITERALLY LIFE CHANGING FOR EVERYONE. PLAY NIER NOW!!',
  release_date: Date.new(2017,3,17),
  image_url: 'https://res.cloudinary.com/winber1/image/upload/v1495061726/nier_n4nkb5.png',
  track_url: 'https://res.cloudinary.com/winber1/video/upload/v1495062300/08._美シキ歌_w77ouv.mp3',
  )

song4 = Song.create!(
  title: '遺サレタ場所斜光',
  author_id: user6.id,
  genre: 'OST',
  description: 'One day I\'ll be able to read this. But in the meantime you should really enjoy masterpiece of work by Keiichi Okabe. Genius composer, honestly. But, you know what\'s also genius? THE GODDAMN GAME NIER: AUTOMATA, which you should DEFINITELY PLAY. NOW!!',
  release_date: Date.new(2017,3,17),
  image_url: 'https://res.cloudinary.com/winber1/image/upload/v1495061726/nier_n4nkb5.png',
  track_url: 'https://res.cloudinary.com/winber1/video/upload/v1495062337/02._遺サレタ場所_斜光_luvxlt.mp3',
  )

song5 = Song.create!(
  title: 'オバアチャン',
  author_id: user6.id,
  genre: 'OST',
  description: 'Godly performance. Godly game.',
  release_date: Date.new(2017,3,17),
  image_url: 'https://res.cloudinary.com/winber1/image/upload/v1495061726/nier_n4nkb5.png',
  track_url: 'https://res.cloudinary.com/winber1/video/upload/v1495062322/10._オバアチャン_破壊_tnfsk6.mp3',
  )

song6 = Song.create!(
  title: 'Love Ya',
  author_id: user1.id,
  genre: 'Future Funk',
  description: 'Pure 100% Love Ya action. Support me your favorite artist! darude out.',
  release_date: Date.new(2015,9,22),
  image_url: 'https://res.cloudinary.com/winber1/image/upload/v1495513485/1111111111111111111111111111111111111111111_iqrutx.jpg',
  track_url: 'https://res.cloudinary.com/winber1/video/upload/v1494889475/05_-_Love_Ya_ei2alj.mp3',
  )

song7 = Song.create!(
  title: 'Psycho',
  author_id: user5.id,
  genre: 'Rock',
  description: 'Muse with another great one. They aren\'t really small or unknown tbh, but I love them anyway. Cheers!',
  release_date: Date.new(2016,11,12),
  image_url: 'https://res.cloudinary.com/winber1/image/upload/v1495513487/psychobg_qx5k5g.jpg',
  track_url: 'https://res.cloudinary.com/winber1/video/upload/v1495513504/03_Psycho_grz2rt.mp3',
  )

song8 = Song.create!(
  title: 'some dope ass shizz',
  author_id: user8.id,
  genre: 'Breaks',
  description: "Shiiiiiiiiiiiiiiiiiiiiiiiiiieeeet LEANROCK coming at it ONCE AGAIN. To all y'all b-boys n' b-girls, taste the music, LIVE the music. \n\nOh wait. Song doesn't even finish properly lol. ",
  release_date: Date.new(2016,11,12),
  image_url: 'https://res.cloudinary.com/winber1/image/upload/v1495513487/leanrock_py25hz.jpg',
  track_url: 'http://res.cloudinary.com/winber1/video/upload/v1495513506/Dj_Lean_Rock_-_Lord_Of_The_Drums__mp3.pm_atzqnr.mp3',
  )

song9 = Song.create!(
  title: 'STARship CONNECTION',
  author_id: user8.id,
  genre: 'Breaks',
  description: "I- I- I-M ORIGINIAL ORIGINAL ORIGINAL original... fresh to the core.",
  release_date: Date.new(2016,11,12),
  image_url: 'https://res.cloudinary.com/winber1/image/upload/v1495513487/leanrock_py25hz.jpg',
  track_url: 'https://res.cloudinary.com/winber1/video/upload/v1495513504/Dj_Lean_Rock_-_Starship_Connection_-_I_m_Original__mp3.pm_ljtnpc.mp3',
  )

song10 = Song.create!(
  title: 'Collider',
  author_id: user3.id,
  genre: 'Drum n\' Bass',
  description: "Sick tunes by Noisia. Repping the club yo.",
  release_date: Date.new(2016,11,12),
  image_url: 'https://res.cloudinary.com/winber1/image/upload/v1495513488/outeredges_q9g5zg.jpg',
  track_url: 'https://res.cloudinary.com/winber1/video/upload/v1495513506/noisia_-_collider_outer_edges_v0rxlm.mp3',
  )

song11 = Song.create!(
  title: 'Specialist',
  author_id: user3.id,
  genre: 'Neurofunk',
  description: "Degeneration. Degeneration... and Elevation.",
  release_date: Date.new(2016,11,12),
  image_url: 'https://res.cloudinary.com/winber1/image/upload/v1495513486/billain_manifold_ouxbbk.jpg',
  track_url: 'https://res.cloudinary.com/winber1/video/upload/v1495513515/billain_-_specialist_ktewj1.mp3',
  )

song12 = Song.create!(
  title: 'Caramell Dansen (Ryu Remix)',
  author_id: user9.id,
  genre: 'Remix',
  description: "WHO DOESN'T LIKE CARAMELL DANSEN???? OO WA OO WA OO WA OO WA AHHHHH. Dance like there's no tomorrow.",
  release_date: Date.new(2016,11,12),
  image_url: 'https://res.cloudinary.com/winber1/image/upload/v1495513486/m-rozen-caramell-dansen_gehdww.jpg',
  track_url: 'https://res.cloudinary.com/winber1/video/upload/v1495513506/Nightcore_-_CaramellDansen_DJ_Ryu_Re_qa2965.mp3',
  )

song13 = Song.create!(
  title: 'Railgun Roulette',
  author_id: user2.id,
  genre: 'Dubstep',
  description: "Reality Distortion. out.",
  release_date: Date.new(2016,11,12),
  image_url: 'https://res.cloudinary.com/winber1/image/upload/v1495513486/realitydistortion_npetnb.jpg',
  track_url: 'https://res.cloudinary.com/winber1/video/upload/v1495513513/Railgun_Roulette_wik6sy.mp3',
  )

song14 = Song.create!(
  title: "Amber's love was like a marble",
  author_id: user3.id,
  genre: 'Neurofunk',
  description: "Amber's Love was like a showcase. A delicate marble. Fragile. Brittle.",
  release_date: Date.new(2016,11,12),
  image_url: 'https://res.cloudinary.com/winber1/image/upload/v1495513486/billain_manifold_ouxbbk.jpg',
  track_url: 'https://res.cloudinary.com/winber1/video/upload/v1495513513/Rawtekk_-_Amber_s_Love_Was_Like_A_Marble_Billain_Remix_crdyju.mp3',
  )

song15 = Song.create!(
  title: "CHiLD-error-",
  author_id: user5.id,
  genre: 'Metal',
  description: "God can you get any more edgy with that song title? Well at least My First Story is a great band. Don't ask about the One Ok Rock band picture. I GOT LAZY LOL.",
  release_date: Date.new(2016,11,12),
  image_url: 'https://res.cloudinary.com/winber1/image/upload/v1495513487/oneokrock_rgk5ez.jpg',
  track_url: 'https://res.cloudinary.com/winber1/video/upload/v1495513511/MY_FIRST_STORY_-_CHiLD-error-_Official_Video_yidqrb.mp3',
  )

song16 = Song.create!(
  title: "!!FEVERTIME!!",
  author_id: user2.id,
  genre: 'UK Hardcore',
  description: "We out here son. Woke af. \n\nTime to party.",
  release_date: Date.new(2016,11,12),
  image_url: 'https://res.cloudinary.com/winber1/image/upload/v1495513485/cover_drmmlj.jpg',
  track_url: 'https://res.cloudinary.com/winber1/video/upload/v1495513522/04_-_FEVERTIME_o1o1ud.mp3',
  )

song17 = Song.create!(
  title: "Fastest Crash",
  author_id: user2.id,
  genre: 'Hardcore',
  description: "Speedy song. Hardcore style. Let's go.",
  release_date: Date.new(2016,11,12),
  image_url: 'https://res.cloudinary.com/winber1/image/upload/v1495513485/cover_drmmlj.jpg',
  track_url: 'https://res.cloudinary.com/winber1/video/upload/v1495513513/Camellia_-_Fastest_Crash_sywme5.mp3',
  )

song18 = Song.create!(
  title: "Fastest Crash",
  author_id: user2.id,
  genre: 'Hardcore',
  description: "Speedy song. Hardcore style. Let's go.",
  release_date: Date.new(2016,11,12),
  image_url: 'https://res.cloudinary.com/winber1/image/upload/v1495513486/danceonmars_kodzzw.jpg',
  track_url: 'https://res.cloudinary.com/winber1/video/upload/v1495513513/Camellia_-_Fastest_Crash_sywme5.mp3',
  )

song19 = Song.create!(
  title: "Dance on Mars",
  author_id: user2.id,
  genre: 'Dubstep',
  description: "Groovy. Eloquent. Enamorous. Dubstep",
  release_date: Date.new(2016,11,12),
  image_url: 'https://res.cloudinary.com/winber1/image/upload/v1495513486/danceonmars_kodzzw.jpg',
  track_url: 'https://res.cloudinary.com/winber1/video/upload/v1495513521/Camellia_-_Dance_On_The_Mars_asrefa.mp3',
  )

song20 = Song.create!(
  title: "Find That Somone feat. Richard Judge",
  author_id: user4.id,
  genre: 'Future Funk',
  description: "YOUUUUUUUUUUUUUUUUUU, you're a treasure in the sea, an adventure that I need. ;)",
  release_date: Date.new(2016,11,12),
  image_url: 'https://res.cloudinary.com/winber1/image/upload/v1495520460/televisor_e6camj.jpg',
  track_url: 'https://res.cloudinary.com/winber1/video/upload/v1495513514/Televisor_-_Find_That_Someone_feat._Richard_Judge_Monstercat_Official_Music_Video_y6er56.mp3',
  )

song21 = Song.create!(
  title: "King for a Day",
  author_id: user5.id,
  genre: 'Metal',
  description: "If I could just be a king for a day. Please won't you just push me for the last time.",
  release_date: Date.new(2016,11,12),
  image_url: 'https://res.cloudinary.com/winber1/image/upload/v1495513488/pierce_the_veil_vebfya.jpg',
  track_url: 'https://res.cloudinary.com/winber1/video/upload/v1495513519/Pierce_the_Veil_-_King_for_a_Day_a6gzwg.mp3',
  )

song22 = Song.create!(
  title: "Come and Get it",
  author_id: user4.id,
  genre: 'Drumstep',
  description: "Drum n' Bass elements combined with dubstep elements? Count me in. wWHOOAAAOAOAAA.",
  release_date: Date.new(2016,11,12),
  image_url: 'https://res.cloudinary.com/winber1/image/upload/v1495513485/1-faggot_christmas_rmmoiy.jpg',
  track_url: 'https://res.cloudinary.com/winber1/video/upload/v1495513519/Nightstep_Come_Get_It_Krewella_kcvkom.mp3',
  )

song23 = Song.create!(
  title: "The Beginning",
  author_id: user5.id,
  genre: 'Rock',
  description: "Ah crap, I mixed up the My First Story and One Ok Rock Images... damn.",
  release_date: Date.new(2016,11,12),
  image_url: 'https://res.cloudinary.com/winber1/image/upload/v1495513487/mymfirststory_qepvpf.jpg',
  track_url: 'https://res.cloudinary.com/winber1/video/upload/v1495513521/ONE_OK_ROCK_-_The_Beginning_ihy7xf.mp3',
  )

song24 = Song.create!(
  title: "Aiobahn - Electric Heart (ft. PRYVT RYN)",
  author_id: user7.id,
  genre: 'Electric Heart',
  description: "God this is really beautiful. Stunning Vocals. Bringing me tears tbh.",
  release_date: Date.new(2016,11,12),
  image_url: 'https://res.cloudinary.com/winber1/image/upload/v1495520845/aiobahn_istpjq.jpg',
  track_url: 'https://res.cloudinary.com/winber1/video/upload/v1495520766/Aiobahn_-_Electric_Heart_ft._PRYVT_RYN_Fated_Records_Extended_Mix_kwco8b.mp3',
  )

song25 = Song.create!(
  title: "Sandstorm",
  author_id: user1.id,
  genre: 'Sandstorm',
  description: "Sandstorming onwards.",
  release_date: Date.new(2016,11,12),
  image_url: 'https://res.cloudinary.com/winber1/image/upload/v1495568823/Sandstorm_single_wyc1sm.jpg',
  track_url: 'https://res.cloudinary.com/winber1/video/upload/v1495557993/Darude-Sandstorm_zg0ouz.mp3',
  )
