class UserInfosController < ApplicationController
  before_action :set_user_info, only: [:show, :update, :destroy]

  # GET /user_infos
  def index
    @q = UserInfo.ransack(user_id_eq: params[:id]);

    @user_infos = @q.result(distinct: true).all

    render json: @user_infos
  end

  # GET /user_infos/1
  def show
    render json: @user_info
  end

  # POST /user_infos
  def create
    @user_info = UserInfo.new(user_info_params)

    if @user_info.save
      render json: @user_info, status: :created, location: @user_info
    else
      render json: @user_info.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /user_infos/1
  def update
    if @user_info.update(user_info_params)
      render json: @user_info
    else
      render json: @user_info.errors, status: :unprocessable_entity
    end
  end

  # DELETE /user_infos/1
  def destroy
    @user_info.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user_info
      @user_info = UserInfo.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_info_params
      params.permit(:user_name, :name, :surname, :age, :fav_demograph, :is_admin, :user_id, :profile_pic, :profile_img)
    end
end
