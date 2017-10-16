Rails.application.routes.draw do
  root "react_app#home"
  namespace :api do
    get "/homepage", to: "main#index"
  end
  get "*path", to: "react_app#home"
end
