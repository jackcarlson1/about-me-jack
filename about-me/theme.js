/* ===========================================================
   theme.js — shared across every page
   - two themes only: light / dark
   - first visit defaults to the OS preference, then it's an
     explicit saved choice
   - injects a toggle into the top <nav> on every page
   The pre-paint apply is done by a tiny inline snippet in each
   page's <head>; this file handles the toggle UI.
   =========================================================== */
(function () {
  var ICON  = { light: "☀️", dark: "🌙" };
  var LABEL = { light: "Light", dark: "Dark" };

  function osPrefersDark() { return !!(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches); }
  function get() {
    var t;
    try { t = localStorage.getItem("theme"); } catch (e) {}
    if (t !== "light" && t !== "dark") t = osPrefersDark() ? "dark" : "light";
    return t;
  }
  function set(t) { try { localStorage.setItem("theme", t); } catch (e) {} }
  function apply(t) { document.documentElement.setAttribute("data-theme", t); }

  function buildToggle() {
    var nav = document.querySelector("nav");
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "theme-toggle";

    function render() {
      var t = get();
      btn.innerHTML = '<span class="tt-ic">' + ICON[t] + '</span><span class="tt-label">' + LABEL[t] + '</span>';
      var other = t === "dark" ? "light" : "dark";
      btn.title = "Switch to " + LABEL[other] + " mode";
      btn.setAttribute("aria-label", "Theme: " + LABEL[t] + ". Tap for " + LABEL[other] + " mode.");
    }

    btn.addEventListener("click", function (e) {
      e.preventDefault();
      var next = get() === "dark" ? "light" : "dark";
      set(next);
      apply(next);
      render();
    });

    render();
    if (nav) nav.appendChild(btn);
    else { btn.style.position = "fixed"; btn.style.top = "12px"; btn.style.right = "12px"; btn.style.zIndex = 9999; document.body.appendChild(btn); }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", buildToggle);
  else buildToggle();
})();
