"use strict";var precacheConfig=[["/juancarlucci/rooster/index.html","eefd96531c9c2ad8aaf1dae78571116e"],["/juancarlucci/rooster/static/css/main.41eececd.css","6b25213220c95ccb3a2d6e5bce4a8bf5"],["/juancarlucci/rooster/static/js/main.6172478e.js","f76dedeebe038eb3c50ecde0d8e6bda0"],["/juancarlucci/rooster/static/media/App.240499a6.sass","240499a6be98f7300027dee6dbb40e15"],["/juancarlucci/rooster/static/media/Hero.73a383c4.sass","73a383c4b2677a973eeb63ae0ac07309"],["/juancarlucci/rooster/static/media/Modal.0e1d614d.sass","0e1d614d2ea6a714b3229bcd300bfd88"],["/juancarlucci/rooster/static/media/Nav.6b326277.sass","6b3262773757779968e3b898b687db90"],["/juancarlucci/rooster/static/media/Section1.0519eaa0.sass","0519eaa098944686558bf2c4002de17d"],["/juancarlucci/rooster/static/media/Section2.c87b5d13.sass","c87b5d13c2f488882ef70543fac1f97e"],["/juancarlucci/rooster/static/media/Section3.883b9167.sass","883b91677cc25ba1193f9cfd630a317a"],["/juancarlucci/rooster/static/media/index.32269135.sass","32269135853332127db79d8870c4d69d"],["/juancarlucci/rooster/static/media/style.87259bc2.sass","87259bc2862635759d9b5aacec57afe3"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),n=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),e=urlsToCacheKeys.has(a));var n="/juancarlucci/rooster/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});