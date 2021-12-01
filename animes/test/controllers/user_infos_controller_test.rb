require "test_helper"

class UserInfosControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user_info = user_infos(:one)
  end

  test "should get index" do
    get user_infos_url, as: :json
    assert_response :success
  end

  test "should create user_info" do
    assert_difference('UserInfo.count') do
      post user_infos_url, params: { user_info: { age: @user_info.age, fav_demograph: @user_info.fav_demograph, name: @user_info.name, surname: @user_info.surname, user_name: @user_info.user_name } }, as: :json
    end

    assert_response 201
  end

  test "should show user_info" do
    get user_info_url(@user_info), as: :json
    assert_response :success
  end

  test "should update user_info" do
    patch user_info_url(@user_info), params: { user_info: { age: @user_info.age, fav_demograph: @user_info.fav_demograph, name: @user_info.name, surname: @user_info.surname, user_name: @user_info.user_name } }, as: :json
    assert_response 200
  end

  test "should destroy user_info" do
    assert_difference('UserInfo.count', -1) do
      delete user_info_url(@user_info), as: :json
    end

    assert_response 204
  end
end
