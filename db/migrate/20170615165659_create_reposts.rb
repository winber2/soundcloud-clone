class CreateReposts < ActiveRecord::Migration[5.0]
  def change
    create_table :reposts do |t|
      t.integer :reposter_id, null: false
      t.integer :song_id, null: false

      t.timestamps
    end

    add_index :reposts, [:reposter_id, :song_id], unique: true
  end
end
