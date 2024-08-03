import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC1Nq3JXAMraTRLDpN7Tx41UkBKLEIfNcU",
  authDomain: "mary-android-app.firebaseapp.com",
  projectId: "mary-android-app",
  storageBucket: "mary-android-app.appspot.com",
  messagingSenderId: "171773686947",
  appId: "1:171773686947:android:eda415d1481515298ffb16",
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export { auth };