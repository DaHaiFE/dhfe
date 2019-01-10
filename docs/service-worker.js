/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "804b94506f75c5b1b8b8c061b49c2222"
  },
  {
    "url": "about/index.html",
    "revision": "d15bf2cff62752795d198ee993e4fcc7"
  },
  {
    "url": "assets/css/styles.c9bafd68.css",
    "revision": "31bd01ebf5980bc1ce756a0387fbc426"
  },
  {
    "url": "assets/fonts/fa-brands-400.030846b7.woff",
    "revision": "030846b7226a63373512cbd2c71ff51a"
  },
  {
    "url": "assets/fonts/fa-brands-400.3f5a250e.ttf",
    "revision": "3f5a250e01aa2a2c757c8d8915216e0b"
  },
  {
    "url": "assets/fonts/fa-brands-400.4291d4b6.eot",
    "revision": "4291d4b6c28b411e821a90adb4716fd7"
  },
  {
    "url": "assets/fonts/fa-brands-400.65e3be4e.woff2",
    "revision": "65e3be4eea08191c64040fbcb8006068"
  },
  {
    "url": "assets/fonts/fa-regular-400.222941bf.woff",
    "revision": "222941bf21f9c9cb93bace95e9171d39"
  },
  {
    "url": "assets/fonts/fa-regular-400.6bf2d6c8.ttf",
    "revision": "6bf2d6c8c5f78cb9fc035dc7c2b1253e"
  },
  {
    "url": "assets/fonts/fa-regular-400.914437d6.woff2",
    "revision": "914437d606603d81e81a52e9e9b704b5"
  },
  {
    "url": "assets/fonts/fa-regular-400.d30b8018.eot",
    "revision": "d30b80185b2bd2b99ddcfde903a49a50"
  },
  {
    "url": "assets/fonts/fa-solid-900.140f4148.woff",
    "revision": "140f41485edce6f713abe17625eba4c1"
  },
  {
    "url": "assets/fonts/fa-solid-900.4910ec73.eot",
    "revision": "4910ec733558f59bf05834d4f831a48d"
  },
  {
    "url": "assets/fonts/fa-solid-900.813b8aee.woff2",
    "revision": "813b8aee60f235b36887a388b70e1359"
  },
  {
    "url": "assets/fonts/fa-solid-900.e57e108a.ttf",
    "revision": "e57e108a1ae04ca2b27cab75e4478867"
  },
  {
    "url": "assets/fonts/Roboto-Bold.39b2c303.woff2",
    "revision": "39b2c3031be6b4ea96e2e3e95d307814"
  },
  {
    "url": "assets/fonts/Roboto-Bold.dc81817d.woff",
    "revision": "dc81817def276b4f21395f7ea5e88dcd"
  },
  {
    "url": "assets/fonts/Roboto-Bold.e31fcf18.ttf",
    "revision": "e31fcf1885e371e19f5786c2bdfeae1b"
  },
  {
    "url": "assets/fonts/Roboto-Light.3b813c2a.woff",
    "revision": "3b813c2ae0d04909a33a18d792912ee7"
  },
  {
    "url": "assets/fonts/Roboto-Light.46e48ce0.ttf",
    "revision": "46e48ce0628835f68a7369d0254e4283"
  },
  {
    "url": "assets/fonts/Roboto-Light.69f8a061.woff2",
    "revision": "69f8a0617ac472f78e45841323a3df9e"
  },
  {
    "url": "assets/fonts/Roboto-Medium.574fd0b5.woff2",
    "revision": "574fd0b50367f886d359e8264938fc37"
  },
  {
    "url": "assets/fonts/Roboto-Medium.894a2ede.ttf",
    "revision": "894a2ede85a483bf9bedefd4db45cdb9"
  },
  {
    "url": "assets/fonts/Roboto-Medium.fc78759e.woff",
    "revision": "fc78759e93a6cac50458610e3d9d63a0"
  },
  {
    "url": "assets/fonts/Roboto-Regular.2751ee43.woff2",
    "revision": "2751ee43015f9884c3642f103b7f70c9"
  },
  {
    "url": "assets/fonts/Roboto-Regular.ba3dcd89.woff",
    "revision": "ba3dcd8903e3d0af5de7792777f8ae0d"
  },
  {
    "url": "assets/fonts/Roboto-Regular.df7b648c.ttf",
    "revision": "df7b648ce5356ea1ebce435b3459fd60"
  },
  {
    "url": "assets/fonts/Roboto-Thin.7500519d.woff",
    "revision": "7500519de3d82e33d1587f8042e2afcb"
  },
  {
    "url": "assets/fonts/Roboto-Thin.94998475.ttf",
    "revision": "94998475f6aea65f558494802416c1cf"
  },
  {
    "url": "assets/fonts/Roboto-Thin.954bbdeb.woff2",
    "revision": "954bbdeb86483e4ffea00c4591530ece"
  },
  {
    "url": "assets/img/2018121601.f202e799.png",
    "revision": "f202e79963addfa1426fec5c8628bb7b"
  },
  {
    "url": "assets/img/2018121602.5389d736.png",
    "revision": "5389d736b6619387ed035acaf06c677f"
  },
  {
    "url": "assets/img/2018121603.52acd18a.png",
    "revision": "52acd18ada2d834ee872ebc9d156ffda"
  },
  {
    "url": "assets/img/2018121604.862e1c7a.png",
    "revision": "862e1c7a5e115af40fd30671187f10cf"
  },
  {
    "url": "assets/img/2018121605.1ef658c8.png",
    "revision": "1ef658c861a9454021a65edfac8bca0a"
  },
  {
    "url": "assets/img/2018121606.ae603e26.png",
    "revision": "ae603e2638863f56d8e1ac5e0c53703b"
  },
  {
    "url": "assets/img/2018121607.94951b67.png",
    "revision": "94951b67844d7965ae01affd47e36439"
  },
  {
    "url": "assets/img/2018121608.b6337d66.png",
    "revision": "b6337d66ca0c1e940e266748c2bb438e"
  },
  {
    "url": "assets/img/brand.734f817b.jpg",
    "revision": "734f817bbb181d0180d7b37749769cc0"
  },
  {
    "url": "assets/img/fa-brands-400.8e04d338.svg",
    "revision": "8e04d338e5f3a734136e5fa058f60d0b"
  },
  {
    "url": "assets/img/fa-regular-400.47d19eca.svg",
    "revision": "47d19eca4372c3489b27f39f512e3a07"
  },
  {
    "url": "assets/img/fa-solid-900.e98a92ac.svg",
    "revision": "e98a92ac980c63c46a7e25c4fbcf30ef"
  },
  {
    "url": "assets/js/1.f21a3601.js",
    "revision": "124d6ef6f6c0f4663448e5e079ffebdb"
  },
  {
    "url": "assets/js/10.70867b15.js",
    "revision": "99bac712e072288bfa0b5acabee91805"
  },
  {
    "url": "assets/js/11.6fea629c.js",
    "revision": "bd34a1da982a68bc96fc8b13950c99f1"
  },
  {
    "url": "assets/js/12.11a0890d.js",
    "revision": "f3ac69bc75b70d4e3048fff5d0c71d0d"
  },
  {
    "url": "assets/js/13.6e8d24d5.js",
    "revision": "10d5a173ed5e7d0141ffc62ba4becd5b"
  },
  {
    "url": "assets/js/14.9e6237ba.js",
    "revision": "1cbfc2e042b4e7bd72a6bd681c62253a"
  },
  {
    "url": "assets/js/15.b4de77dd.js",
    "revision": "c7f28bfe219a81bf8f3ee09a4e73f6c2"
  },
  {
    "url": "assets/js/16.9c90e1cd.js",
    "revision": "3015de19a545a4a6a488a09fdfe3d7d3"
  },
  {
    "url": "assets/js/17.c412f709.js",
    "revision": "8fe0e852cc112829145a41694aff0654"
  },
  {
    "url": "assets/js/18.42157d99.js",
    "revision": "21b8990de5ad0de340531ab1afd37f5a"
  },
  {
    "url": "assets/js/2.2a6d82ad.js",
    "revision": "a1f9961d9b43822e4748f6cf7300469e"
  },
  {
    "url": "assets/js/3.6c4830ce.js",
    "revision": "ffde6cb659fe7f3d7d332b46dbdbca30"
  },
  {
    "url": "assets/js/4.a98c06b1.js",
    "revision": "93f81ce78d17982991934497b692869c"
  },
  {
    "url": "assets/js/5.7f52ba26.js",
    "revision": "0ec89e788c5667eb30b86b2e72420375"
  },
  {
    "url": "assets/js/6.01dbd739.js",
    "revision": "d74bedfb3c8f062ba2f379eb69479f5e"
  },
  {
    "url": "assets/js/7.0758e26b.js",
    "revision": "ea9b0b6e7abd461de341e75980e7a153"
  },
  {
    "url": "assets/js/8.e56bf32d.js",
    "revision": "fc00f0d50559a8dc99eba0ee1817b26f"
  },
  {
    "url": "assets/js/9.398f3f80.js",
    "revision": "47fba3d4f9e65df0b8651d9ec525e7d7"
  },
  {
    "url": "assets/js/app.c9bafd68.js",
    "revision": "88d40ad015ab5b8a412456bb4235b21b"
  },
  {
    "url": "blog/Angular/index.html",
    "revision": "d001372a00996292c6c8a32973d663e3"
  },
  {
    "url": "blog/Css/index.html",
    "revision": "d001372a00996292c6c8a32973d663e3"
  },
  {
    "url": "blog/Game/index.html",
    "revision": "66c4bc6fda77a7e5b8d61b544a122d56"
  },
  {
    "url": "blog/Html/index.html",
    "revision": "d001372a00996292c6c8a32973d663e3"
  },
  {
    "url": "blog/index.html",
    "revision": "dc3d3eda7e34a2ce3160c59a280bae9a"
  },
  {
    "url": "blog/Mobile/index.html",
    "revision": "d001372a00996292c6c8a32973d663e3"
  },
  {
    "url": "blog/Node/index.html",
    "revision": "f4596ef28c018c674c0b9a6342c194c7"
  },
  {
    "url": "blog/Performance/index.html",
    "revision": "0a46e6868921c366448182cb289e75e0"
  },
  {
    "url": "blog/React/index.html",
    "revision": "d001372a00996292c6c8a32973d663e3"
  },
  {
    "url": "blog/Security/index.html",
    "revision": "d001372a00996292c6c8a32973d663e3"
  },
  {
    "url": "blog/Vu/index.html",
    "revision": "d001372a00996292c6c8a32973d663e3"
  },
  {
    "url": "face.jpg",
    "revision": "31e39750b174cd4ce0150dc073db73df"
  },
  {
    "url": "icons/192.png",
    "revision": "68bb209813d9962fe145b690d1838fc8"
  },
  {
    "url": "icons/512.png",
    "revision": "3987835f3e7dfed8d78e559e34c49596"
  },
  {
    "url": "icons/favicon.png",
    "revision": "cfa97d05be7622e0f57799d7149b93f0"
  },
  {
    "url": "index.html",
    "revision": "2cea5bafac62f8c96d1c441984b303b8"
  },
  {
    "url": "join/index.html",
    "revision": "2a7029d66517bdd69dac98891422d935"
  },
  {
    "url": "posts/es6-extends-static.html",
    "revision": "0ad1cc677215e51d061473bf161eddb0"
  },
  {
    "url": "posts/text-test.html",
    "revision": "5c9e285b1e718d1cd5f13025b7112a9f"
  },
  {
    "url": "posts/v8-garbage-collector.html",
    "revision": "7ca3762717073d85e2419e3ac8325909"
  },
  {
    "url": "posts/webpack-Introduction.html",
    "revision": "f4aa2579f168a959696da480c0a876bb"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
