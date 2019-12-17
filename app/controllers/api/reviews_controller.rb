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

  def update
    @review = Review.find_by(id: params[:id])
    if @review.update(review)
      render :show
    else
      render json: @review.errors.full_messages, status: :unprocessable_entity
    end
  end

  private

  def review_params
    params.require(:review).permit(:rating, :body, :business_id)
  end
end
