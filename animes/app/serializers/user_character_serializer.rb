class UserCharacterSerializer < ActiveModel::Serializer
  attributes :id, :user_identificator, :character_identificator
end
