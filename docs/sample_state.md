## Sample State

```js
{
  session: {
    currentUser: {
      id: 1,
      username: "saitama"
    },
    errors: []
  },
  users: {
    2: {
      id: 2,
      username: "genos",
      profile_image_url: "imageurl.how",
      followers: {
        1: {
          id: 1,
          username: "saitama"
        }
      }
    }
  }
  songs: {
    1: {
      title: "Still Echoes",
      artist: "Lamb of God",
      author_id: 1,
      genre: "Metal",
      image_url: 'google.com/pictures',
      track_urlL: 'soundcloud.com/song',
      Album: "VII: Sturm und Drang",
      favorites: {
        1: {
          id: 5,
          username: "Janice"
        }
      }
    }
  },
  playlists: {
    1: {
      title: "Cringey J-Pop",
      author_id: 3,
      description: "this really shouldn't exist",
      songs: {
        2: {
          title: "adrenaline!!!",
          artist: "TrySail",
          author_id: 3,
          genre: "J-Pop",
          Album: "Eromanga-sensei",
          image_url: 'google.com/pictures',
          track_urlL: 'soundcloud.com/song',
          favorites: {}
        },
        3: {
          title: "Sandstorm",
          artist: "Darude",
          author_id: 2,
          genre: "Electronic",
          Album: "SANDSTORMING",
          image_url: 'google.com/pictures',
          track_urlL: 'soundcloud.com/song',
          favorites: {
            5: {
              id: 2,
              username: "Ranelle"
            },
            3: {
              id: 3,
              username: "Tony"
            }
          }
        },
        favorites: {
          1: {
            id: 5,
            username: "Janice"
          }
        }
      }
    }
  }
}
```
