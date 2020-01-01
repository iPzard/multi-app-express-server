const { setEngine }  = require('./config/engines');
const { subDomains } = require('./config/domains');
const express        = require('express');
const vhost          = require('vhost');

// Function to set subdomain
const setDomain = domain => {
    const { [domain]: { directory, template } } = subDomains;
    const app = express();
    setEngine(app, directory, template);
    return app;
};

// Configure express to handle subdomains
express()
    .use(vhost(/daniel-wade.(.*)/, setDomain('danielwade')))
    .use(vhost(/projects.(.*)/,    setDomain('projects')))
    .use(vhost(/tomomi-wade.(.*)/, setDomain('tomomiwade')))
    .use(vhost(/wade-labs.(.*)/,   setDomain('wadelabs')))
    .listen(process.env.PORT || 8080);
