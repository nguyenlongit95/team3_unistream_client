import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBX7cBZiOIjucm164jy7myIn1o_K3w_T90",
  authDomain: "fir-cfaf9.firebaseapp.com",
  databaseURL: "https://fir-cfaf9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fir-cfaf9",
  storageBucket: "fir-cfaf9.firebasestorage.app",
  messagingSenderId: "958591095715",
  appId: "1:958591095715:web:6e24769fe0449607c88016",
  measurementId: "G-BR3Y58ENTH"
};

// Khởi tạo Firebase App
const app = initializeApp(firebaseConfig);

// Khởi tạo Cloud Messaging
const messaging = getMessaging(app);

// Request notification permission from user.
export const requestPermission = async () => {
    try {
        const currentToken = await getToken(messaging, {
            vapidKey: "BO4Zt8H2H4_rCuQ9rNvfMqB1TUSIW9wf2hUACnTIVjvAFx0pWP-n9DqdKA9Hr-xA0_b6aNmDW6bnlFkLnqsgo0I",
          });
        return currentToken;
    } catch (error) {
        console.error("Cannot get token: :", error);
    }
};

// Listen for messages from FCM while the page is open
export const onMessageListener = () =>
    new Promise((resolve) => {
      onMessage(messaging, (payload) => {
        console.log("Message received:", payload);
        resolve(payload);
      });
    });

// Export messing as use.
export { app, messaging };