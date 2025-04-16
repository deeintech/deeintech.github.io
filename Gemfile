source "https://rubygems.org"

# uncomment to run locally
# gem "jekyll", "~> 4.4.1"

# theme
gem "minima", "~> 2.5"

# uncomment before deploying to gh pages
gem "github-pages", group: :jekyll_plugins

# plugins
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
end

# windows stuff
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.1", :platforms => [:mingw, :x64_mingw, :mswin]
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
