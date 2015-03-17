class HomeController < ApplicationController
	after_action :allow_iframe

	private

	  def allow_iframe
	    response.headers.except! 'X-Frame-Options'
	  end


  def start
  end

end
