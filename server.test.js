const { setEngine }  = require('./config/engines');
const { domains }    = require('./config/domains');

const fs = require("fs");

describe('Server Configuration', ()=> {

    // domains
    it('domains.js should have accurate directories for domains', () => {
        for(let domain in domains) expect(fs.existsSync(domains[domain].directory));
    });

    it('domains.js should have valid template engine strings', ()=> {
        for(let domain in domains) expect(domains[domain].template).toMatch(/html|ejs|app/);
    });

    // setEngine
    it('setEngine() should accept 3 arguments', () => {
        expect(setEngine.length).toBe(3);
    });
});