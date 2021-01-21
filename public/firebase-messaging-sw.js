
importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-messaging.js");
const firebaseConfig = {
    apiKey: "AIzaSyD7uc7-U-2lHS_xMd5tAnX2VwqOUCIn5aU",
    authDomain: "olx-clone0.firebaseapp.com",
    databaseURL: "https://olx-clone0.firebaseio.com",
    projectId: "olx-clone0",
    storageBucket: "olx-clone0.appspot.com",
    messagingSenderId: "333633644896",
    appId: "1:333633644896:web:016e4d01984101d7fb1605",
    measurementId: "G-R6L26HT10C"
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
    '/',
    '/styles/main.css',
    '/script/main.js',
    'main.chunk.js',
    'chunk.js',
    'bundel.js',
    'bootstrap.min.js',
    'bootstrap.min.css',
    'pooper.min.js',
    'main.js',
    '/src/Components'
];

self.addEventListener('install', function (event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});
self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // Cache hit - return response
          if (response) {
            return response;
          }
          return fetch(event.request);
        }
      )
    );
  });