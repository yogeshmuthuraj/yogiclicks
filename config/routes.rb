Rails.application.routes.draw do
  root 'home#index'

  resources :login, only: :index
end
