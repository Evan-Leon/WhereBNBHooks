class ApplicationController < ActionController::Base
  protect_from_forgery 
  helper_method :current_user, :logged_in?

  private 

  def current_user 
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def ensure_logged_in
    unless logged_in?
     render json: ["Must be logged in"], status:401 
    end
  end

  def logged_in?
    !!current_user
  end

  def login!(user)
    session[:session_token] = user.reset_session_token!
    @current_user = user 
  end

  def logout!
    @current_user.reset_session_token!
    session[:session_token] = nil 
    @current_user = nil 
  end
end
