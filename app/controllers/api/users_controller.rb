class Api::UsersController < ApplicationController
    def create
      #   
      @user = User.new(user_params)
      if @user.save
        login(@user)
        render json: @user
      else
        render json: @user.errors.full_messages, status: 404
        #newbranch
        #newbranch2
      end
    end

    def index
      @users = User.all
    end

    def new
      @user = User.new(user_params)
    end

    def show  

      @user = User.with_attached_profile_photo.find(params[:id])
      @reviews = @user.reviews

    end

    private
    def user_params
      params.require(:user).permit(:password, :email, :first_name, :last_name, :zip_code, :profile_photo);
    end
end

