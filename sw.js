if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let f={};const c=e=>n(e,o),d={module:{uri:o},exports:f,require:c};i[o]=Promise.all(s.map((e=>d[e]||c(e)))).then((e=>(r(...e),f)))}}define(["./workbox-1be04862"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"apple-touch-icon-180x180.png",revision:"378328e6094ee248729b0a051c5a5c42"},{url:"assets/index-BlFrO6Zm.js",revision:null},{url:"assets/index-TZrNw7dA.css",revision:null},{url:"favicon.ico",revision:"add2680b7901fdb621c4e70d07c8eb83"},{url:"favicon.svg",revision:"61efd6eaa48659b6e31ef537ed115f33"},{url:"index.html",revision:"37487cf55c637b65fff066608ecb8ae1"},{url:"maskable-icon-512x512.png",revision:"f30b8d71cd88deb80419605441ab2300"},{url:"pwa-192x192.png",revision:"a6262de55a8589c84326fc9a3c11175b"},{url:"pwa-512x512.png",revision:"e8cefb6bff9151cb2097fa9bd6d8d92a"},{url:"pwa-64x64.png",revision:"fd1b695ae4f4fc575adeb2dfb485041a"},{url:"manifest.webmanifest",revision:"8dff7624dc1442bb61f4e668fca3e662"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
