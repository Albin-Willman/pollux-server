class HomeController < ApplicationController
	after_action :allow_phonegap_iframe

	private

	  def allow_phonegap_iframe
    response.headers['X-Frame-Options'] = 'ALLOW-FROM /'
  end


  def start
  end

end
