### MIT License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# [PWA Text Editor](https://jatepwa.herokuapp.com/)

## Description

A simple text editor with a **_Progressive Web App (PWA)_** touch that has a service worker as a proxy middleware that sits between the client and the server. The service worker's main job is to listen to incoming requests and cache the content in order to speed-up the load time and have a capability to serve content with poor network connection or work offline when the content is cached. For simplicity's sake the worker relies on the `CacheFirst` strategy to demonstrate its caching capability. Additionally I used `indexedDB` along with `LocalStorage` as a local datastore for user's CRUD.

## Installation Instructions

> NOTE: Before installing local dependencies, make sure you have `Node.JS ~v16.14.2` and `NPM ~8.11.0` installed. You can quickly check this by running `node -v` for Node.JS and `npm -v` for NPM in your terminal.

### Install local dependencies

Once the above is confirmed, clone the repo `git clone git@github.com:rkutsel/text-editor-pwa.git` and install the dependencies by running `npm i` in your terminal. A successful installation should look somewhat similar to the one bellow:

```bash
npm WARN config production Use `--omit=dev` instead.
npm WARN deprecated core-js@2.6.12: core-js@<3.23.3 is no longer maintained and not recommended for usage due to the number of issues. Because of the V8 engine whims, feature detection in old core-js versions could cause a slowdown up to 100x even if nothing is polyfilled. Some versions have web compatibility issues. Please, upgrade your dependencies to the actual version of core-js.

> PWATE@0.1.0 install
> cd client && npm install


up to date, audited 708 packages in 2s

92 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

## Usage

To get started, form the `root` directory run `npm start` which should build all of the components and start the server. At this point you should be able to access the app in your browser at http://localhost:3000.

## Deploy to Heroku

The functionality is provided out of the box. To deploy your own version of the app to heroku, run the following commands:

```bash
heroku auth:login # 01. login to your heroku account with your creds.
heroku create -a DEPLOYMENT_NAME # 02. create a new deployment and give it a name. name is optional. 
git push heroku main # 03. run it from the root directory to push the deployment to heroku. 
```

A successful deploy should generate a link to the deployed app.

## Further Reading

- [PWA](https://web.dev/progressive-web-apps/)
- [Service Worker](https://web.dev/learn/pwa/service-workers/)
