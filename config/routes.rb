Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :favorites, only: [:create, :destroy]
    resources :follows, only: [:create, :destroy]
    resources :users, except: [:new, :edit]
    resources :songs, except: [:new, :edit] do
      resources :comments, only: [:create, :destroy, :index]
    end
    resource :session, only: [:create, :destroy]
  end
end
