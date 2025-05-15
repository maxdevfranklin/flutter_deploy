'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "79e4089ec33809a48a18c84898bdbafe",
".git/config": "29d6a903bb44110c4b5a8166526cccf0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f77146e62819f982160e81c3206030b9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9485e5d4edeec257213df98ff19957c6",
".git/logs/refs/heads/master": "9485e5d4edeec257213df98ff19957c6",
".git/logs/refs/remotes/origin/master": "549d07dc8d5329eb994c95d2e5cf066b",
".git/objects/01/0e68d9d447f9f941c98798cf62d0bdd3c1b0f4": "ef87ce355a18bf03923f6209762876f6",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/04/4d0b097118c3b19c70faab0e09619d56b9deb6": "678f1003871b55220beb07ca498c32bb",
".git/objects/0c/808f5cb7ba10637080a49fbd2b3fce8e653f87": "d0df2a5dd840826e4fab37eb5b3904e7",
".git/objects/0f/cc7b285a8bac8b35c4613e234e5c8acfebbec8": "c7b9e893468877e38f869831e076adb4",
".git/objects/12/04b535a896253ba439d8e1a258db392b8a37bf": "9c9940b8fe8e689b9131ea14345f63e0",
".git/objects/15/8288cbf6fd9d3b191301eb3c8e4141e7ffeeef": "c32e73052469da31bf6d8237d0dc6258",
".git/objects/1b/0e711022c75e5d8831325adf112fb9ddb66626": "e4bdb1c4185f8225343e0c2e70a4909a",
".git/objects/23/28a16f3c1cb6e79775c31c5906d4ec7b1394d6": "18f6f808ec6287c5e1a9b608fbc02534",
".git/objects/2a/90f2162fcb1b7e3849ea306a87cbbf0228b236": "b7025e08b3fd87bd4b715e62ebd4f8b7",
".git/objects/32/deeba5e809bd0a3c6194d4140133530448595d": "7797908f1ddde316bfca960b8d6d1938",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/33/fc7f799ef3e1d3e7798156a08c613bf3735864": "19e373f4c6657773796975908a7a700e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/37/cf322bccd0ee059783b50004b9f1d67e3af80f": "544ddf73aa777ca35d2d5f123f0cce1c",
".git/objects/3b/dada339f8c9cfb8ef6c0eece8c0ed85f37882a": "28b9c31766c5503040fbae5f38aebbf1",
".git/objects/3c/f172ded9ef5243ee17bf89100fdadd0017a3d7": "549492c18590631da9f15ae709ed4ddc",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/4e/2f4c8bfb1eebaf939a1bfea9a669a5125ba795": "ac4f24cfb1af72ee19857c4a8071b447",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/51/b4d90a72c587b5c2c3d9a5525607d3341b9ccc": "955506fb08ecfb7dfbe3aee820b1b7e3",
".git/objects/53/f3e6b1259a4860cf1b05ed0e78522f01c917cf": "834265a8458641c8d9f3bec1731c8587",
".git/objects/57/24152585b58fd87dec6ee731b6d303c18a9cd4": "f299affb0ba2b050f82b706f5f7c11c1",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/59/430ef067424f76561bb1d8115e0113f1359b96": "4e3bb7c32af6754364a3b9cde62ca832",
".git/objects/5e/c4337e70c79d1015f7d502b2b43cc37b2a0c83": "1f5c018c04a57a0f7c900a52825cbc68",
".git/objects/5f/7216c380167d77ccb84033620f36c600dd3adc": "e4e25f05915773434d70aae19721d8b4",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/70/ff963566b49429ae8f71c0709dfa365cf36c87": "63f5c5ac670dccc95b3c345dd5aa10cd",
".git/objects/71/e5779b549b0779306ed71a7d191fa985db30c5": "e9bbd0e0461897c9edbf91fb3e8ddd09",
".git/objects/78/df43e58124862ab856106a70dfad8dfc1dfdee": "ccb0265bce68522f37481d05e354acdf",
".git/objects/7a/6f70d488ae8731c11ceaa4147dfbc192175ec0": "4492c346ed876bb223e5e7ca3495b21b",
".git/objects/7b/95752b52de8f093544df455b2c2e54f2a28c5d": "16ba4567953a27a217a3092c2bd56fdb",
".git/objects/83/280a4151e30af49623df6b6a404c67720b1ef8": "320d7a486d64040b2fbebc8712e1fca9",
".git/objects/85/0023088057bcf1182fd396eb7ba4514910a004": "48101bc1d4bb2ecbb70a1b52e6722977",
".git/objects/88/4bad58dc1dea1bdd31a7683260a3034e2234d4": "3fe971f2d19bc7eb4f416f7e060dc358",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8b/fa14c05788e6446659758c8f8fc9e461e6dfaa": "268beb9d2ff9b09f6be1f36b68a73a4c",
".git/objects/8f/61da372928195819b9116c776cee82de890491": "6e89df8f29614d4796737af1e07901ae",
".git/objects/90/952fc8c23a4f86e9eea1f81e3be41607d12efc": "c3dafdeb02052aed56273c322debc4bf",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/92/c3a16fed2bf030ef6c521a22917d34748967f8": "6fd01b5bab771a7789289ab883ba246f",
".git/objects/93/be7fd9b9dcdd8564dafd7040a0c8c8f68d4080": "b27ff257c793a735fc818ff37f392ff9",
".git/objects/93/c7c6ed461e90829d26f25660d9e3aae5e81794": "b10b0177db695db60e61305c49276534",
".git/objects/9f/4eab2c44f3e84cca0f509bf0029e3fac400b26": "97cd9949464392c83a58c78d257011f2",
".git/objects/a2/198ddf0ee822d68cd1b6e377f9e133857da7e4": "f1788d7e5e609dcf34be2c40cafcef65",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/ae/30433e192c4b1f30ce10f8e11476e2d212c725": "d807f9602d54742c64c682bf0fe23efc",
".git/objects/ae/ca7049140a72ebe9e4ec04f5c0454bc776c3b1": "a5d95690c7e4e234829945a2b4b4eaab",
".git/objects/af/bb6c5f6a7f8d5d43453f535963809f03435080": "a71489cb82f2bba967d6643930c9a861",
".git/objects/b5/3b32ecfa693cb5297b125378098e117f513b05": "29624ce4030350ee923102f487d35a64",
".git/objects/b5/c3044e3c85a2b77a274e4f2f115bed93408b3e": "c6c048bb629cbde7e0c06a011c1b5bce",
".git/objects/b6/96e31858c8be494a09e353e8f8d2366a478ba9": "34369ace6b1cb63f940c5d3f70b30e81",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/e640461fe12c6396d61f0b6b2dc654cdb757b4": "d4e229028597cd951b052ff261349814",
".git/objects/bf/1264e2daac041266eec6d64df0f0565783c8eb": "ad54d0ca6b8c51961177937acbcf021d",
".git/objects/c0/45a01a956290e8f809203c28604e67a3845de3": "7e51df204f6a366d2bd343afb6699db0",
".git/objects/cb/746d24dd57ce60942fbae93c34444258cdd79d": "c9cab27ab01172e7cd5a503102392939",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/219d56981034421129f500ad016d38f162cd08": "c7910b11b452e48c736a0f4fbc36f5fc",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/db/b3cc60226b8c1009f34dd6d0533e1e23f98651": "15af9524d664e39a6f548412b724c2e3",
".git/objects/e7/d766550646b61954461ced5dad44843df1cd89": "2ffbd10fe41836d0a32708a1e1739c3f",
".git/objects/e8/9518217bd65a7208a3267b11e7c335fb0e1b43": "f471e982611b22d23c6cc67b503ace4d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/3c8ddcd92255e91ef4f026d9bfeafb7f26b459": "1c62d40c3e479010bd23593f61ca3d22",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f1/12dc04a95971cd1a556ac7fff90a7eee07a4a6": "721d7ed29a1a87d6907d55f6be093aff",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/refs/heads/master": "4e933c3686e19cb38cdb9e1a2801d38c",
".git/refs/remotes/origin/master": "4e933c3686e19cb38cdb9e1a2801d38c",
"assets/AssetManifest.bin": "c394796d9db104efe2fbaa0e51eabf9c",
"assets/AssetManifest.bin.json": "4784b8873ecfeab59db2d241d76f33a8",
"assets/AssetManifest.json": "6669a972570cc619ad6bfffbc15e8490",
"assets/assets/images/aera.png": "a023c1cba23b611a495ce253dd4013b0",
"assets/assets/images/Etron.png": "e614c33c75f59a83679115cde9a53287",
"assets/assets/images/franco.png": "99258a92a97c9cd1fdd78a604377407e",
"assets/assets/images/grace.png": "6d729c72719fabf18bcf844a13783375",
"assets/assets/images/jenna.png": "088119e9a7dff0081393757a0d6141eb",
"assets/assets/images/preview.png": "04db4f3141e5d68c5af86f1978254cb2",
"assets/assets/jsons/follow-me.json": "4a147b6187fbd78b6fadf4c6c348ceae",
"assets/FontManifest.json": "f594c29947a7cdbc53fe77c333f2eba2",
"assets/fonts/MaterialIcons-Regular.otf": "30e437ff05d472e8f3a802933749d2a0",
"assets/NOTICES": "d141bc735edc81f096ff47e6a3881656",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "11487f27800bd3ec4e94e79f6e047cd4",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "bf21cd8fd775a3c59fd53afdee39e0e6",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/line_icons/lib/assets/fonts/LineIcons.ttf": "23621397bc1906a79180a918e98f35b2",
"assets/packages/mesh_gradient/shaders/animated_mesh_gradient.frag": "1890be5ac6e1b673019ee2604c2d59c5",
"assets/packages/mesh_gradient/shaders/point_mesh_gradient.frag": "6721e3c3c3b65cb49c2709c828288ffd",
"assets/packages/record_web/assets/js/record.fixwebmduration.js": "1f0108ea80c8951ba702ced40cf8cdce",
"assets/packages/record_web/assets/js/record.worklet.js": "356bcfeddb8a625e3e2ba43ddf1cc13e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "98b6c289e6ced93e3f38f25d956b7c51",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "a5424701b5b97b9abd806652081c9573",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e907b66b18d7264c7a9a0f65b4b2ca8f",
"/": "e907b66b18d7264c7a9a0f65b4b2ca8f",
"main.dart.js": "c0f6f411e9296b46b31ff48b491e5336",
"manifest.json": "b15d6a6621d9d90da365ed1bc9f9e29c",
"version.json": "ff966ab969ba381b900e61629bfb9789"};
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
