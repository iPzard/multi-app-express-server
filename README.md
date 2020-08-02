# Multi-app Express server
Host multiple apps, and/or sites, while supporting a variety of combined technologies, under a single server and port. For example, you can have a React app, Angular app, and Python/Flask app all operating at the same time, using only one port. 

<br>

## ⚙️ Config
1. Cloning the repository and add your site and/or app folders into the `domain` folder.

2. Update `./config/domains.js` to match your project structure, and remove the example data.

* The `server.js` file utilizes `vhost` to allow multiple domains. You can reconfigure the examples to match your project needs, regex is used instead of string for the domain, allowing access for developing and testing on `localhost`.

* If your app or apps have their own express server, you can export the app, instead of listening to a port in the server file. Set its template property to `"app"` in `./config/domains.js`. The `setEngine()` function will expect your server file to be named `server.js` at the root of your projects folder in `domains`. For example, if your app was named `foo`, your `server.js` file should be found in the following path `./domains/foo/server.js`.

* Once the server has been started, your app can be found at, `<your-domain>.localhost:8080` in your browser.
<br>

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
<br>

## 📚 Docs
Code documentation, created with [JSDoc](https://github.com/jsdoc/jsdoc), can be found here:<br>
[Multi-app Express Server](https://ipzard.github.io/multi-app-express-server/)

<br>

## 🏷️ License
MIT © [iPzard](https://github.com/iPzard/multi-app-express-server/blob/master/LICENSE.md)
