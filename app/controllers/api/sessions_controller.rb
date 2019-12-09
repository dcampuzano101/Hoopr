class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user 
      login(@user)
      render '/api/users/show'
    else
      render json: ['wrong user/password combination'], status: 404
    end
  end

  def new
  end

  def destroy
    if !current_user
      render json: 'not logged in', status: 404
    else
      logout
      render json: {}
    end
  end
end