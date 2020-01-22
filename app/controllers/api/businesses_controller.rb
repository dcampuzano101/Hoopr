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

  def index
    @businesses = Business.all
  end

  def show
    @business = Business.find(params[:id])
  end

  private
  def business_params
      params.require(:business).permit(:name, :email, :price_range, :owner_id, :neighborhood);
  end

end
