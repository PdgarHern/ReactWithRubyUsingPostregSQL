class ApplicationController < ActionController::API
    def render_resource(resource)
        if resource.errors.empty?
          render json: resource
        else
          validation_error(resource)
        end
    end
end
