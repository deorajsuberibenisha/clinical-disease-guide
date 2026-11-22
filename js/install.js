/* "Install app" button: shown only where the guide can be installed.
   Android / desktop Chrome and Edge: uses the browser's own install prompt.
   iPhone / iPad Safari: explains Share → Add to Home Screen (Apple allows no prompt). */
(function () {
  const btn = document.getElementById("installBtn"), tip = document.getElementById("iosTip");
  if (!btn) return;
  const standalone = matchMedia("(display-mode: standalone)").matches || navigator.standalone === true;
  if (standalone || !/^https?:/.test(location.protocol)) return;
  const ua = navigator.userAgent;
  const ios = /iPhone|iPad|iPod/.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  let deferred = null;
  addEventListener("beforeinstallprompt", e => { e.preventDefault(); deferred = e; btn.hidden = false; });
  addEventListener("appinstalled", () => { btn.hidden = true; deferred = null; });
  if (ios) btn.hidden = false;
  btn.addEventListener("click", async () => {
    if (deferred) { deferred.prompt(); await deferred.userChoice; deferred = null; btn.hidden = true; return; }
    if (ios && tip) tip.hidden = !tip.hidden;
  });
  tip?.addEventListener("click", e => { if (e.target.closest("[data-close]") || e.target === tip) tip.hidden = true; });
})();
