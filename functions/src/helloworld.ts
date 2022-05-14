import { logger, region } from "firebase-functions/v1";

const helloWorldHandler = region("europe-west1").https.onCall(() => {
  logger.info("Hello logs!", { structuredData: true });

  return { text: "Hello from Firebase!" };
});

export default helloWorldHandler;
