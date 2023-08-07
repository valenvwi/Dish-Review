class Dish < ApplicationRecord
  has_many :reviews, dependent: :destroy
  before_create :slugify
  validates :name, presence: true, length: { minimum: 5 }

  def slugify
    self.slug = name.parameterize
  end

  def average_score
    return 0 unless reviews.count.positive?
    reviews.average(:score).round(2).to_f
  end
end
