import credentials from './../credentials/client';

export default async function loadDB() {
  const firebase = await import("firebase");

  try {
    firebase.initializeApp(credentials);
  } catch (err) {
    // we skip the "already exists" message which is
    // not an actual error when we're hot-reloading
    if (!/already exists/.test(err.message)) {
      console.error("Firebase initialization error", err.stack);
    }
  }

  return firebase.database().ref("v0");
}
