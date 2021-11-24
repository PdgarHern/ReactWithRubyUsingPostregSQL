class ActorSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :name, :gender, :age, :character_done, :anime_id, :img

  def img
    if object.img.attached?
      {
        url: rails_blob_url(object.img)
      }
    end
  end
end
