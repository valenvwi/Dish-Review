class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :score, :dish_id
end
