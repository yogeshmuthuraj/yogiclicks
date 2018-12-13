class ApplicationController < ActionController::Base
  def login_page
    render partial: 'login'
  end
end
