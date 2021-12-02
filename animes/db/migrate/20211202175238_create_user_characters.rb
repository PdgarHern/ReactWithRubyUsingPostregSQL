class CreateUserCharacters < ActiveRecord::Migration[6.1]
  def change
    create_table :user_characters do |t|
      t.integer :user_identificator
      t.integer :character_identificator

      t.timestamps
    end
  end
end
