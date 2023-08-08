module Api
  module V1
    class DishesController < ApplicationController
      protect_from_forgery with: :null_session
      before_action :find_dish, only: [:show, :update, :destroy]
      def index
        @dishes = Dish.all
        render json: DishSerializer.new(@dishes, options).serialized_json
      end

      def show
        puts DishSerializer.new(@dish, options).serialized_json
        render json: DishSerializer.new(@dish, options).serialized_json
        @reviews = Review.where(dish_id: @dish.id).order('created_at DESC')
      end

      def create
        @dish = Dish.new(dish_params)
        if @dish.save
          render json: DishSerializer.new(dish).serialized_json
        else
          render json: { error: dish.errors.messages }, status: 422
        end
      end

      def update
        if @dish.update(dish_params)
          render json: DishSerializer.new(@dish, options).serialized_json
        else
          render json: { error: dish.errors.messages }, status: 422
        end
      end

      def destroy
        if @dish.destroy
          head :no_content
        else
          render json: { error: @dish.errors.messages }, status: 422
        end
      end

      private

      def dish_params
        params.require(:dish).permit(:name, :image_url)
      end

      def find_dish
        @dish = Dish.find_by(slug: params[:id])
      end

      def options
        @options ||= { include: %i[reviews] }
      end
    end
  end
end
