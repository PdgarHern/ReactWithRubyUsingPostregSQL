class AnimeSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
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
