"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.database();
exports.webhook = functions.https.onRequest((request, response) => {
    const newDate = new Date();
    const displayDate = newDate.toISOString().slice(0, 19).replace('T', ' ');
    db.ref('updates/').set({
        updated: displayDate
    })
        .then(function () {
        console.log("New Update: ", displayDate);
    })
        .catch(function (error) {
        console.error("Error: ", error);
    });
    response.send(request.query.challenge);
});
//# sourceMappingURL=index.js.map