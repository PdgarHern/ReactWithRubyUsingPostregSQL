class Anime < ApplicationRecord
    has_many :characters
    has_many :actors
    # has_one_attached :poster
    # has_one_attached :thumb
end
