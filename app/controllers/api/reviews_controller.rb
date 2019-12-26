class Api::ReviewsController < ApplicationController
  before_action :logged_in?

  def create
    @review = current_user.reviews.new(review_params)

    if @review.save
      #should i render the biz show page??
      render :show
    else
      render json: @review, status: :unprocessable_entity
    end
  end

  def show
    @review = Review.find_by(id: params[:id])
  end

  def update
    debugger;
    @review = Review.find_by(id: params[:id])
    if @review.update(review_params)
      render :show
    else
      render json: @review.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy

    render :show
  end

  private

  def review_params
    params.require(:review).permit(:rating, :body, :business_id, :user_id, :temp_rating)
  end
end
