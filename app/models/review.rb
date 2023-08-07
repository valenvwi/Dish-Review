class Review < ApplicationRecord
  belongs_to :dish
  validates :title, :description, :score, presence: true
  validates :title, length: { minimum: 5 }
  validates :description, length: { in: 10..100 }
  validates :score, numericality: { only_integer: true }
  validates :score, inclusion: { in: 1..5 }
end
