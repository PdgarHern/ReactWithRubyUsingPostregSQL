require "test_helper"

class ActorsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @actor = actors(:one)
  end

  test "should get index" do
    get actors_url, as: :json
    assert_response :success
  end

  test "should create actor" do
    assert_difference('Actor.count') do
      post actors_url, params: { actor: { age: @actor.age, character: @actor.character, gender: @actor.gender, name: @actor.name, thumb: @actor.thumb } }, as: :json
    end

    assert_response 201
  end

  test "should show actor" do
    get actor_url(@actor), as: :json
    assert_response :success
  end

  test "should update actor" do
    patch actor_url(@actor), params: { actor: { age: @actor.age, character: @actor.character, gender: @actor.gender, name: @actor.name, thumb: @actor.thumb } }, as: :json
    assert_response 200
  end

  test "should destroy actor" do
    assert_difference('Actor.count', -1) do
      delete actor_url(@actor), as: :json
    end

    assert_response 204
  end
end
