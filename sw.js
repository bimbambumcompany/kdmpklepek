/* Service worker KDKMP Klepek. Versi otomatis: b7c20e51 */
var V='kdkmp-b7c20e51',CORE=["./", "index.html", "manifest.webmanifest", "assets/apple-touch-icon.png", "assets/favicon-32.png", "assets/icon-192.png", "assets/icon-512.png", "assets/icon-maskable-512.png", "assets/img-058a66f0.webp", "assets/img-0c8bdb23.webp", "assets/img-33ba8f97.webp", "assets/img-3b99147b.webp", "assets/img-4f583bef.webp", "assets/img-550a9cdb.webp", "assets/img-58f83024.webp", "assets/img-658a84dd.webp", "assets/img-671575b4.webp", "assets/img-7b45a3a0.webp", "assets/img-8842bb74.webp", "assets/img-9a2d0ec9.webp", "assets/img-9f4fa7f1.webp", "assets/img-b186490c.webp", "assets/img-b6018ea9.webp", "assets/img-c312118b.webp", "assets/img-ca052ad7.webp", "assets/img-d0645cd8.webp", "assets/img-f18e3ef5.svg", "assets/img-f3b00c3e.webp", "assets/img-ff578018.webp", "assets/img-ffe5b620.webp"];
self.addEventListener('install',function(e){e.waitUntil(caches.open(V).then(function(c){return c.addAll(CORE)}).then(function(){return self.skipWaiting()}))});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(n){return n.indexOf('kdkmp-')===0&&n!==V&&n!=='kdkmp-fonts'}).map(function(n){return caches.delete(n)}))}).then(function(){return self.clients.claim()}))});
function timeout(p,ms){return new Promise(function(ok,no){var t=setTimeout(no,ms);p.then(function(r){clearTimeout(t);ok(r)},function(e){clearTimeout(t);no(e)})})}
self.addEventListener('fetch',function(e){
 var r=e.request;if(r.method!=='GET')return;var u=new URL(r.url);
 if(u.hostname==='docs.google.com'||u.hostname==='script.google.com'||u.hostname.endsWith('googleusercontent.com'))return; /* data pengurus: selalu dari jaringan */
 if(r.mode==='navigate'){
  e.respondWith(timeout(fetch(r),4000).then(function(res){var cp=res.clone();caches.open(V).then(function(c){c.put('index.html',cp)});return res}).catch(function(){return caches.match('index.html').then(function(m){return m||caches.match('./')})}));return}
 if(u.origin===location.origin){
  e.respondWith(caches.match(r).then(function(m){return m||fetch(r).then(function(res){if(res.ok){var cp=res.clone();caches.open(V).then(function(c){c.put(r,cp)})}return res})}));return}
 if(u.hostname==='fonts.googleapis.com'||u.hostname==='fonts.gstatic.com'){
  e.respondWith(caches.open('kdkmp-fonts').then(function(c){return c.match(r).then(function(m){var n=fetch(r).then(function(res){c.put(r,res.clone());return res}).catch(function(){return m});return m||n})}))}
});
