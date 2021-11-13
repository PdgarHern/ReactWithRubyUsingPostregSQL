# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_11_09_193859) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "actors", force: :cascade do |t|
    t.string "name"
    t.string "gender"
    t.integer "age"
    t.string "character"
    t.string "thumb"
    t.bigint "anime_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["anime_id"], name: "index_actors_on_anime_id"
  end

  create_table "animes", force: :cascade do |t|
    t.string "title"
    t.string "plot"
    t.string "genres"
    t.string "author"
    t.string "studio"
    t.integer "premiered"
    t.string "demographic"
    t.integer "episodes"
    t.string "poster"
    t.string "thumb"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "characters", force: :cascade do |t|
    t.string "name"
    t.string "gender"
    t.integer "age"
    t.string "role"
    t.string "thumb"
    t.bigint "anime_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["anime_id"], name: "index_characters_on_anime_id"
  end

  add_foreign_key "actors", "animes"
  add_foreign_key "characters", "animes"
end
