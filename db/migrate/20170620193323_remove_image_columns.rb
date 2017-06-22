class RemoveImageColumns < ActiveRecord::Migration[5.0]
  def change
    remove_column :songs, :track_url
    remove_column :songs, :image_url
    remove_column :users, :profile_image_url
    remove_column :users, :header_image_url
  end
end
