source 'https://rubygems.org'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.2.0'

gem 'mysql2', group: :development
gem 'pg', group: :production
# Use SCSS for stylesheets

gem 'uglifier'

gem 'less-rails'
gem 'rails_12factor', group: :production
gem 'twitter-bootstrap-rails'

# Needed to compile assets in production
gem 'therubyracer', require: 'v8'

gem 'jquery-rails', '>= 1.0.17'

# For respond_to:s (see http://edgeguides.rubyonrails.org/4_2_release_notes.html#respond-with-class-level-respond-to)
gem 'responders', '~> 2.0'

group :development, :test do
  gem 'database_cleaner'
  gem 'jasmine-rails'
  gem 'email_spec'
  gem 'debugger-ruby_core_source'
  gem 'jasmine-jquery-rails'
  gem 'vcr'
  gem 'did_you_mean'
  gem 'fuubar'
  gem 'rspec-rails'
  gem 'guard-spork'
  gem 'guard-rubocop'
  gem 'spork-rails', github: 'trialbee/spork-rails', ref: '0dd45e59d3237b4c8f9efc215b46d9c07072a95e'
  gem 'guard-rspec', '~> 4.3.1'
end

group :test do
  gem 'capybara', '~> 2.4.4'
  gem 'factory_girl_rails'
  gem 'differ'
  gem 'webmock'
end

group :development do
  gem 'magic_encoding' # Only needed until Ruby 2.0
  gem 'web-console', '~> 2.0'
  gem 'spring'
  gem 'better_errors', '0.8.0' # Better rails error pages
  gem 'binding_of_caller', '~> 0.7'
  gem 'awesome_print'
  gem 'simplecov' # For testing
  gem 'quiet_assets'
  gem 'bullet' # detects common sql query mistakes
  gem 'brakeman', require: false # Finds common Rails security vulnerability
  gem 'ruby-prof' # , git: 'git://github.com/wycats/ruby-prof.git' # See better profiling information together with new_relic gem
  # gem 'rack-mini-profiler'
  gem 'thin' # Use thin as webserver instead of webbrick
  gem 'rb-fsevent', '~> 0.9.1' # Enables guard to detect file changes osx
  gem 'i18n-tasks', require: false
  gem 'rubocop', require: false
  gem 'rubocop-rspec', git: 'git@github.com:trialbee/rubocop-rspec.git', branch: 'case-insensetive'
  gem 'rubycritic', require: false
  gem 'rb-readline'
  gem 'bundler-audit', require: false
end

# Security gems
gem 'http_accept_language'
gem 'authlogic', '~> 3.4.2'
gem 'scrypt', '1.2.1'

# gem 'secure_headers'

gem 'redcarpet', git: 'git://github.com/trialbee/redcarpet.git', ref: '9f99742c66af2d76b77a5a339c70bee6e99aa0e0'
