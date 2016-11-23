class Winery < ActiveRecord::Base
  has_many :wines
  validates :name, :location, :rating, presence: true
  # validates :rating, numericality: { less_than: 6 }
end
