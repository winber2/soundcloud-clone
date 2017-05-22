class Api::FavoritesController < ApplicationController
  def create
    @favorite = Favorite.new(favorite_params)

    if @favorite.save
      render json: @favorite
    else
      render json: @favorite.errors.full_messages, status: 422
    end
  end

  def destroy
    @favorite = Favorite.find_by(id: params[:id])
    @favorite.destroy! if @favorite
    render json: @favorite
  end

  private

  def favorite_params
    params.require(:favorite).permit(:favoritable_type, :favoritable_id, :user_id)
  end

end
