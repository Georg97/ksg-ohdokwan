const functions = require('firebase-functions');
const express = require('express');
const app = express();

// Your SvelteKit app
const sveltekitApp = require('../build/index.js');

app.get('*', async (req, res) => {
    const { html } = await sveltekitApp.render({ method: 'GET', headers: req.headers, path: req.path, body: req.body });
    res.status(200).send(html);
});

exports.ssr = functions.https.onRequest(app);
