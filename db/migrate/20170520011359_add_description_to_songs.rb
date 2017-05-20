class AddDescriptionToSongs < ActiveRecord::Migration[5.0]
  def change
    add_column :songs, :description, :text
  end
end
