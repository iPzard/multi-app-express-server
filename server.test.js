const { subDomains } = require('./config/domains');
const fs = require("fs");

describe('Configuration', ()=> {

    it('should have accurate directories for subdomains', () => {
        for(let domain in subDomains) expect(fs.existsSync(subDomains[domain].directory));
    });

    it('should have valid template engine strings', ()=> {
        for(let domain in subDomains) expect(subDomains[domain].template).toMatch(/html|ejs/);
    });
});