class CreateCharacters < ActiveRecord::Migration[6.1]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :gender
      t.integer :age
      t.string :role
      t.string :thumb
      t.references :anime, foreign_key: true
      t.timestamps
    end
  end
end
