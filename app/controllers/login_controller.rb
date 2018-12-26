# frozen_string_literal: true

class LoginController < ApplicationController
  def index
    @total_photos = 1000

    render partial: 'index'
  end

  def create
    p 'debugy'
    p params
    @total_photos = 1000

    render partial: 'home/index'
  end
end
