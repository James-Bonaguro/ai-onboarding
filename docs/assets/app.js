/* =========================================================================
   The AI Operating System — behavior. Classic script (file:// safe), no deps.
   Progressive enhancement: the site is fully readable if this never runs.
   ========================================================================= */
(function () {
  "use strict";

  var root = document.documentElement;

  /* ---------- Theme ---------- */
  // (A tiny bootstrap in each page <head> sets the initial theme to avoid flash.)
  function setTheme(mode) {
    root.setAttribute("data-theme", mode);
    try { localStorage.setItem("aios-theme", mode); } catch (e) {}
  }
  function currentTheme() {
    return root.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }
  document.addEventListener("click", function (e) {
    var t = e.target.closest(".theme-toggle");
    if (!t) return;
    setTheme(currentTheme() === "dark" ? "light" : "dark");
  });

  /* ---------- Mobile nav ---------- */
  document.addEventListener("click", function (e) {
    var burger = e.target.closest(".nav-burger");
    var links = document.getElementById("nav-links");
    if (burger && links) { links.classList.toggle("open"); return; }
    // close when clicking a link inside the open menu
    if (links && links.classList.contains("open") && e.target.closest("#nav-links a")) {
      links.classList.remove("open");
    }
  });

  /* ---------- Reading progress ---------- */
  var bar = document.querySelector(".progressbar");
  if (bar) {
    var onScroll = function () {
      var h = document.documentElement;
      var scrolled = h.scrollTop;
      var height = h.scrollHeight - h.clientHeight;
      var pct = height > 0 ? (scrolled / height) * 100 : 0;
      bar.style.width = pct + "%";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
  }

  /* ---------- Active nav link (by filename) ---------- */
  (function () {
    var path = location.pathname.split("/").pop() || "index.html";
    var links = document.querySelectorAll("#nav-links a");
    links.forEach(function (a) {
      var href = (a.getAttribute("href") || "").split("#")[0].split("/").pop();
      if (href === path || (path === "" && href === "index.html")) a.classList.add("active");
    });
  })();

  /* ---------- Copy to clipboard (delegated) ---------- */
  function showToast(msg) {
    var el = document.getElementById("toast");
    if (!el) {
      el = document.createElement("div");
      el.id = "toast"; el.className = "toast";
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(el._t);
    el._t = setTimeout(function () { el.classList.remove("show"); }, 1600);
  }

  function legacyCopy(text) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.top = "-1000px";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    var ok = false;
    try { ok = document.execCommand("copy"); } catch (e) { ok = false; }
    document.body.removeChild(ta);
    return ok;
  }

  function copyText(text) {
    return new Promise(function (resolve) {
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(
          function () { resolve(true); },
          function () { resolve(legacyCopy(text)); }
        );
      } else {
        resolve(legacyCopy(text));
      }
    });
  }

  document.addEventListener("click", function (e) {
    var btn = e.target.closest(".copy-btn");
    if (!btn) return;
    var text = "";
    var sel = btn.getAttribute("data-copy-target");
    if (sel) {
      var src = document.querySelector(sel);
      if (src) text = src.innerText;
    } else if (btn.hasAttribute("data-copy")) {
      text = btn.getAttribute("data-copy");
    } else {
      // nearest prompt-card body
      var card = btn.closest(".prompt-card, .copy-wrap");
      var body = card && card.querySelector(".prompt-body, .copy-source");
      if (body) text = body.innerText;
    }
    text = (text || "").replace(/ /g, " ").trim();
    copyText(text).then(function (ok) {
      if (ok) {
        btn.classList.add("copied");
        var label = btn.querySelector(".copy-label");
        var prev = label ? label.textContent : null;
        if (label) label.textContent = "Copied";
        showToast("Copied to clipboard");
        setTimeout(function () {
          btn.classList.remove("copied");
          if (label && prev !== null) label.textContent = prev;
        }, 1800);
      } else {
        showToast("Press ⌘/Ctrl + C to copy");
      }
    });
  });

  /* ---------- Tabs ---------- */
  document.querySelectorAll("[data-tabs]").forEach(function (group) {
    var btns = group.querySelectorAll(".tab-btn");
    var key = group.getAttribute("data-tabs");
    function activate(id, save) {
      btns.forEach(function (b) {
        var on = b.getAttribute("data-tab") === id;
        b.setAttribute("aria-selected", on ? "true" : "false");
        b.tabIndex = on ? 0 : -1;
      });
      group.querySelectorAll(".tab-panel").forEach(function (p) {
        p.hidden = p.getAttribute("data-panel") !== id;
      });
      if (save && key) { try { localStorage.setItem("aios-tab-" + key, id); } catch (e) {} }
    }
    btns.forEach(function (b) {
      b.addEventListener("click", function () { activate(b.getAttribute("data-tab"), true); });
      b.addEventListener("keydown", function (e) {
        var arr = Array.prototype.slice.call(btns);
        var i = arr.indexOf(b);
        if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
          e.preventDefault();
          var n = e.key === "ArrowRight" ? (i + 1) % arr.length : (i - 1 + arr.length) % arr.length;
          arr[n].focus(); arr[n].click();
        }
      });
    });
    var saved = null;
    try { saved = key ? localStorage.getItem("aios-tab-" + key) : null; } catch (e) {}
    var initial = saved && group.querySelector('.tab-btn[data-tab="' + saved + '"]')
      ? saved
      : (btns[0] && btns[0].getAttribute("data-tab"));
    if (initial) activate(initial, false);
  });

  /* ---------- Drill progress (localStorage) ---------- */
  (function () {
    var checks = document.querySelectorAll(".drill-check");
    if (!checks.length) return;
    var STORE = "aios-drills";
    var state = {};
    try { state = JSON.parse(localStorage.getItem(STORE) || "{}"); } catch (e) { state = {}; }

    var fill = document.getElementById("drill-fill");
    var countEl = document.getElementById("drill-count");
    var total = checks.length;

    function refresh() {
      var done = 0;
      checks.forEach(function (c) {
        var id = c.getAttribute("data-drill");
        var on = !!state[id];
        c.checked = on;
        c.closest(".drill").classList.toggle("done", on);
        if (on) done++;
      });
      if (fill) fill.style.width = (total ? (done / total) * 100 : 0) + "%";
      if (countEl) countEl.textContent = done + " of " + total + " done";
    }

    checks.forEach(function (c) {
      c.addEventListener("change", function () {
        var id = c.getAttribute("data-drill");
        if (c.checked) state[id] = 1; else delete state[id];
        try { localStorage.setItem(STORE, JSON.stringify(state)); } catch (e) {}
        refresh();
      });
    });

    var reset = document.getElementById("drill-reset");
    if (reset) reset.addEventListener("click", function () {
      state = {};
      try { localStorage.removeItem(STORE); } catch (e) {}
      refresh();
    });

    refresh();
  })();

  /* ---------- Prompt library filter ---------- */
  (function () {
    var chips = document.querySelectorAll(".chip[data-filter]");
    if (!chips.length) return;
    var cards = document.querySelectorAll(".prompt-card[data-cat]");
    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        chips.forEach(function (c) { c.classList.remove("active"); });
        chip.classList.add("active");
        var f = chip.getAttribute("data-filter");
        document.querySelectorAll("[data-cat-group]").forEach(function (g) {
          var show = (f === "all" || g.getAttribute("data-cat-group") === f);
          g.classList.toggle("hidden", !show);
        });
        cards.forEach(function (card) {
          var show = (f === "all" || card.getAttribute("data-cat") === f);
          card.classList.toggle("hidden", !show);
        });
      });
    });
  })();

})();
