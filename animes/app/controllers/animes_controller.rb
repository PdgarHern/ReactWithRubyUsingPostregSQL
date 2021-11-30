class AnimesController < ApplicationController
  before_action :set_anime, only: [:show, :update, :destroy]
  before_action :set_models, only: [ :index, :show ]
  before_action :authenticate_user!, except: [ :send_all, :index, :show ]

  # GET /animes
  def index
    @q = Anime.ransack(title_cont: params[:query])
    @animes = @q.result(distinct: true).all.page params[:page]

    @animesSerialized = ActiveModel::SerializableResource.new(@animes).serializable_hash

    render json: {page: Integer(params[:page]), results: @animesSerialized, total_pages: @animes.total_pages}
  end

  # GET /animes/1
  def show
    render json: @anime
  end

  def send_all
    @animes = Anime.all
    render json: @animes
  end

  # POST /animes
  def create
    @anime = Anime.new(anime_params)

    if @anime.save
      render json: @anime, status: :created, location: @anime
    else
      render json: @anime.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /animes/1
  def update
    if @anime.update(anime_params)
      render json: @anime
    else
      render json: @anime.errors, status: :unprocessable_entity
    end
  end

  # DELETE /animes/1
  def destroy
    @anime.destroy
  end

  private
    def set_models
      @models = [:characters, :actors]
    end
    # Use callbacks to share common setup or constraints between actions.
    def set_anime
      @anime = Anime.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def anime_params
      params.permit(:title, :plot, :genres, :author, :studio, :premiered, :demographic, :episodes, :poster, :thumb)
    end
end
