Rails.application.routes.draw do
  devise_for :users
  default_url_options :host => "localhost:3000"
  resources :actors
  resources :characters
  resources :animes
  get '/all-animes', to: 'animes#send_all'

end
