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
    "revision": "de2b95a174607fac169dc85c07c36b50"
  },
  {
    "url": "about/index.html",
    "revision": "58031cd640b594f7a9dd768ab0c6158d"
  },
  {
    "url": "assets/css/styles.7fc83c7e.css",
    "revision": "ebd97ce75170eeca2544ad4841aa39b5"
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
    "url": "assets/js/1.2903f17c.js",
    "revision": "2a2536b843adf1d977d2623cdb0dca57"
  },
  {
    "url": "assets/js/2.0a3c9331.js",
    "revision": "ea736e97dcea629ca312deab04d06965"
  },
  {
    "url": "assets/js/3.20924c23.js",
    "revision": "a21cb0d5e1d35281383843b46f9de64c"
  },
  {
    "url": "assets/js/4.05f56e83.js",
    "revision": "dc2c7913cfb3b3d2fe5bb7977422ce83"
  },
  {
    "url": "assets/js/5.1b67d333.js",
    "revision": "1821be5f7defa6b35822e2efe7d222c9"
  },
  {
    "url": "assets/js/6.68581e47.js",
    "revision": "f372a0009742bc880b394c07ffc2581c"
  },
  {
    "url": "assets/js/7.aba19f7e.js",
    "revision": "3c408fc4cb6b98f233d567ac035663c4"
  },
  {
    "url": "assets/js/app.7fc83c7e.js",
    "revision": "eb1a1b292de53519ba6fa224d93bd2e5"
  },
  {
    "url": "blog/index.html",
    "revision": "1397e40c4728f4ea93c7cf32db7fcb08"
  },
  {
    "url": "blog/Node/index.html",
    "revision": "7afbd05031eb2ee965277ab129c5659d"
  },
  {
    "url": "face.jpg",
    "revision": "55c9d89de66c7f697ead1b3ac10b008e"
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
    "revision": "81a00d2caeefc6e07770f029626840f6"
  },
  {
    "url": "join/index.html",
    "revision": "27935836befcb9895b309b76a5564a36"
  },
  {
    "url": "posts/node.html",
    "revision": "40ac19256ecdf459463d931f239ad934"
  },
  {
    "url": "posts/text-test.html",
    "revision": "71853ccb528929b62c5ebf762593b00a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
