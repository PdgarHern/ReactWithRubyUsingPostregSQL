class CreateAnimes < ActiveRecord::Migration[6.1]
  def change
    create_table :animes do |t|
      t.string :title
      t.string :plot
      t.string :genres
      t.string :author
      t.string :studio
      t.integer :premiered
      t.string :demographic
      t.integer :episodes
      t.string :poster
      t.string :thumb

      t.timestamps
    end
  end
end
