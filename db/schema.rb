# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170620193323) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.integer  "author_id",  null: false
    t.integer  "song_id",    null: false
    t.string   "body",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "favorites", force: :cascade do |t|
    t.integer  "favoritable_id",   null: false
    t.string   "favoritable_type", null: false
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
    t.integer  "user_id",          null: false
    t.index ["favoritable_type", "favoritable_id", "user_id"], name: "favorites_index", unique: true, using: :btree
  end

  create_table "follows", force: :cascade do |t|
    t.integer  "follower_id", null: false
    t.integer  "artist_id",   null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["follower_id", "artist_id"], name: "index_follows_on_follower_id_and_artist_id", unique: true, using: :btree
  end

  create_table "reposts", force: :cascade do |t|
    t.integer  "reposter_id", null: false
    t.integer  "song_id",     null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["reposter_id", "song_id"], name: "index_reposts_on_reposter_id_and_song_id", unique: true, using: :btree
  end

  create_table "songs", force: :cascade do |t|
    t.string   "title",                                   null: false
    t.date     "release_date"
    t.string   "genre",                                   null: false
    t.string   "album"
    t.integer  "author_id",                               null: false
    t.datetime "created_at",                              null: false
    t.datetime "updated_at",                              null: false
    t.text     "description"
    t.string   "type",                   default: "Song"
    t.string   "image_url_file_name"
    t.string   "image_url_content_type"
    t.integer  "image_url_file_size"
    t.datetime "image_url_updated_at"
    t.string   "track_url_file_name"
    t.string   "track_url_content_type"
    t.integer  "track_url_file_size"
    t.datetime "track_url_updated_at"
    t.index ["author_id"], name: "index_songs_on_author_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",                                    null: false
    t.string   "password_digest",                             null: false
    t.string   "session_token",                               null: false
    t.datetime "created_at",                                  null: false
    t.datetime "updated_at",                                  null: false
    t.text     "description",                    default: ""
    t.string   "profile_image_url_file_name"
    t.string   "profile_image_url_content_type"
    t.integer  "profile_image_url_file_size"
    t.datetime "profile_image_url_updated_at"
    t.string   "header_image_url_file_name"
    t.string   "header_image_url_content_type"
    t.integer  "header_image_url_file_size"
    t.datetime "header_image_url_updated_at"
    t.index ["session_token"], name: "index_users_on_session_token", using: :btree
    t.index ["username"], name: "index_users_on_username", using: :btree
  end

end
