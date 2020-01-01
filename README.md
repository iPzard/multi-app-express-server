# Subdomain Express server
Subdomain Express server for multi-app projects.

# Setup
Clone the project and run `npm install`. Add your sites to the domain folder then update `./config/domains.js` to match your project structure. The `server.js` file utilizes vhost to allow for multiple subdomains, reconfigure these to match your domains. Regex is used instead of hardcoding the domain to allow for developing and testing on `localhost`.

# Tests
Tests have been configured to test if the domains configred in `./config/domains.js` match the domain directory structure of your project. To run tests, use `npm run test`. 

# Launch
To launch the server, use `npm start`.
