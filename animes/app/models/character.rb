class Character < ApplicationRecord
    belongs_to :anime
    has_one_attached :img
end
