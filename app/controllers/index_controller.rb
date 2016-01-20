require 'mail'

class IndexController < ApplicationController
			options = { :address              => "smtp-mail.outlook.com",
            :port                 => 587,
            :user_name            => ENV["outlook_email"],
            :password             => ENV["outlook_pw"],
            :authentication       => 'plain',
            :enable_starttls_auto => true  }
		
		Mail.defaults do
		  delivery_method :smtp, options
		end


	def index
	end

	def contact
		name = params[:Name]
		email = params[:email]
		body = params[:Message]
		Mail.deliver do
		       to 'StevensPortfolio@outlook.com'
		     from "StevensPortfolio@outlook.com"
		  subject 'Porfolio Email'
		     body "Email: #{email}

  Name: #{name}, 

  #{body}"
		end
		# flash[:success] = "Thanks for contacting me, I'll get back to you as soon as I can!"
		redirect_to '/'
	end
end
