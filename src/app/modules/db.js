export default async function loadDB() {
  const firebase = await import("firebase");

  try {
    firebase.initializeApp({
      apiKey: "AIzaSyAQv-XvUZ5kunxY3H0p763CxFp4fDkxSYE",
      authDomain: "upages-220009.firebaseapp.com",
      databaseURL: "https://upages-220009.firebaseio.com",
      projectId: "upages-220009",
      storageBucket: "upages-220009.appspot.com",
      messagingSenderId: "473305719776"
    });
  } catch (err) {
    // we skip the "already exists" message which is
    // not an actual error when we're hot-reloading
    if (!/already exists/.test(err.message)) {
      console.error("Firebase initialization error", err.stack);
    }
  }

  return firebase.database().ref("v0");
}
