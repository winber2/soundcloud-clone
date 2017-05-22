class FixIndexOnFavorites < ActiveRecord::Migration[5.0]
  def change
    remove_index :favorites, [:favoritable_type, :favoritable_id]
    add_index :favorites, [:favoritable_type, :favoritable_id, :user_id], unique: true, name: 'favorites_index'
  end
end
