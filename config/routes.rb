Rails.application.routes.draw do
  get 'users/new'
  root 'home#index'

  resources :login, only: [:index, :create]
end
