class AddUserHeaderImage < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :header_image_url, :string
    change_column :users, :profile_image_url, :string, default: 'https://res.cloudinary.com/winber1/image/upload/v1495410946/defaultProfile_c7fuwg.png'
  end
end
