importScripts('workbox-sw.prod.v2.1.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "css/base.css",
    "revision": "7938ba1d79fa039e6ee619dddee5f048"
  },
  {
    "url": "css/index.css",
    "revision": "19b839e1dc81c0f6171cb41186ea7438"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "e87f19c3c182ee4254a17dbba2d71366"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "11692b9c439212a799b55434421fe09a"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "d08fe25f827621f44bd62ef8e84b91b4"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "4723741f68574b9cf3e2c9a6c969937d"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "4cf836be86361ebd713f9f1ad7ed1571"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "15a4334fc3efa975d78f911ac9d7e75f"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "e4723be259f6efc88a02bf4264138ef8"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "d3996e403baf4c5bd386bce50c092977"
  },
  {
    "url": "index.html",
    "revision": "4a1991373180a953c30bcea0c7f49e57"
  },
  {
    "url": "js/app.js",
    "revision": "e8bc7e3b46e3d868e0549f618d5043c8"
  },
  {
    "url": "js/base.js",
    "revision": "3bcbf1e6206abb2effa0677bfe7cf8f3"
  },
  {
    "url": "js/controller.js",
    "revision": "be0578f2970270de84e99404aee496b6"
  },
  {
    "url": "js/helpers.js",
    "revision": "1c6bfda95abf09b59450794e9a4e4bae"
  },
  {
    "url": "js/model.js",
    "revision": "f8f75c6cea15c518318f28606d577278"
  },
  {
    "url": "js/store.js",
    "revision": "dd80435d78104b5b6a264e7a14148cef"
  },
  {
    "url": "js/template.js",
    "revision": "59a685f6e4311a6feda6c40062acac70"
  },
  {
    "url": "js/view.js",
    "revision": "96ea5eebc666cbab34d5629eb1bf9380"
  },
  {
    "url": "manifest.json",
    "revision": "284624ec194860afd566cf160b8931bb"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
