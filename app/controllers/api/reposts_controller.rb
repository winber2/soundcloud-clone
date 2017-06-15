class Api::RepostsController < ApplicationController
  def create
    @repost = Repost.new(repost_params)

    if @repost.save
      render json: @repost
    else
      render json: @repost.errors.full_messages, status: 422
    end
  end

  def destroy
    @repost = Repost.find_by(id: params[:id])
    @repost.destroy! if @repost
    render json: @repost
  end

  private

  def repost_params
    params.require(:repost).permit(:song_id, :reposter_id)
  end
end
