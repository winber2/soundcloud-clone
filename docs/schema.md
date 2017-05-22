# Schema Information

## users
column name      | data type | details
-----------------|-----------|-----------------------
id               | integer   | not null, primary key
username         | string    | not null, indexed, unique
password_digest  | string    | not null
session_token    | string    | not null, indexed, unique
profile_image_url| string    |

## songs
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
release_date| date      | not null
genre       | string    | not null
album       | string    |
image_url   | string    | not null
track_url   | string    | not null
author_id   | integer   | not null, foreign key (referenes users), indexed

## playlists
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
title       | string    | not null
description | string    |

## song_playlist
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
song_id     | integer   | not null, foreign key (references songs), indexed, unique [song_id, playlist_id]
playlist_id | integer   | not null, foreign key (references playlists), indexed

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
song_id     | integer   | not null, foreign key (references songs), indexed, unique [song_id, playlist_id]
body        | string    | not null

## favorites
column name      | data type | details
-----------------|-----------|-----------------------
id               | integer   | not null, primary key
user_id          | integer   | not null, foreign key (references users), indexed
favoritable_id   | integer   | not null, foreign key (references songs), indexed, unique [favoritable_type, favoritable_id]
favoratiable_type| string    | not null, foreign key (references playlists)

## follows
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
follower_id | integer   | not null, foreign key (references users), indexed
artist_id   | integer   | not null, foreign key (references users), indexed
