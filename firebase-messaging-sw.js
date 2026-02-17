importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

// البيانات دي من صورتك بالظبط يا حسام
const firebaseConfig = {
    apiKey: "AIzaSyBKc0Vu8e1WxyUTmd1dEpGgrKDNOQV9PSyY",
    authDomain: "quranapp-9c312.firebaseapp.com",
    projectId: "quranapp-9c312",
    storageBucket: "quranapp-9c312.appspot.com",
    messagingSenderId: "708147485092",
    appId: "1:708147485092:web:ce228b7a245a89f08b0931"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// ده الكود اللي هيستلم الرسالة ويحطها في ستارة الموبايل
messaging.onBackgroundMessage(function(payload) {
    console.log('Received background message ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: 'https://hossabry568-ui.github.io/logo.png' // لو عندك لوجو حط رابطه هنا
    };

    return self.registration.showNotification(notificationTitle, notificationOptions);
});
