require "test_helper"

class UserAnimesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user_anime = user_animes(:one)
  end

  test "should get index" do
    get user_animes_url, as: :json
    assert_response :success
  end

  test "should create user_anime" do
    assert_difference('UserAnime.count') do
      post user_animes_url, params: { user_anime: { anime_identificator: @user_anime.anime_identificator, user_identificator: @user_anime.user_identificator } }, as: :json
    end

    assert_response 201
  end

  test "should show user_anime" do
    get user_anime_url(@user_anime), as: :json
    assert_response :success
  end

  test "should update user_anime" do
    patch user_anime_url(@user_anime), params: { user_anime: { anime_identificator: @user_anime.anime_identificator, user_identificator: @user_anime.user_identificator } }, as: :json
    assert_response 200
  end

  test "should destroy user_anime" do
    assert_difference('UserAnime.count', -1) do
      delete user_anime_url(@user_anime), as: :json
    end

    assert_response 204
  end
end
