class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login!(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def logout!
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  private

  def cloudinary_auth
    {
      cloud_name: 'winber1',
      api_key: '557186838289654',
      api_secret: '1aFTYTNMCn2Ixj04Ao3FySPIupI',
      enhance_image_tag: true,
      static_image_support: true
    }
  end

end
