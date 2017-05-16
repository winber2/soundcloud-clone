class UpdateSongReleaseDate < ActiveRecord::Migration[5.0]
  def change
    change_column :songs, :release_date, :date, null: true
  end
end
