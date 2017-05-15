class CreateSongs < ActiveRecord::Migration[5.0]
  def change
    create_table :songs do |t|
      t.string :title, null: false
      t.date :release_date, null: false
      t.string :genre, null: false
      t.string :album
      t.string :image_url, null: false
      t.string :track_url, null: false
      t.integer :author_id, null: false

      t.timestamps
    end

    add_index :songs, :author_id
  end
end
