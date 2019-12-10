class Api::UsersController < ApplicationController
    def create
      @user = User.new(user_params)
      if @user.save
        render json: @user
      else
        render json: @user.errors.full_messages, status: 404
      end
    end

    def new
      @user = User.new(user_params)
    end

    private
    def user_params
      params.require(:user).permit(:password, :email, :first_name, :last_name, :zip_code);
    end
end

