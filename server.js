const { subDomains } = require('./config/domains');
const { setEngine }  = require('./config/engines');
const express        = require('express');
const vhost          = require('vhost');

// Function to set subdomain
const setDomain = domain => {
    const { [domain]: { directory, template } } = subDomains;
    const app = template === 'app' ? require(`${directory}/server`).app : express();
    setEngine(app, directory, template);
    return app;
};

// Configure express to handle subdomains
express()
    .use(vhost(/chatlocker.(.*)/,  setDomain('chatlocker')))
    .use(vhost(/daniel-wade.(.*)/, setDomain('danielwade')))
    .use(vhost(/projects.(.*)/,    setDomain('projects')))
    .use(vhost(/tomomi-wade.(.*)/, setDomain('tomomiwade')))
    .use(vhost(/wade-labs.(.*)/,   setDomain('wadelabs')))
    .listen(process.env.PORT || 8080);
