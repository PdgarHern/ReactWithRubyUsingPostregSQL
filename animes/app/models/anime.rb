class Anime < ApplicationRecord
    has_many :characters
    has_many :actors
    has_one_attached :poster do |attachable|
        attachable.variant :poster, resize: "1920x1080"
    end
    has_one_attached :thumb do |attachable2|
        attachable2.variant :thumb, resize: "780x1170"
    end
    paginates_per 10
end
