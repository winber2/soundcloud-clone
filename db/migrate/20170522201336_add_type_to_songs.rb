class AddTypeToSongs < ActiveRecord::Migration[5.0]
  def change
    add_column :songs, :type, :string, default: 'Song'
  end
end
