class CreateUserInfos < ActiveRecord::Migration[6.1]
  def change
    create_table :user_infos do |t|
      t.string :user_name
      t.string :name
      t.string :surname
      t.integer :age
      t.string :fav_demograph
      t.boolean :is_admin
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
