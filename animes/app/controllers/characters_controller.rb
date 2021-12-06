class CharactersController < ApplicationController
  before_action :set_character, only: [:show, :update, :destroy]
  before_action :authenticate_user!, except: [ :index, :show ]

  # GET /characters
  def index
    @q = Character.ransack(name_cont: params[:query])
    @characters = @q.result(distinct: true).all

    @charactersSerialized = ActiveModel::SerializableResource.new(@characters).serializable_hash

    render json: {results: @charactersSerialized}
  end

  # GET /characters/1
  def show
    render json: @character
  end

  # POST /characters
  def create
    @character = Character.new(character_params)

    if @character.save
      render json: @character, status: :created, location: @character
    else
      render json: @character.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /characters/1
  def update
    if @character.update(character_params)
      render json: @character
    else
      render json: @character.errors, status: :unprocessable_entity
    end
  end

  # DELETE /characters/1
  def destroy
    @character.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_character
      @character = Character.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def character_params
      params.permit(:name, :gender, :age, :role, :img, :anime_id)
    end
end
