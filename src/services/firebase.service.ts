import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";
import { environment } from "../environments/environment";

// Initialize Firebase gamit ang environment config
const app = initializeApp(environment.firebaseConfig);
export const auth = getAuth(app);

export let analytics: any = null;
isSupported().then((supported: boolean) => {
  if (supported) {
    analytics = getAnalytics(app);
  }
});