class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_user_credentials(params[:user][:username], params[:user][:password])

    if @user.nil?
      render json: ['Incorrect username or password'], status: 401
    else
      login!(@user)
      render json: @user
    end
  end

  def destroy
    if logged_in?
      logout!
      render json: {}
    else
      render json: ['You are not logged in'], status: 404
    end
  end
end
