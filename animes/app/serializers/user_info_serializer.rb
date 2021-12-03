class UserInfoSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :user_name, :name, :surname, :age, :fav_demograph, :is_admin, :profile_pic, :profile_img

  def profile_pic
    if object.profile_pic.attached?
      {
        url: rails_blob_url(object.profile_pic)
      }
    end
  end

  def profile_img
    if object.profile_img.attached?
      {
        url: rails_blob_url(object.profile_img)
      }
    end
  end
end
