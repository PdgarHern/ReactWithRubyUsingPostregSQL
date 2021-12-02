class UserAnimesController < ApplicationController
  before_action :set_user_anime, only: [:show, :update, :destroy]

  # GET /user_animes
  def index
    @user_animes = UserAnime.all

    render json: @user_animes
  end

  # GET /user_animes/1
  def show
    render json: @user_anime
  end

  # POST /user_animes
  def create
    @user_anime = UserAnime.new(user_anime_params)

    if @user_anime.save
      render json: @user_anime, status: :created, location: @user_anime
    else
      render json: @user_anime.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /user_animes/1
  def update
    if @user_anime.update(user_anime_params)
      render json: @user_anime
    else
      render json: @user_anime.errors, status: :unprocessable_entity
    end
  end

  # DELETE /user_animes/1
  def destroy
    @user_anime.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user_anime
      @user_anime = UserAnime.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_anime_params
      params.require(:user_anime).permit(:user_identificator, :anime_identificator)
    end
end
