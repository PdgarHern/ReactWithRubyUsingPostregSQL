require "test_helper"

class UserCharactersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user_character = user_characters(:one)
  end

  test "should get index" do
    get user_characters_url, as: :json
    assert_response :success
  end

  test "should create user_character" do
    assert_difference('UserCharacter.count') do
      post user_characters_url, params: { user_character: { character_identificator: @user_character.character_identificator, user_identificator: @user_character.user_identificator } }, as: :json
    end

    assert_response 201
  end

  test "should show user_character" do
    get user_character_url(@user_character), as: :json
    assert_response :success
  end

  test "should update user_character" do
    patch user_character_url(@user_character), params: { user_character: { character_identificator: @user_character.character_identificator, user_identificator: @user_character.user_identificator } }, as: :json
    assert_response 200
  end

  test "should destroy user_character" do
    assert_difference('UserCharacter.count', -1) do
      delete user_character_url(@user_character), as: :json
    end

    assert_response 204
  end
end
