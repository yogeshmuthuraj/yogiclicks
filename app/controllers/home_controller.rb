# frozen_string_literal: true

class HomeController < ApplicationController
  def index
    render partial: 'index'
  end
end
