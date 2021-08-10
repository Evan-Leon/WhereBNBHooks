Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :index, :show, :update]
    resource :session, only: [:create, :destroy]
    resources :listings, only: [:index, :show]
    resources :bookings, only: [:index, :show, :create, :update, :destroy]
    resources :reviews, only: [:create, :index, :show, :update, :destroy]
    get 'reviews/single/:id' => 'reviews#single'
    get 'search' => 'listings#search'
    post 'search_index' => 'listings#search_index'
  end

  root "static_pages#root"
end
