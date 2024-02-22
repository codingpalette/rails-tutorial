
Rails.application.routes.draw do
  get 'abouts/index'
  get 'abouts/show'
  get 'abouts/new'
  get 'abouts/edit'
  get '/posts', to: 'posts#index'
  get 'posts/index'
  get 'posts/show'
  get 'posts/new'
  get 'posts/edit'
  root "articles#index"

  resources :articles
end
