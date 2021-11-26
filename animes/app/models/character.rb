class Character < ApplicationRecord
    belongs_to :anime
    has_one_attached :img
    paginates_per 10
end
