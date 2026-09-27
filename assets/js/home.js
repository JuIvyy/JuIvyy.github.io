/* Homepage interactions: scroll progress, active nav section, scroll reveal,
   publication filter and back-to-top. Plain JS, loaded without the npm build. */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    var root = document.documentElement;
    var masthead = document.querySelector(".masthead");

    // Header links that point at a section on this page, e.g. "/#news"
    var sectionLinks = Array.prototype.slice
      .call(document.querySelectorAll(".greedy-nav a[href*='#']"))
      .map(function (link) {
        var section = document.getElementById(link.getAttribute("href").split("#")[1]);
        return section ? { link: link, section: section } : null;
      })
      .filter(Boolean);

    var backToTop = document.createElement("button");
    backToTop.className = "back-to-top";
    backToTop.type = "button";
    backToTop.setAttribute("aria-label", "Back to top");
    backToTop.innerHTML = '<i class="fas fa-arrow-up" aria-hidden="true"></i>';
    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    document.body.appendChild(backToTop);

    function onScroll() {
      var scrollable = root.scrollHeight - window.innerHeight;
      var y = window.scrollY;
      root.style.setProperty("--scroll-progress", scrollable > 0 ? Math.min(y / scrollable, 1) : 0);
      if (masthead) masthead.classList.toggle("is-scrolled", y > 8);
      backToTop.classList.toggle("is-shown", y > 500);

      if (sectionLinks.length) {
        var active = null;
        sectionLinks.forEach(function (item) {
          if (item.section.getBoundingClientRect().top <= 110) active = item;
        });
        // At the very bottom the last section may never reach the top offset
        if (y >= scrollable - 2) active = sectionLinks[sectionLinks.length - 1];
        sectionLinks.forEach(function (item) {
          item.link.classList.toggle("is-active", item === active);
        });
      }
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    // Fade elements in as they scroll into view; siblings in a group are staggered
    var revealTargets = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
      revealTargets.forEach(function (el) {
        var group = el.parentElement.querySelectorAll(":scope > .reveal");
        var index = Array.prototype.indexOf.call(group, el);
        if (group.length > 1) el.style.setProperty("--reveal-delay", Math.min(index, 6) * 0.07 + "s");
        observer.observe(el);
      });
    } else {
      revealTargets.forEach(function (el) { el.classList.add("is-visible"); });
    }

    // Publication filter: buttons carry data-filter, cards carry data-topics
    var filterButtons = document.querySelectorAll(".pub-filter__btn");
    var cards = document.querySelectorAll(".pub-card");
    filterButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        var filter = button.getAttribute("data-filter");
        filterButtons.forEach(function (b) {
          b.classList.toggle("is-active", b === button);
          b.setAttribute("aria-pressed", b === button ? "true" : "false");
        });
        cards.forEach(function (card) {
          var topics = (card.getAttribute("data-topics") || "").split(" ");
          var show = filter === "all" || topics.indexOf(filter) !== -1;
          card.classList.toggle("is-hidden", !show);
          card.classList.remove("is-entering");
          if (show) {
            card.classList.add("is-visible");
            void card.offsetWidth; // restart the entry animation
            card.classList.add("is-entering");
          }
        });
        // On the full list, hide year headings that have no matching papers
        document.querySelectorAll(".pub-year-group").forEach(function (group) {
          group.classList.toggle("is-hidden", !group.querySelector(".pub-card:not(.is-hidden)"));
        });
      });
    });
  });
})();
