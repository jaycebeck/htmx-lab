/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const onRequest = require('firebase-functions').https.onRequest;

const pug = require('pug');

// Import pug

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.test = onRequest((request, response) => {
    let template = pug.compileFile('views/test.pug');
    let markup = template({
        name: request.query.name,
        major: request.query.major,
        quote: request.query.quote
    });
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(markup);
});