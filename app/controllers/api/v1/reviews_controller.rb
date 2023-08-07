module Api
  module V1
    class ReviewsController < ApplicationController
      protect_from_forgery with: :null_session
      before_action :find_dish, only: [:create, :destroy]

      def create
        @review = Review.new(review_params)
        # @review.dish_id = Dish.find_by(slug: params[:id])
        # review.dish_id = @dish

        if @review.save
          render json: ReviewSerializer.new(@review).serialized_json
        else
          render json: { error: @review.errors.messages }, status: 422
        end
      end

      def destroy
        @review = Review.find(params[:id])

        if @review.destroy
          head :no_content
        else
          render json: { error: @review.errors.messages }, status: 422
        end
      end

      private

      def find_dish
        @dish = Dish.find_by(slug: params[:dish_id])
        puts "Params: #{params}"
        puts "Params id: #{params[:id]}"
        puts "Dish id: #{params[:dish_id]}"
        puts @dish
        @dish = Dish.find(params[:dish_id])
      end

      def review_params
        params.require(:review).permit(:title, :description, :score, :dish_id)
      end
    end
  end
end
