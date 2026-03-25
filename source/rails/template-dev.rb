# lesli_demo_template.rb
# Usage:
#   rails new LesliDemo -m lesli_demo_template.rb --skip-bundle

empty_directory "engines/Lesli"
run %(git clone --depth 1 --branch master git@github.com:LesliTech/Lesli.git engines/Lesli)
gem "lesli", path: "engines/Lesli"

empty_directory "engines/LesliShield"
run %(git clone --depth 1 --branch master git@github.com:LesliTech/LesliShield.git engines/LesliShield)
gem "lesli_shield", path: "engines/LesliShield"

empty_directory "engines/LesliDashboard"
run %(git clone --depth 1 --branch master git@github.com:LesliTech/LesliDashboard.git engines/LesliDashboard)
gem "lesli_dashboard", path: "engines/LesliDashboard"


# Clean lockfile (helps when template changes Gemfile)
remove_file "Gemfile.lock" if File.exist?("Gemfile.lock")

say_status :bundle, "Installing gems", :blue
run "bundle install"

# Run Lesli installer (docs)
say_status :lesli, "Running rails generate lesli:install", :blue
run "bundle exec rails generate lesli:install"

# Reset DB + seed demo data (docs)
say_status :lesli, "Running rake lesli:db:reset", :blue
run "bundle exec rake lesli:db:reset"

# Status summary (docs)
say_status :lesli, "Running rake lesli:status", :blue
run "bundle exec rake lesli:status"

say_status :done, "Lesli demo app ready ✅", :green
