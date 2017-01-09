/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/448c34a56d699c29117adc64c43affeb.woff2","448c34a56d699c29117adc64c43affeb"],["/af7ae505a9eed503f8b8e6982036873e.woff2","af7ae505a9eed503f8b8e6982036873e"],["/assets/images/acsi-logo.png","09a91712568bd208942b526b520b93b6"],["/assets/images/icons/icon-128x128.png","ae1406fb48ed00cb0848fa7f0efdfea6"],["/assets/images/icons/icon-144x144.png","2f1b820812d8877aef29d8328872d988"],["/assets/images/icons/icon-152x152.png","35a18adf6a2b20c8e8308722cd18f80e"],["/assets/images/icons/icon-192x192.png","caf17ea15bb76744eeed5e6bfb40cf98"],["/assets/images/icons/icon-384x384.png","9ff762be83ccb0597a022da7865930d2"],["/assets/images/icons/icon-512x512.png","fe1ed5769a834cf3b75a6c356a3d16ba"],["/assets/images/icons/icon-72x72.png","96ba04dc53b230fcb8d2a0b8311ec17d"],["/assets/images/icons/icon-96x96.png","f77d168c10eac324971e457f9a26b339"],["/assets/images/icons/pokeball.png","fc8e02221328fe1c12f2809f4d86f5ba"],["/assets/images/no-picture.png","3008467c5c96c21fbd1cd9df25822d7f"],["/assets/images/pokemon/0.png","8c5b1e50d13997a43038fc86a0d679c2"],["/assets/images/pokemon/1.png","e5a3f9f7252e00dc36f8f3b9fb7cb274"],["/assets/images/pokemon/10.png","acf9826984beffb6793429778349a806"],["/assets/images/pokemon/100.png","05131ce274123fe85cd5c7aef0590edb"],["/assets/images/pokemon/101.png","fb506fa1bdb34c8140bd6442ff285dc4"],["/assets/images/pokemon/102.png","c29f0b8776e01d5578681adf037ee6ab"],["/assets/images/pokemon/103.png","15f20c4b382eb9a88ece7aec5272e692"],["/assets/images/pokemon/104.png","abc42c3c88266eafa137ae2a720bbc57"],["/assets/images/pokemon/105.png","6bf09a1e0bec746d77a0f3b1afce31e6"],["/assets/images/pokemon/106.png","66fa97da9367aa0390a00cdd13697745"],["/assets/images/pokemon/107.png","dccafdeb72d7050e023267e95cf05c67"],["/assets/images/pokemon/108.png","c63e5b7fe52acf04461c87783a165b0b"],["/assets/images/pokemon/109.png","159548fc7c23248cb30635410ebcbb5e"],["/assets/images/pokemon/11.png","66b3c917fe16100c0c0dadae0c168c3a"],["/assets/images/pokemon/110.png","c202ad1dc67b597960eb886724040510"],["/assets/images/pokemon/111.png","dfdc6ea830bd75440af77b58187c6f4b"],["/assets/images/pokemon/112.png","60c25c916bc53d96036d7894a518c27f"],["/assets/images/pokemon/113.png","3ca9a7dd28aad62416798452b06afe5b"],["/assets/images/pokemon/114.png","c3f18d421dc206142ac27a7776e9521d"],["/assets/images/pokemon/115.png","10ed07155b12d320f96e5694f306c984"],["/assets/images/pokemon/116.png","580f94e339c38dff1e32bcece1c7b57c"],["/assets/images/pokemon/117.png","b36dc500f6b41bb8b1ae5d8598eeb4d2"],["/assets/images/pokemon/118.png","c1b9c59a88167195f184e2093616b250"],["/assets/images/pokemon/119.png","6ede48b40e456b64a2882fb56ee9fd6f"],["/assets/images/pokemon/12.png","6d98fe6f6bd75133cf2519c6d914af28"],["/assets/images/pokemon/120.png","67bd3723376bd57f022ccab10af85558"],["/assets/images/pokemon/121.png","6a0244a451c3b1ac4b6ffb168451c003"],["/assets/images/pokemon/122.png","d66427cc8da3b93ac764b6e7834e6609"],["/assets/images/pokemon/123.png","a937d2227f7a335089a2e7d169989c8b"],["/assets/images/pokemon/124.png","600f98a129656c525d7d7af5262a96e6"],["/assets/images/pokemon/125.png","bbb4b33767ef2c65dda17fbcdc63ff57"],["/assets/images/pokemon/126.png","0b8f7071264aeb4d3136a97edc4f79d0"],["/assets/images/pokemon/127.png","65f228f977fba2050786f3398971cf30"],["/assets/images/pokemon/128.png","f980f060cc7f67ef69c41ec2bc778655"],["/assets/images/pokemon/129.png","198b31fe2c7b5700f7c838e4f8bc2e43"],["/assets/images/pokemon/13.png","f3bf7cf3ae2fa9a22808839d901c1cef"],["/assets/images/pokemon/130.png","706928fca3ab7085665127050dc2dce1"],["/assets/images/pokemon/131.png","02b868f561d719a79b50ae8fe08f79eb"],["/assets/images/pokemon/132.png","f4710bcc815291d25f22e68ccc56aece"],["/assets/images/pokemon/133.png","56b3af2386f59f8592b96285a4975346"],["/assets/images/pokemon/134.png","67e0fb08065f73a8678ec0f481f4f2b4"],["/assets/images/pokemon/135.png","30bd6e1db3ee810fd60211b777deba41"],["/assets/images/pokemon/136.png","bb89999b0d1d86f009330100e4bf665d"],["/assets/images/pokemon/137.png","f7dee3b2b5e22abdb7f7431c98dc08ee"],["/assets/images/pokemon/138.png","6b4b7ffaaa201a2216cc2a4f1f607372"],["/assets/images/pokemon/139.png","c5eaeb212d7d5c51e541cd6e628506ec"],["/assets/images/pokemon/14.png","1c40bfb67ea2d898bc145935ded03c39"],["/assets/images/pokemon/140.png","6a011b958bf96678380a6a8cd83feb62"],["/assets/images/pokemon/141.png","36e967f977f6377698b7ed6c9663cb26"],["/assets/images/pokemon/142.png","8e0097081fe1011f575d3b9b7533a110"],["/assets/images/pokemon/143.png","ff929cd58ffdd3060e30419cef5585be"],["/assets/images/pokemon/144.png","7a04e83f4a979f839f648f37c6bd003d"],["/assets/images/pokemon/145.png","799bdd6f9a4b0d0c4f74602ef4639080"],["/assets/images/pokemon/146.png","6813d6ad782a782d712072e85aefd0fa"],["/assets/images/pokemon/147.png","8cb494befd223e6483649cdca41f4db1"],["/assets/images/pokemon/148.png","9bba676f6d1321963d40c75fbe408588"],["/assets/images/pokemon/149.png","cda9d42582bb236f432683e348a1662e"],["/assets/images/pokemon/15.png","2b381ec649e44a1a3d6eb6ea6206112d"],["/assets/images/pokemon/150.png","2b6bf70d15ea10b9dba50c8c3039d271"],["/assets/images/pokemon/151.png","d77ae9fb9077b2028f82c1700c823781"],["/assets/images/pokemon/16.png","91f17e385179314ea2c3f0e47828609e"],["/assets/images/pokemon/17.png","f680ced5d9e07689b783e251e8a46f07"],["/assets/images/pokemon/18.png","37c4e30bcba34b97ce9682035ffb35d8"],["/assets/images/pokemon/19.png","b93046fab544a480c2793c9b190ec065"],["/assets/images/pokemon/2.png","873a9ada055ac1a571c7adc729cad326"],["/assets/images/pokemon/20.png","e1837a049222ecb79a5e1f0944941fc5"],["/assets/images/pokemon/21.png","cc42c5a7c5c609734e91377fbfd083b6"],["/assets/images/pokemon/22.png","0501bf26b20cd6c8bd22e6736be7b49f"],["/assets/images/pokemon/23.png","ac6f6c4c6823c0aacdd6bdf03036c083"],["/assets/images/pokemon/24.png","6ab8bc0a912b92b6188d4fbcace84862"],["/assets/images/pokemon/25.png","755de1a551fb9c42e7b3e8a665dd7fe0"],["/assets/images/pokemon/26.png","fd8474add763a6d749e84d13502860d3"],["/assets/images/pokemon/27.png","5fa5bc5f46708abd995f7c01b71a0f71"],["/assets/images/pokemon/28.png","9682f4e484b72f3c95b000bf6b77c0a8"],["/assets/images/pokemon/29.png","0a4a35ee84510693f5536a3bd4d83c68"],["/assets/images/pokemon/3.png","3726fbd3ffaa6e7f829e0f2392240cb1"],["/assets/images/pokemon/30.png","7500eb12e27dc75e01c72c2b07b18997"],["/assets/images/pokemon/31.png","1bbb3f97e333ed83b75940a3e70d54ea"],["/assets/images/pokemon/32.png","292a85371b3d1bf65dd8b10e67b10b86"],["/assets/images/pokemon/33.png","e52983ee0eaf3f65f4c407c85d2e01be"],["/assets/images/pokemon/34.png","3025df3a33ee39d2281b9780dac22046"],["/assets/images/pokemon/35.png","8da90a8c8a24e7347b4c886f68e734fa"],["/assets/images/pokemon/36.png","63a11ede7d1b661ec57b6be9866dabe5"],["/assets/images/pokemon/37.png","745adb99c7ef8fdb88015397729ed7d7"],["/assets/images/pokemon/38.png","c58e6d77b6e1493378ad57dd089284e3"],["/assets/images/pokemon/39.png","8109f9a9ffbe4660a2b775cf7eff33e4"],["/assets/images/pokemon/4.png","60a52f5dee566b081b8aa9b3ac4db5d8"],["/assets/images/pokemon/40.png","78e6e20f09614f35105968e404baae3a"],["/assets/images/pokemon/41.png","ac47613702dc81fd954bc614cd3cae91"],["/assets/images/pokemon/42.png","ec9d93cfc03786dfb6a84c867d02d87b"],["/assets/images/pokemon/43.png","93f1d50800d090a40d179005307ca357"],["/assets/images/pokemon/44.png","7c8b8a6adfc289731c555adc9801a0b4"],["/assets/images/pokemon/45.png","9220163477ddfcf8adfa9aa3fc47e821"],["/assets/images/pokemon/46.png","ae85bc1407796112c1f2b634ed0ee536"],["/assets/images/pokemon/47.png","5b41b8204f2b729c9ccc4955329b3cb2"],["/assets/images/pokemon/48.png","86b8f60c83f7e6f4590b691316b4c1c8"],["/assets/images/pokemon/49.png","b553c51d46c72ead583514df2f1f7162"],["/assets/images/pokemon/5.png","20e654a454146e4919d13195a7669d6c"],["/assets/images/pokemon/50.png","b8ce79df0c75a060bd872c83ebadf893"],["/assets/images/pokemon/51.png","cc02bd5679b3aecae4e1d6a3e19b5953"],["/assets/images/pokemon/52.png","89e080b165c0499df16238f6892fbf3f"],["/assets/images/pokemon/53.png","c6dbe193e926c31e82d09d56fc1bcfee"],["/assets/images/pokemon/54.png","87fe2eb40f3161414485d7120e36e916"],["/assets/images/pokemon/55.png","c671d9f06d6ae8cd8b2c10131884f37c"],["/assets/images/pokemon/56.png","8c6dc418a684133a7899691dcb9e6a0d"],["/assets/images/pokemon/57.png","e075bc51dbe6ff6b7d865b9e92945ca3"],["/assets/images/pokemon/58.png","5efe11e608a80ca3a884a197049fc740"],["/assets/images/pokemon/59.png","7a02c2edbbd82ee35c142ef7dbc3dcc6"],["/assets/images/pokemon/6.png","39cece18bc8aa8e400dd97b44cc37c46"],["/assets/images/pokemon/60.png","064cf5d160f9d09ecc7b27ad2df6989a"],["/assets/images/pokemon/61.png","6d514a6eb0416df76621c11cfa797672"],["/assets/images/pokemon/62.png","d573df0c99a6653b1aee3560a2705407"],["/assets/images/pokemon/63.png","0aa24dd97c656640df5cdc975976277f"],["/assets/images/pokemon/64.png","6559fa62a22802369fc2119d03dd938e"],["/assets/images/pokemon/65.png","574424f51acfe39553f9bc043ce38c35"],["/assets/images/pokemon/66.png","b9dff0522d303f6e3b130266fe102269"],["/assets/images/pokemon/67.png","a8e4f1388478fc99861a821a1bea5fd0"],["/assets/images/pokemon/68.png","efd019271ad21b0141c726305325a221"],["/assets/images/pokemon/69.png","088e79ca9cc2ef0b918f760152369dd5"],["/assets/images/pokemon/7.png","d62e1a9fbeecf32fcf9b099d72481199"],["/assets/images/pokemon/70.png","7608b8ef058d5afce3ed0386c2eb277d"],["/assets/images/pokemon/71.png","697246594a8d2e5f925b84e7c1ca56c2"],["/assets/images/pokemon/72.png","72dcc6b1e5e13558e19779aec8f0eaea"],["/assets/images/pokemon/73.png","b916c745ff0151348946a104847edae5"],["/assets/images/pokemon/74.png","29b42bda925db68cbaed328b09c47cbe"],["/assets/images/pokemon/75.png","d6450c81683fab455c1f8fd512fcaf26"],["/assets/images/pokemon/76.png","23bdf76d071cea2530dcdd7b6681b617"],["/assets/images/pokemon/77.png","f7d564d32f7babe77bc362ae4becf144"],["/assets/images/pokemon/78.png","d7bf027b1d33877b610c57246e5117d2"],["/assets/images/pokemon/79.png","854bc0982bab05cc828ce19ee994be87"],["/assets/images/pokemon/8.png","c4d2044c36e379aee0b4a9ec249a7369"],["/assets/images/pokemon/80.png","2e7fe27a6322853457e217399621baf5"],["/assets/images/pokemon/81.png","16f5f5d955de374ecc164e005841d712"],["/assets/images/pokemon/82.png","5fa57c4acee6b6630a1bff5aaa6642ca"],["/assets/images/pokemon/83.png","21cd939d31e46d60e21dc29d01dcda97"],["/assets/images/pokemon/84.png","4b9e48d72681fb9b9af8df6b0b4d40a2"],["/assets/images/pokemon/85.png","168015c38b4f4b503e8a97c46da218bb"],["/assets/images/pokemon/86.png","b01fad316d8999ee0a734fd4fc892d04"],["/assets/images/pokemon/87.png","6d487512e10eb42fc944aa6e09bef71b"],["/assets/images/pokemon/88.png","325e30807aa37f8ec68bbf28e27a10eb"],["/assets/images/pokemon/89.png","10c8acda44f2266f18d1f1984803ced0"],["/assets/images/pokemon/9.png","ce53e72c00455cf92b1478ce7b3833c8"],["/assets/images/pokemon/90.png","83449ccbd1c68748e66e38b5158d6ceb"],["/assets/images/pokemon/91.png","a90954b39ccf8c111ffdc81fcb702509"],["/assets/images/pokemon/92.png","27cf867be469979cde0b190247d48447"],["/assets/images/pokemon/93.png","99f0bb0242f4141d288843c248faf7bf"],["/assets/images/pokemon/94.png","133075c47e189f1f78152d2a06350a42"],["/assets/images/pokemon/95.png","f82267ec16dc0bb7962373c54c7b3ba7"],["/assets/images/pokemon/96.png","374f7163cdc6fe262fd9cc792e368ff1"],["/assets/images/pokemon/97.png","66207f4d234ac0f396f64748adfa0262"],["/assets/images/pokemon/98.png","4b20fce526dbe0face4bfea6df4acbc6"],["/assets/images/pokemon/99.png","d66048c690beb8a27ecdec68178d7609"],["/index.html","645ed5ac6b0837e3b02e9d90265d82ec"],["/inline.d41d8cd98f00b204e980.bundle.js","b81568915fe3c02859753d7dc5a8dec2"],["/main.d8eae0f81a4c569a2a06.bundle.js","4ad22f0f3cf933f0a085f00aa616b454"],["/styles.807c237698fc2d7acd9d33657e905db1.bundle.css","cc3f389e0620e0eaf209e5b63650f636"],["/styles.d6983b9a92d269fc6b29.bundle.js","3416a0a978a15a1c796cc48e23dd8798"]];
var cacheName = 'sw-precache-v2-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.toString().match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              return cache.add(new Request(cacheKey, {credentials: 'same-origin'}));
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameter and see if we have that URL
    // in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '/index.html';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







