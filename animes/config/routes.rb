Rails.application.routes.draw do
  resources :actors
  resources :characters
  resources :animes
  get '/all-animes', to: 'animes#sendAll'

end
