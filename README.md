# Dee's blog

## Installation

install ruby and jekyll:

```
https://jekyllrb.com/docs/installation
```

install required gems:

```
bundle install
```

## Run locally

```
bundle exec jekyll serve
```

## Deploy to prod

make the following updates in gemfile:

1. comment: `# gem "jekyll", "~> 4.4.1"`

2. uncomment: `gem "github-pages", group: :jekyll_plugins`