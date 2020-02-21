class Api::BusinessesController < ApplicationController
  
  def create
      @business = Business.new(business_params)
  if @business.save
        render json: @business
      else
        render json: @business.errors.full_messages, status: 404
      end
  end

  def new
      @business = Business.new(business_params)
  end

  def uploadPhoto
    debugger
    @business = Business.find(params[:business_id])
    debugger
    # Attach the blob to the project by creating the association in the database directly.
    @business.photos.attach(io: params[:photo_file], filename: params[:filename])
    #BLOB MUST EXIST!!! 
    # @business.photos.attach(params[:photos])
  end

  def index
    @businesses = Business.all
  end

  def show
    @business = Business.find(params[:id])
  end

  private
  def business_params
      params.require(:business).permit(:name, :email, :price_range, :owner_id, :neighborhood, :borough, photos: []);
  end

end
