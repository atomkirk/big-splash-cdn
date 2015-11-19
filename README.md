# big-splash-cdn
Stores JSON files of photos on unsplash.com

# Getting Started

1. `npm install`
2. `bundle`
3. Copy `aws.example.json` to `aws.json` and set the correct values.
4. Copy `unsplash_client_id.example.txt` to `unsplash_client_id.txt` and set the correct values.
5. `ruby fetch_pages.rb`
6. `gulp deploy` to deploy the contents of `dist` to the S3 bucket `protein-cdn`.
