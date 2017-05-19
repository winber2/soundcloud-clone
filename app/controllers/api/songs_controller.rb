class Api::SongsController < ApplicationController
  def index
    @songs = Song.all.includes(:user, :comments)
    render :index
  end

  def show
    @song = Song.find_by(id: params[:id])
    render :show
  end

  def create
    @song = Song.new(song_params)

    if @song.save
      render show: @song
    else
      render json: @song.errors.full_messages, status: 422
    end
  end

  def destroy
    @song = Song.find_by(id: params[:id])
    @song.destroy! if @song
    render json: @song
  end

  def update
    @song = Song.find_by(id: params[:id])

    if @song.update_attributes(song_params)
      render json: @song
    else
      render json: @song.errors.full_messages, status: 422
    end
  end

  private

  def song_params
    params.require(:song).permit(:title, :author_id, :genre, :album, :image_url, :track_url, :release_date)
  end

end
