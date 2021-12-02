class UserCharactersController < ApplicationController
  before_action :set_user_character, only: [:show, :update, :destroy]

  # GET /user_characters
  def index
    @user_characters = UserCharacter.all

    render json: @user_characters
  end

  # GET /user_characters/1
  def show
    render json: @user_character
  end

  # POST /user_characters
  def create
    @user_character = UserCharacter.new(user_character_params)

    if @user_character.save
      render json: @user_character, status: :created, location: @user_character
    else
      render json: @user_character.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /user_characters/1
  def update
    if @user_character.update(user_character_params)
      render json: @user_character
    else
      render json: @user_character.errors, status: :unprocessable_entity
    end
  end

  # DELETE /user_characters/1
  def destroy
    @user_character.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user_character
      @user_character = UserCharacter.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_character_params
      params.require(:user_character).permit(:user_identificator, :character_identificator)
    end
end
