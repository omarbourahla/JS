'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "5cc9695ee3e8c1f86234c524152ea8f8",
"main.dart.js": "7f3be01cf3eb7e0d097e06a44852f0e9",
"flutter_bootstrap.js": "e0ed2be49a4fb8c60bb856fcb66e1af3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "0f96dafafda98522a4b23a94d377f985",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/assets/webetu/4.jpg": "1c1cfb03d6ba679ca185c29b4d3883ab",
"assets/assets/webetu/1.jpg": "23b2b6827a4b09d6683c3237aa70b0fc",
"assets/assets/webetu/6.jpg": "575457a9ffcd10c426df0a5e9b70b517",
"assets/assets/webetu/2.jpg": "6c557dbbb3d3a08ce165da6765596666",
"assets/assets/webetu/5.jpg": "f196f22b8f04328b373ff1741f9cc7c9",
"assets/assets/webetu/3.jpg": "afe01811fba362af131d7c4b7d664bc9",
"assets/assets/profile.png": "e44bf1122b29b661d47d46cbb99d3218",
"assets/assets/ProgNet/5.png": "928053dee484dc801c4b88f04f4e90c7",
"assets/assets/ProgNet/8.png": "49996a24cdb8d256c4f69f2cde827b02",
"assets/assets/ProgNet/7.png": "db587a98695e8834f5f590521c8b8b78",
"assets/assets/ProgNet/4.png": "5de35e14267327e28a45a7588a03a075",
"assets/assets/ProgNet/3.png": "4da3ce512a6e7a59079e8f7161edff8a",
"assets/assets/ProgNet/2.png": "34c71811eb3e93b682b65b6e6d0e74a8",
"assets/assets/ProgNet/6.png": "8b8f1f29f263e5d797625c45dccc4d22",
"assets/assets/ProgNet/1.png": "e9a959e63a7147b9a32ee6198881394b",
"assets/assets/ProgNet/9.png": "d535b3a52be0800c7c9f05f25b10aa96",
"assets/assets/upwork.png": "60f5b2334c54a09b98d08eb04b286047",
"assets/assets/instagram.png": "50f7cefbfb1f11650dfdc213c94995fe",
"assets/assets/ProgAdmin/1.PNG": "82fd998087c01e9dc86729968e16ce3b",
"assets/assets/ProgAdmin/5.PNG": "72ac72a1468b29de0268773e0a2a5631",
"assets/assets/ProgAdmin/3.PNG": "47ee01b3dc6988c9ba9ea6bceb2caecd",
"assets/assets/ProgAdmin/2.PNG": "1931cf651178b38ea89331fc75572615",
"assets/assets/ProgAdmin/4.PNG": "e445c6eed60d4d6a1bd7f71da2323114",
"assets/assets/gmail.png": "a9beb9bb39e2321dd0d6d9b0ed21ba3f",
"assets/assets/skills/git.png": "61addc5bed6c9693631b1b4a636f1708",
"assets/assets/skills/flutter.png": "e02a6c427d3f2f6128219c4916cc4c6f",
"assets/assets/skills/firebase.png": "45ec5c8523c42019e2aa9fe5436750af",
"assets/assets/skills/sqlserver.png": "3cd96b6df33c6575110ca2670a77f489",
"assets/assets/skills/github.png": "e45ebd5258d77392cb78ceb7b3133eeb",
"assets/assets/skills/mysql.png": "bab2c760c60f17191cb3a002e08a3dbf",
"assets/assets/skills/sequelize.png": "724253526c73f2c0da0c80aa2ca9d984",
"assets/assets/skills/nodejs.png": "cb1d08f4ec679b7b13d9e7fce1e77eeb",
"assets/assets/linkedin.png": "6db963fcbb0b63f3eed7397b8a36a6d1",
"assets/assets/CRMS/image2.png": "0e1f08bfcc07f602eaf2513e1d8cd9ce",
"assets/assets/CRMS/image4.png": "cde6a3037f984601d42dad5cd34aadec",
"assets/assets/CRMS/image5.png": "6c8578a49eb04834efa85da8a664a774",
"assets/assets/CRMS/image1.png": "66c9173850a2268ec51f40780bdf737c",
"assets/assets/CRMS/image3.png": "292b3a33b70f4a36b9bf6254fda06722",
"assets/fonts/MaterialIcons-Regular.otf": "01627c636b91519ea91a3eff664077d7",
"assets/AssetManifest.bin.json": "03808a858b72fdf2d35693c4d35002fc",
"assets/AssetManifest.bin": "2e4338ec08d1c1b06a8e4d5468c35ca3",
"assets/AssetManifest.json": "d1bef90a44cd143c7261cfe2ab84a7fc",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "4fa40b7d471d5450184667ab75887964",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"index.html": "14beeafd16c1ace8b47ddaa43e67340a",
"/": "14beeafd16c1ace8b47ddaa43e67340a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
