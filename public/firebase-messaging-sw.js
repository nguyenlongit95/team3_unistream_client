importScripts("https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging-compat.js");

// Cấu hình Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBX7cBZiOIjucm164jy7myIn1o_K3w_T90",
    authDomain: "fir-cfaf9.firebaseapp.com",
    databaseURL: "https://fir-cfaf9-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "fir-cfaf9",
    storageBucket: "fir-cfaf9.firebasestorage.app",
    messagingSenderId: "958591095715",
    appId: "1:958591095715:web:6e24769fe0449607c88016"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Xử lý thông báo khi app ở chế độ background
messaging.onBackgroundMessage((payload) => {
  alert(payload.notification.title);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/firebase-logo.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
