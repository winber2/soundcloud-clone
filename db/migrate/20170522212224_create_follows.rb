class CreateFollows < ActiveRecord::Migration[5.0]
  def change
    create_table :follows do |t|
      t.integer :follower_id, null: false
      t.integer :artist_id, null: false

      t.timestamps
    end
    add_index :follows, [:follower_id, :artist_id], unique: true
  end
end
