const { setEngine }  = require('./config/engines');
const { domains }    = require('./config/domains');
const express        = require('express');
const vhost          = require('vhost');

// Function to set domain
const setDomain = domain => {
    const { [domain]: { directory, template } } = domains;
    const app = template === 'app' ? require(`${directory}/server`).app : express();
    setEngine(app, directory, template);
    return app;
};

// Configure express to handle domains
express()

    // Domains
    .use(vhost(/chatlocker.(.*)/,  setDomain('chatlocker')))
    .use(vhost(/daniel-wade.(.*)/, setDomain('danielwade')))
    .use(vhost(/projects.(.*)/,    setDomain('projects')))
    .use(vhost(/tomomi-wade.(.*)/, setDomain('tomomiwade')))
    .use(vhost(/wade-labs.(.*)/,   setDomain('wadelabs')))

    // Primary domain
    .use(setDomain('main'))
    .listen(process.env.PORT || 8080);