Rails.application.routes.draw do  
  default_url_options :host => "localhost:3000"
  devise_for :users,
             controllers: {
               sessions: 'users/sessions',
               registrations: 'users/registrations'
             }
  get '/member-data', to: 'members#show'
  resources :actors
  resources :characters
  resources :animes
  get '/all-animes', to: 'animes#send_all'

end
