if(!self.define){let e,i={};const a=(a,s)=>(a=new URL(a+".js",s).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(s,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const t=e=>a(e,r),n={module:{uri:r},exports:o,require:t};i[r]=Promise.all(s.map((e=>n[e]||t(e)))).then((e=>(c(...e),o)))}}define(["./workbox-8b3b1e09"],(function(e){"use strict";e.enable(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"css/bul.min.css",revision:"3a0d9d54ae77c762faecaea0f3dcadb1"},{url:"css/main.css",revision:"88f920ccd2af7615559bf6c245a46f53"},{url:"images/blog/ai-chatbot.webp",revision:"ce3bf599f60398860f57178d3d39ea6d"},{url:"images/blog/ai-doctor.webp",revision:"6a5d0366d39ca880200d5e7615f1014b"},{url:"images/blog/ai-harful-content-alert-smartphone.webp",revision:"6aab69dbd390e5a87f74a1a30c83e424"},{url:"images/blog/ai-marketing.webp",revision:"aeede63a6e861d7ad69b0a71afbf10c8"},{url:"images/blog/ai-metaverse.webp",revision:"9ef79fe833602785a725d4173f8c5737"},{url:"images/blog/ai-translator.webp",revision:"3732a6635161f5f909462b2ec41e7bc9"},{url:"images/blog/chagpt-ai-data-limits.webp",revision:"c5e16df002711fcbc096fc6bd4b48665"},{url:"images/blog/freelance-writer-setup.webp",revision:"c9c1c7ff2981e144ade58d6eb2884522"},{url:"images/blog/hexagon-ai-digital-assistant.webp",revision:"b619057cb34cfdd9e8ed7c22e5c11ca0"},{url:"images/data-lines.webp",revision:"13682157b83b897a260863ade312d9ce"},{url:"images/digital-ccokie.webp",revision:"4a3d83060650b2996cc68d7facb1cd4a"},{url:"images/pascobyte-cute-gaming-bot.webp",revision:"02335950d0090a4ba5940752b858355d"},{url:"images/pascobyte-tech-christmas.webp",revision:"9ad60da851818897ef6c2580fd6fe65b"},{url:"images/tos-illustration.webp",revision:"d115fe4dc7c7d17579f3b67474ed39bc"},{url:"js/main.js",revision:"ba6e94a4f769be34ec7ca769a03761b0"},{url:"js/single.js",revision:"fe45220527c4f00ea3f77ddcd0bebbec"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.registerRoute(/^https?.*/,new e.NetworkFirst({cacheName:"workbox-runtime-cache",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:100,maxAgeSeconds:604800}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
//# sourceMappingURL=sw.js.map
