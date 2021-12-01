Rails.application.routes.draw do  
  resources :user_infos
  default_url_options :host => "localhost:3000"
  devise_for :users,
             controllers: {
               sessions: 'users/sessions',
               registrations: 'users/registrations'
             }
  resources :actors
  resources :characters
  resources :animes
  get '/all-animes', to: 'animes#send_all'

end
