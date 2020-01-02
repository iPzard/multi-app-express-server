const express = require('express');
const path    = require('path');

// Helper function to set template engines
const setEngine = (app, directory, template) => {

    switch(template) {

        // For static sites using HTML 
        case 'html':
            // Default index and 404 page
            app.use(express.static(path.join(directory)));
            app.use((req, res)=> res.sendFile(path.join(directory, '404.html'), { root: './' }));
            break;

        // For sites using EJS template engine
        case 'ejs':
            app.set('view engine', 'ejs');
            app.set('views', path.join(directory, 'views'));
            app.use(express.static(path.join(directory, 'static')));

            // Default index and 404 page
            app.get('/', (req, res) => res.render('index'));
            app.use((req, res)=> res.render('404'));
            break;

        // For independent apps with their own server
        case 'app':
            return app;

        default:
            console.error('No template set for domain.');
    }

};

module.exports = { setEngine }; 