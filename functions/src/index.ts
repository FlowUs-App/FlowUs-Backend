import * as functions from "firebase-functions";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//

exports.helloWorld = functions.https.onCall(() => {
  functions.logger.info("Hello logs!", { structuredData: true });

  return { text: "Hello from Firebase!" };
});
