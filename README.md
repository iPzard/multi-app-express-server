# Multi-app Express server
Multi-app and multi-domain Express server to host multiple apps, and/or sites, while supporting a varieties of combined technologies, under a single server. This means you can have a React app, Angular app, and Python/Flask app all operating at the same time, using only one port. 

## ⚙️ Config
After cloning the repository, add your sites to the domain folder, then update `./config/domains.js` to match your project structure. The `server.js` file utilizes `vhost` to allow multiple domains. You can reconfigure the examples to match your project needs, regex is used instead of string for the domain, allowing access for developing and testing on `localhost`.<br><br>

If your app or apps have their own express server, you can export the app, instead of listening to a port in the server file. Set its template property to `"app"` in `./config/domains.js`. The `setEngine()` function will expect your server file to be named `server.js` at the root of your projects folder in `domains`. For example, if your app was named `foo`, your `server.js` file should be found in the following path `./domains/foo/server.js`.<br><br>

Once the server has been started, your app can be found at, `<your-domain>.localhost:8080` in your browser.

## 📜 Scripts
Use the following scripts to install dependencies, start your server, and run tests.

**Install Dependencies:**
```bash
npm install
```

**Start Server:**
```bash
npm start
```

**Update Documentation:**
```bash
npm run build:docs
```

**Run Tests:**

```bash
npm run test
```