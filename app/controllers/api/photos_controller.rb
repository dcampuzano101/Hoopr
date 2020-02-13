class Api::PhotosController < ApplicationController
    before_action :logged_in?
  
    def create
      @photo = current_user.photos.new(review_params)
  
      if @photo.save
        #should i render the biz show page??
        render :show
      else
        render json: @photo, status: :unprocessable_entity
      end
    end
  
    def show
      @photo = Photo.find_by(id: params[:id])
    end
  
    def update
      @photo = Photo.find_by(id: params[:id])
      if @photo.update(photo_params)
        render :show
      else
        render json: @photo.errors.full_messages, status: :unprocessable_entity
      end
    end
  
    def destroy
      @photo = Photo.find(params[:id])
      @photo.destroy
  
      render :show
    end
  
    private
  
    def photo_params
      params.require(:photo).permit(:business_id, :user_id, :description)
    end
  end