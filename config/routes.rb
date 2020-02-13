Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index]
    resource :session, only: [:create, :destroy]

    get '/search/:query', to: 'searches#search'
    post '/businesses/:business_id/photos', to: 'businesses#uploadPhoto'
		resource :search, only: :show

    resources :businesses, only: [:create, :show, :index] do
      resources :reviews, only: [:create, :show, :update, :destroy]
      resources :photos, only: [:create, :show, :destroy]
    end
    resources :reviews, only: [:update, :show]
    resources :photos, only: [:show]
  end
end