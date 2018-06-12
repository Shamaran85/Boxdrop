import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();

const db = admin.database();

export const webhook = functions.https.onRequest((request, response) => {

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
