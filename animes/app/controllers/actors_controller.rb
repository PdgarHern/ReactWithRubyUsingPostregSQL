class ActorsController < ApplicationController
  before_action :set_actor, only: [:show, :update, :destroy]

  # GET /actors
  def index
    @actors = Actor.all

    @actorsSerialized = ActiveModel::SerializableResource.new(@actors).serializable_hash

    render json: @actorsSerialized
  end

  # GET /actors/1
  def show
    @actorSerialized = ActiveModel::SerializableResource.new(@actor).serializable_hash
    render json: @actorSerialized
  end

  # POST /actors
  def create
    @actor = Actor.new(actor_params)

    if @actor.save
      render json: @actor, status: :created, location: @actor
    else
      render json: @actor.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /actors/1
  def update
    if @actor.update(actor_params)
      render json: @actor
    else
      render json: @actor.errors, status: :unprocessable_entity
    end
  end

  # DELETE /actors/1
  def destroy
    @actor.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_actor
      @actor = Actor.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def actor_params
      params.permit(:name, :gender, :age, :character_done, :anime_id, :img)
    end
end
