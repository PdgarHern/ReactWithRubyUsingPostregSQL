class UserInfo < ApplicationRecord
    belongs_to :user
    has_one_attached :profile_pic
    has_one_attached :profile_img
end
