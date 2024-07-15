'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "e5a6b9bb0d3e818ee2e71ce13c540bd9",
"version.json": "0c0f216726b797dcdd157004732d4231",
"index.html": "65e3a99a0b76d70d68de00559c008329",
"/": "65e3a99a0b76d70d68de00559c008329",
"main.dart.js": "675df3076b9c08b2fd5c2cb86f668ba8",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "684dc34190cadf1581d681514e5b4377",
"icons/favicon-16x16.png": "b99af480b805f56b505437b756d6c8cb",
"icons/android-chrome-192x192.png": "2ceb22978d8ea1a9a45869243d3287fd",
"icons/apple-touch-icon.png": "3e5e357baa3fbb48a19aa69e2d4f2cf2",
"icons/android-chrome-512x512.png": "ebf176441f499ae560753991e70cfa34",
"icons/favicon-32x32.png": "3971f4377be1f9f401bd4e6659a5dc1d",
"manifest.json": "053100cb84a50d2ae7f5492f7dd7f25e",
".git/config": "f48ab47e6ae2d0e2e739418b51356af0",
".git/objects/0c/789fe61f20e0d058515e3ec5c373fe021f33bb": "69e3667b895a828d75e3785224769979",
".git/objects/66/155529dc4d2c8f7fda87a0acdbbeba279fb7d2": "d3bdc5d1ef22c6a53ef3e9dff23b09e4",
".git/objects/35/9cab337ae1b0fad3ab5cc4f55fe3348e9f0480": "053c16f3b6dc17b2bfba9767d13792ea",
".git/objects/69/d08f66c8da6648baf0dbe3194840f7329bf565": "5aa3d6b47c4c9ec8a9b7352b4375ce2e",
".git/objects/56/d7eced3d67fef7291a2314d31505fd912c6b2d": "a4e8a55072a1d988b3efd358070bf09c",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/0b/51ae864e67e73719455784e5b0f3e9e55c0773": "51c3e49ee310412d2d83588bd907a878",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/34/9944e831dce298424343cca67471db2c11660b": "b3ba4521fb31f84c64054357015a6d59",
".git/objects/b5/354b51d3326d1dac9f10b2cdde0ae45102da5c": "72b2c084f03710993ae653ff82e379a0",
".git/objects/b2/02ddb36fd0e5bec8b91c25a4f3bb533de79c15": "4289829fa3e522677ee28b0efadb344c",
".git/objects/ad/8f27ac060b561801f42e17258f59807c45e40c": "f67e7566399cc2deee228f1dd25a2828",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/a5/c720fcbc823218ce8a4aea2c9f2fc1a8714e61": "3bbf5728619bf399fc1970ea8e39cb68",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/acbe3033c9c8a469f2fd4e766a27f0c55a5079": "5601e34985fc3dea86ec5d63c5709128",
".git/objects/e3/2f55dcbce8eea792740f48817dee2eb24f2c1e": "05e3aa1dd17d02540e6eace8ea55c17d",
".git/objects/ca/78d7da5f58fc6fab0353dae5947a514ff89555": "9a76ae029bf59bb353e3665975c096d8",
".git/objects/e4/c3f5b2e400fcf70410dcac105303fa3316613c": "a0c6e7bc1defe76489525a183fe45a90",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/45/dc8a20658bd09ecb8ca1c88f94fe80cc4ca286": "3777040b10a836277a4dcd49b2f159fa",
".git/objects/1f/ce1b76af44cc789935538e73a9edfe7929b8cb": "7e66eb2fc226a726d610001b393c4432",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/74/d99d9f927f0d180d2bd003a142fc413bf9e4d9": "9fa5a3eca468b67540bb3c94385eb0e0",
".git/objects/17/d39f27727c2a852461391eb71209913508f314": "a8494767d229fe34494bb3661c7c219e",
".git/objects/4d/8428224f765ec7ff01ca9bf77566df1e69984c": "c21f06e1961a4624721c0f73e8544344",
".git/objects/72/6ad00573f615ac02304e5bfed22a2df32ff73f": "669f6a08b73a9fee851ed9532c88bb94",
".git/objects/2f/0246071e3311d53d804be776af02f2cdd9b2e1": "2a0c6c2e528451a9fb51d3c0463b70cf",
".git/objects/38/a14d8d4c5087a1d412c01393f084b2c62032aa": "200e96b41b86575474406dcd965b689a",
".git/objects/6e/702b07f1a13cb2b22a9d17fc5f5787af32073a": "f166c20b2670b49dc71923a531282666",
".git/objects/9a/594273de27a56caffe8d76416f240b80cba8c9": "7110997ef4c855c4e80a95fe56c58ee3",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/5d/15672c94d052a73b76f679931d48a500ba7c7e": "f5f01d11ea277f6e147ede3404bdef3d",
".git/objects/65/a9df12f00081c400732d62c113aa0954bf396a": "275d637bffa61e65dd9820679a86c878",
".git/objects/98/53123a0ad7907b7b7e470f05a8d07ff56a89b3": "f3393a59e0402617d4992fa88f7f42ae",
".git/objects/39/dac2ea3638226f8b1b73694297c65ca0085841": "72fa90b7d3afd0fa2b88c8e358b911b6",
".git/objects/64/de0c751c3628f773e9f01e8fc509f33e18ed42": "0c48984899d19570070e5d76f82e03f2",
".git/objects/64/4b47496e5c4111dcfd00ba7177256008eb4c5d": "8437ba19c0cca9f63a39c892d79ffdbc",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/325c53be734021b051cb27006abf1553ce31db": "861bbe21fa0d2d7c0bd016a3fd1f72d5",
".git/objects/d4/22bd94ba65ebed542afe5e51f6a5dc918c4fc1": "ca784a3789386ef739c5d4a7d51ee054",
".git/objects/d4/07c334544fa04f1d7e9428f354f4c622e2ddf2": "85688a5b42ff6e912b1021c8d54feb04",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b8/5abe6ccf311b8aca3dd89d4897d959a8fcd8dc": "3155dbc49fbf48f7a9977245ac543204",
".git/objects/dd/090e33e3349435342aecae3befa84abd76c023": "56f4a2448936c7fa11d31c9afd50ee5e",
".git/objects/dc/fb6f0fd6db91bb1944cf2fd6582f60ed356edd": "45cb36fe483a132c04de52b0dda61f5f",
".git/objects/b6/92cc0cf45b4823ebf7fd0c8855951e93abdf79": "d92cd3f96cb8b7d9ee19ae9f8dc062b1",
".git/objects/d2/ba9d6c4648d835e5e9e38e2efe95a9440c0afa": "8963b0b5e01fa22a8cb1558087bd4657",
".git/objects/e1/0e15649bb15495826d4cae86c7cc1bae5bd602": "ef05fa6e545465043a83256f54636720",
".git/objects/f9/899c16099592cf504f83679ca1644ede3db98a": "40801d2a3cf32182d8408bfc9a1bebad",
".git/objects/e9/308dd1b78185846b42bc03b4b5a9252ed3f131": "c5e810b0aca9c067c20ac288789ecabc",
".git/objects/ce/01815938ca8444329e04472614e66b1f712c00": "bb7d1994c9c553f1fbd8254bbd600283",
".git/objects/e0/67e98b0278a25ba3202c15fe0b4e147537e2e5": "4c552555ae70795f7037038e1c687360",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/85/5c30d07cf3c7828be48cb30c963d1aa1e1c8e2": "356219933914db9b23b051c532d89c7d",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/1c/82f2fe977e62d88f2ce84ae818fcff682d387e": "6c75d165b0c8a3d5e1e8b66b0c8b26c9",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/47/0cfb5b1dd04b6955ed2b8f930ad2efef2c7b97": "113c7e716fd752a405cb889725565c7b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9dd223b4fa863bdca04ddda3abb2b3dd",
".git/logs/refs/heads/main": "9dd223b4fa863bdca04ddda3abb2b3dd",
".git/logs/refs/remotes/origin/main": "ac2ef14292f2da8275a4ed2f534f9bf5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "2ee2e7697a6fbf9193be172ea8718a00",
".git/refs/remotes/origin/main": "2ee2e7697a6fbf9193be172ea8718a00",
".git/index": "547c9fa63b04617aede770d9d4507bc3",
".git/COMMIT_EDITMSG": "0f8c4ae83fa60efe550d247f4d30651e",
".git/FETCH_HEAD": "9a5ab6513fc24ffcc68329bad61abf4a",
"assets/images/login.png": "5bd6e4d36069ef2e1a0363c7434cf81c",
"assets/images/formpage.png": "7f297c4a7ab8502273a868a3feb99032",
"assets/images/undraw_Female_avatar_efig.png": "428d038c28d271738e16b1ad6173f2c8",
"assets/images/student%2520profile%2520page.png": "cd37b0755e9b979e99651d064286840a",
"assets/images/first%2520page.png": "d7aea8e75e889c07768538a79b69becb",
"assets/images/contact.png": "4aa5ce88b6b2cf8e3938b00e8e8fab4e",
"assets/images/student.png": "9e5c8479a67fc65a1548cccf7ee6a490",
"assets/images/student%2520page.png": "b5bb294a4b0470fec9a4069f2eaae316",
"assets/images/login%2520mobile.png": "f443ea21019a1f3e95718a5d3cccd636",
"assets/images/company.png": "3e906bba7509118da1ccdcb830f33233",
"assets/images/logo-removebg-preview.png": "8451e9b85d23c4e589e8876da45d8dcc",
"assets/images/course.png": "259e112bebfd77746d7070bcdf140a64",
"assets/images/logo.png": "684dc34190cadf1581d681514e5b4377",
"assets/images/signup.png": "f3422d452c82f3df8ede34688cc761c8",
"assets/images/undraw_Male_avatar_g98d.png": "91bdb6f5cc7df130fd6f57c29786e972",
"assets/images/company%2520form%2520phone.png": "d03ba352d8bdf02ba30ec22ad42fcfba",
"assets/images/google.png": "48968e25a410cf9711ec32caad37df0a",
"assets/images/companyForm.png": "a5394f8a1918386c791ad4de918795be",
"assets/AssetManifest.json": "e34e04e3f12e2f47743e9d8fa12b0179",
"assets/NOTICES": "87ff625ee6eecc2db878389c7c629873",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "d85a2051ce2376a7d5e6160590f4c381",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/awesome_dialog/assets/rive/info_reverse.riv": "c6e814d66c0e469f1574a2f171a13a76",
"assets/packages/awesome_dialog/assets/rive/question.riv": "00f02da4d08c2960079d4cd8211c930c",
"assets/packages/awesome_dialog/assets/rive/warning.riv": "0becf971559a68f9a74c8f0c6e0f8335",
"assets/packages/awesome_dialog/assets/rive/info.riv": "2a425920b11404228f613bc51b30b2fb",
"assets/packages/awesome_dialog/assets/rive/success.riv": "73618ab4166b406e130c2042dc595f42",
"assets/packages/awesome_dialog/assets/rive/error.riv": "e74e21f8b53de4b541dd037c667027c1",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "92969cd786bbbaba64cd3562a95a1d90",
"assets/fonts/MaterialIcons-Regular.otf": "e2c94db86b4bcef6542da8727d930334",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
