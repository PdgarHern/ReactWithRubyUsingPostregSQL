class UserInfoSerializer < ActiveModel::Serializer
  attributes :id, :user_name, :name, :surname, :age, :fav_demograph
end
