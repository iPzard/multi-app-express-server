const express = require('express');
const path    = require('path');

// Helper function to set template engines
const setEngine = (app, directory, template) => {

    // For static sites using HTML 
    if(template === 'html') {

        // Default index and 404 page
        app.use(express.static(path.join(directory)));
        app.use((req, res)=> res.sendFile(path.join(directory, '404.html')));
    }

    // For sites using EJS template engine
    else if(template === 'ejs') {
        app.set('view engine', 'ejs');
        app.set('views', path.join(directory, 'views'));
        app.use(express.static(path.join(directory, 'static')));

        // Default index and 404 page
        app.get('/', (req, res) => res.render('index'));
        app.use((req, res)=> res.render('404'));
    }
};

module.exports = { setEngine }; 