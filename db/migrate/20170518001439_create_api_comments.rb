class CreateApiComments < ActiveRecord::Migration[5.0]
  def change
    create_table :api_comments do |t|
      t.integer :author_id, null: false
      t.integer :song_id, null: false
      t.string :body, null: false

      t.timestamps
    end
  end
end
