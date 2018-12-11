# frozen_string_literal: true

class HomeController < ApplicationController
  def index
    @total_photos = 1000

    render partial: 'index'
  end
end
