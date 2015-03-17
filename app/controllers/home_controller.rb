class HomeController < ApplicationController
	after_action :allow_phonegap_iframe

	private

	  def allow_phonegap_iframe
    response.headers['X-Frame-Options'] = 'ALLOW-FROM file://'
  end


  def start
  end

end
