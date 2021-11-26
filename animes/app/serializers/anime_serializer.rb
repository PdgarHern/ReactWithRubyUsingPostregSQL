class AnimeSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  class CustomActorSerializer < ActiveModel::Serializer
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

  class CustomCharacterSerializer < ActiveModel::Serializer
    include Rails.application.routes.url_helpers
    attributes :id, :name, :gender, :age, :role, :anime_id, :img
  
    def img
      if object.img.attached?
        {
          url: rails_blob_url(object.img)
        }
      end
    end
  end

  has_many :actors, serializer: CustomActorSerializer
  has_many :characters, serializer: CustomCharacterSerializer

  attributes :id, :title, :plot, :genres, :author, :studio, :premiered, :demographic, :episodes, :characters, :actors, :poster, :thumb

  def poster
    if object.poster.attached?
      {
        url: rails_blob_url(object.poster)
      }
    end
  end

  def thumb
    if object.thumb.attached?
      {
        url: rails_blob_url(object.thumb)
      }
    end
  end

  
end
