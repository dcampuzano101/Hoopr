class Api::PhotosController < ApplicationController
    before_action :logged_in?
  
    def create
      @photo = Photo.new(photo_params)
      debugger;
      if @photo.save
        #should i render the biz show page??
        render :show
        # render json: 'success'

      else
#        render json: @photo, status: :unprocessable_entity
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

    def index 
      @photos = Photo.all
    end
  
    def destroy
      @photo = Photo.find(params[:id])
      @photo.destroy
  
      render :show
    end
  
    private
  
    def photo_params
      params.require(:photo).permit(:business_id, :user_id, :description, :photo_file)
    end
  end