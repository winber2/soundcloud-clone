class AddAttachmentTrackToSongs < ActiveRecord::Migration
  def self.up
    change_table :songs do |t|
      t.attachment :track_url
    end
  end

  def self.down
    remove_attachment :songs, :track_url
  end
end
