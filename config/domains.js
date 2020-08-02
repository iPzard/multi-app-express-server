/**
 * @description - Object containing domains, their directory, and template type.
 * React: Use template 'html' and point to build/index.html.
 * Python: Use childe_process.spawn or exec to call your app.
 * 
 * @property {string} directory - Location of your app.
 * @property {string} template - The type of app 
 */

const domains = {

    chatlocker: {
        directory: './domains/chatlocker',
        template: 'app'
    },

    danielwade: {
        directory: './domains/daniel-wade',
        template: 'ejs'
    }, 

    flask: {
        directory: './domains/flask',
        template: 'app'
    },

    main: {
        directory: './domains/main',
        template: 'html'
    },

    projects: {
        directory: './domains/projects',
        template: 'html'
    },

    tomomiwade: {
        directory: './domains/tomomi-wade',
        template: 'html'
    },

    wadelabs: {
        directory: './domains/wade-labs',
        template: 'ejs'
    }
};

module.exports = { domains };