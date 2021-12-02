class CreateUserAnimes < ActiveRecord::Migration[6.1]
  def change
    create_table :user_animes do |t|
      t.integer :user_identificator
      t.integer :anime_identificator

      t.timestamps
    end
  end
end
