class Api::UsersController < ApplicationController

  def index
    if params[:query] != nil
      @users = User.includes(:songs)
        .select('*')
        .order('RANDOM()')
        .limit(3)
        .offset(params[:query].to_i)

      render :index
    else
      @users = User.includes(:songs).all.limit(20)
      render :index
    end
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render json: @user
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find_by(id: params[:id])

    if @user.update_attributes(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find_by(username: params[:id])
    render :show
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :profile_image_url, :header_image_url, :description)
  end

end
