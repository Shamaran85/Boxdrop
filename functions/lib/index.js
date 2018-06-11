"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
// import { AngularFirestore, AngularFirestoreDocument } from '../../node_modules/angularfire2/firestore';
// admin.initializeApp(functions.config().firebase);
// admin.initializeApp(functions.config().firebase);
// const db = admin.firestore();
const db = admin.database();
exports.webhook = functions.https.onRequest((request, response) => {
    // skriv i databasen update timestamp etc
    test();
    response.send(request.query.challenge);
});
function test() {
    console.log('hej');
    const newDate = new Date();
    const displayDate = newDate.toISOString().slice(0, 19).replace('T', ' ');
    db.ref('updates/').set({
        updated: displayDate
    })
        .then(function () {
        console.log("New Updates at: ", displayDate);
    })
        .catch(function (error) {
        console.error("Error updating: ", error);
    });
}
//# sourceMappingURL=index.js.map