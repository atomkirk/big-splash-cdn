require "httparty"
require "byebug"
require "pry"

client_id = IO.read("unsplash_client_id.txt").strip

items = []
page = 1
api_page = 1
loop do
  url = "https://api.unsplash.com/photos?page=#{api_page}&per_page=30&client_id=#{client_id}"
  api_page += 1
  response = HTTParty.get(url)
  puts "page #{api_page} fetched"
  json = JSON.parse(response.body)
  break if json.count == 0
  items += json
  if items.count > 300
    IO.write "dist/#{page}.json", JSON.dump(items)
    puts "#{page}.json created"
    items = []
    page += 1
  end
  sleep 2
end
