class Api::SongsController < ApplicationController
  def index
    if params[:query] == 'display'
      @songs = Song
      .left_joins(:favorites)
      .group('songs.id, favorites.id')
      .order('COUNT (favorites.favoritable_id) DESC')
      .limit(10)
      .select('songs.*')
      .includes(:comments, :user)

      render :index
    else
      @songs = Song.all.includes(:user, :comments, :favorites)
      render :index
    end
  end

  def show
    @song = Song.find_by(id: params[:id])
    render :show
  end

  def create
    @song = Song.new(song_params)

    if @song.save
      render :show
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
      render :show
    else
      render json: @song.errors.full_messages, status: 422
    end
  end

  private

  def song_params
    params.require(:song).permit(:title, :author_id, :genre, :album, :image_url, :track_url, :release_date, :description)
  end

end
