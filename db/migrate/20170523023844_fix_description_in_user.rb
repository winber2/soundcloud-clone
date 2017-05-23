class FixDescriptionInUser < ActiveRecord::Migration[5.0]
  def change
    change_column :users, :description, :text, default: ''
  end
end
