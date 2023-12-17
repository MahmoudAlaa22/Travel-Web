'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "374bdc256260ab0770cbdfb08863a8e4",
"assets/AssetManifest.bin.json": "af8c35be64f83b45c50f5fab575f26c6",
"assets/AssetManifest.json": "3cad1360c5433312844408f8a2d403c3",
"assets/assets/fonts/almarai/Almarai-Bold.ttf": "1c7b8f3e50a7ca693dc27d3f1314167f",
"assets/assets/fonts/almarai/Almarai-ExtraBold.ttf": "5270f5e7ab01259e282604276871946f",
"assets/assets/fonts/almarai/Almarai-Light.ttf": "5b0dec05feae02fef51afd517af94d4c",
"assets/assets/fonts/almarai/Almarai-Regular.ttf": "4fcf563640cefe40b7474aec4f966c0a",
"assets/assets/fonts/cairo/Cairo-Bold.ttf": "19a30f18e32cf8dbb9d0cfcee9e2c01e",
"assets/assets/fonts/cairo/Cairo-Light.ttf": "a6793d94c6568946c4755901ef0f04ed",
"assets/assets/fonts/cairo/Cairo-Medium.ttf": "76f957349a6defbef1b6980bc4c8892a",
"assets/assets/fonts/cairo/Cairo-Regular.ttf": "94c4feb516a9bd22a5ee417f6e099c93",
"assets/assets/images/png/logo.png": "a8c9040f42825c6b05d06c3d7513c71e",
"assets/assets/images/png/t_logo_profile.png": "eada191c0a8765d54ae5e87e1893fd09",
"assets/assets/images/svg/bgHome.svg": "04666d4c3b771cc68e521ed622d64b88",
"assets/assets/images/svg/bgSplash.svg": "16ce0f138a1550b3a1935b3f289b646e",
"assets/assets/images/svg/branch.svg": "04d1d5d818245cd3b3df8bdafb25bb84",
"assets/assets/images/svg/car.svg": "0fc8706e876fdef30933c622b079e5e7",
"assets/assets/images/svg/carPlateNum.svg": "3951ab8e5c89dc31b31ced5deb1d9e12",
"assets/assets/images/svg/car_delivery.svg": "8b1d5b3178969c1d6f8e86904999fdee",
"assets/assets/images/svg/closedContracts.svg": "613a6b391868542910bafebbf8784b74",
"assets/assets/images/svg/closeTheContract.svg": "450e19d854824c667efbb0cc9e909a8b",
"assets/assets/images/svg/contractManagement.svg": "63bfeb6a2221c137a4011f3a788e79c4",
"assets/assets/images/svg/cost.svg": "165759ac54e311b5d69febcad888595c",
"assets/assets/images/svg/drawer_item.svg": "f724514e9587bd03a0d7c77ed6cb3b20",
"assets/assets/images/svg/extendContract.svg": "c63a235d985338824023c4e7e47f748a",
"assets/assets/images/svg/home.svg": "bb401c7794087c878abe528d67c2423e",
"assets/assets/images/svg/inquireAboutTheCar.svg": "6002eeefb560d675305d49ab4a5687fd",
"assets/assets/images/svg/logout.svg": "2e1e52ebf8b590620f98247fce8edb20",
"assets/assets/images/svg/management.svg": "7fb17b02bb1f8f9f808410930bfbb5d9",
"assets/assets/images/svg/map-loacation.svg": "0d79f4cb1655c8c03e9542b1005045ba",
"assets/assets/images/svg/openContracts.svg": "8485e3a170563c9b2329e5aa0b9a9fbf",
"assets/assets/images/svg/radius_car.svg": "6f424e9627bd6cb67f04568b80d20e32",
"assets/assets/images/svg/rental_card.svg": "28238f1461c0ac23c4dddcde4b144582",
"assets/assets/images/svg/renterData.svg": "efb3258e1177156e3f5c8ca1721d2391",
"assets/assets/images/svg/reservations.svg": "972daa94d0a82951ac191cad3308d692",
"assets/assets/images/svg/sendCar.svg": "53c6f9406ab2fa7708e16ed8c62374a9",
"assets/assets/images/svg/signingContract.svg": "e5dbefd137cb94840f1a339c8a048093",
"assets/assets/images/svg/square-plus.svg": "35ea3d681c0e409f4e8c0856ab2ffff8",
"assets/assets/images/svg/targit_required_from_the_branch.svg": "d965e6f77203bd439f3f737e9fe7ba19",
"assets/assets/images/svg/the_amount_achieved_so_far.svg": "6daf2876a56b2bf47c7088f6f596fc23",
"assets/assets/images/svg/the_remaining_time_to_achieve_the_sulfate.svg": "fbfcc0b8e02bf7d27d8ad2476a669c4c",
"assets/assets/images/svg/tracking_car.svg": "35247313b771e2765c668012d44aeac4",
"assets/assets/images/svg/transfer_requests.svg": "c069633cd605f3922b9230f42b16f02a",
"assets/assets/images/svg/travel_full.svg": "6a714bf313255af33104e60631842634",
"assets/assets/images/svg/travel_gray_logo.svg": "0385f89ef24704ab2b11bcac11d0aeba",
"assets/assets/images/svg/travel_logo.svg": "bec37dd1d8c8b8af54f3eb18e7a72260",
"assets/assets/images/svg/travel_white_logo.svg": "2421da08d9e2275934030c21a6f31b9a",
"assets/assets/images/svg/t_1.svg": "6fe7e55694cda0ed0b7754e17a862597",
"assets/assets/images/svg/t_2.svg": "a8d14270cbeab075e5c8fe966bbe94b4",
"assets/assets/images/svg/t_logo_profile.svg": "64bc2ff1b25b0e2d6b0f9a03a7c2dd5d",
"assets/assets/images/svg/t_silver.svg": "f8875c7db68ee2d506d63fe39ff07b31",
"assets/assets/images/svg/whats_app_logo.svg": "ba90dc77fb82574fa4e224e804df95aa",
"assets/FontManifest.json": "57a04bd72bd5cc7f65358c0632ce3927",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "c74faf22e0b7ca298f474c969e62f281",
"assets/packages/awesome_snackbar_content/assets/back.svg": "ba1c3aebba280f23f5509bd42dab958d",
"assets/packages/awesome_snackbar_content/assets/bubbles.svg": "1df6817bf509ee4e615fe821bc6dabd9",
"assets/packages/awesome_snackbar_content/assets/types/failure.svg": "cb9e759ee55687836e9c1f20480dd9c8",
"assets/packages/awesome_snackbar_content/assets/types/help.svg": "7fb350b5c30bde7deeb3160f591461ff",
"assets/packages/awesome_snackbar_content/assets/types/success.svg": "6e273a8f41cd45839b2e3a36747189ac",
"assets/packages/awesome_snackbar_content/assets/types/warning.svg": "cfcc5fcb570129febe890f2e117615e0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/easy_stepper/assets/loading_black.json": "d412b17ec906f03090996d68abab4eca",
"assets/packages/easy_stepper/assets/loading_white.json": "92623d18291ed579cf8bfe3f5fc74213",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/iconsax/lib/assets/fonts/iconsax.ttf": "071d77779414a409552e0584dcbfd03d",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "c17d858d09fb1c596ef0adbf08872086",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "6d8ab59254a120b76bf53f167e809470",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1bfd2a55d573c3e07ef249efbc5868ca",
"/": "1bfd2a55d573c3e07ef249efbc5868ca",
"main.dart.js": "2ae16617de2f1eb240cd8d24e856c4fc",
"manifest.json": "4f297494bdcdb1d38b80c110fb1bef39",
"version.json": "9e31bfea656a86f88c1bfa9e87dfbcdb"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
