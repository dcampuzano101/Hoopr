Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :businesses, only: [:create, :show, :index] do
      resources :reviews, only: [:create, :show]
    end
    resources :reviews, only: [:update, :show]
  end
end