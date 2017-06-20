class AddAttachmentHeaderToUsers < ActiveRecord::Migration
  def self.up
    change_table :users do |t|
      t.attachment :header_image_url
    end
  end

  def self.down
    remove_attachment :users, :header_image_url
  end
end
