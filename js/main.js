(function () {
  'use strict';

  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === '#') return;
    a.addEventListener('click', function (e) {
      var id = href.slice(1);
      var target = id ? document.getElementById(id) : null;
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  function setupVenueReadMore() {
    var getLabel =
      window.i18n && window.i18n.getTranslation
        ? function (key) {
            return window.i18n.getTranslation(key) || key;
          }
        : function (key) {
            return key === 'readMore' ? 'Read more' : 'Read less';
          };
    var minLength = 120;

    document.querySelectorAll('.venue-description-wrap').forEach(function (wrap) {
      var inner = wrap.querySelector('.venue-description-inner');
      var desc = wrap.querySelector('.venue-description');
      var btn = wrap.querySelector('.venue-read-more');
      if (!inner || !desc || !btn) return;

      // Ensure full content is visible for accurate height measurement
      wrap.classList.remove('is-collapsed');
      wrap.classList.remove('is-clamped');

      // Measure full content height and store in CSS variable
      var fullHeight = inner.scrollHeight;
      if (fullHeight && fullHeight > 0) {
        wrap.style.setProperty('--venue-description-height', fullHeight + 'px');
      }

      // Store collapsed (2-line) height for smooth animation
      var cs = window.getComputedStyle(desc);
      var lineHeight = parseFloat(cs.lineHeight);
      if (!isNaN(lineHeight) && lineHeight > 0) {
        wrap.style.setProperty('--venue-description-collapsed-height', (lineHeight * 2 + 2) + 'px');
      }

      var fullText = desc.textContent || '';
      var hasMultiple = desc.querySelectorAll('.desc-p').length > 1;
      if (!hasMultiple && fullText.split(/\n\s*\n/).length > 1) {
        hasMultiple = true;
      }
      var needsButton = hasMultiple || fullText.length > minLength;

      btn.removeAttribute('hidden');
      btn.setAttribute('aria-expanded', 'false');

      if (needsButton) {
        wrap.classList.add('is-collapsed');
        wrap.classList.add('is-clamped');
        btn.textContent = getLabel('readMore');
        btn.onclick = function () {
          var collapsed = wrap.classList.contains('is-collapsed');
          if (collapsed) {
            // Expand: unclamp immediately, then animate to full height
            wrap.classList.remove('is-clamped');
            wrap.classList.remove('is-collapsed');

            // Update full height after unclamping (needed for first click)
            var expandedH = inner.scrollHeight;
            if (expandedH && expandedH > 0) {
              wrap.style.setProperty('--venue-description-height', expandedH + 'px');
            }

            btn.textContent = getLabel('readLess');
            btn.setAttribute('aria-expanded', 'true');
            return;
          }

          // Collapse: animate height first, clamp only after transition ends
          wrap.classList.remove('is-clamped');

          // Ensure we're starting from full height for a smooth collapse animation
          var fullH = inner.scrollHeight;
          if (fullH && fullH > 0) {
            wrap.style.setProperty('--venue-description-height', fullH + 'px');
          }

          // Force reflow so the browser acknowledges the starting height
          void inner.offsetHeight;

          wrap.classList.add('is-collapsed');
          btn.textContent = getLabel('readMore');
          btn.setAttribute('aria-expanded', 'false');

          var onEnd = function (e) {
            if (e && e.target !== inner) return;
            inner.removeEventListener('transitionend', onEnd);
            if (wrap.classList.contains('is-collapsed')) {
              wrap.classList.add('is-clamped');
            }
          };
          inner.addEventListener('transitionend', onEnd);
        };
      } else {
        btn.setAttribute('hidden', '');
      }
    });
  }

  function setupScrollReveal() {
    if (!window.IntersectionObserver) return;
    
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.venue-card, .group-intro').forEach(function(el) {
      observer.observe(el);
    });
  }

  function hidePageLoader() {
    var loader = document.getElementById('page-loader');
    if (!loader) return;

    setTimeout(function () {
      loader.classList.add('is-hidden');
      setTimeout(function () {
        if (loader && loader.parentNode) {
          loader.parentNode.removeChild(loader);
        }
      }, 600);
    }, 1000);
  }

  function setupVenueAddresses() {
    if (!window.i18n || !window.i18n.getVenueAddresses) return;

    document.querySelectorAll('.venue-card').forEach(function (card) {
      var index = parseInt(card.getAttribute('data-venue'), 10);
      if (isNaN(index)) return;

      var addresses = window.i18n.getVenueAddresses(index);
      var addrEl = card.querySelector('.venue-address');
      if (!addrEl || !addresses || !addresses.length) return;

      addrEl.textContent = '';

      addresses.forEach(function (addr) {
        var pill = document.createElement('span');
        pill.className = 'venue-address-pill';
        pill.textContent = addr;
        addrEl.appendChild(pill);
      });
    });
  }

  function setupHeroScrollArrow() {
    var btn = document.querySelector('.hero-scroll-down');
    if (!btn) return;

    var targetSelector = btn.getAttribute('data-target') || '#venues';
    var target = document.querySelector(targetSelector);

    if (!target) return;

    btn.addEventListener('click', function () {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  function init() {
    setupVenueReadMore();
    setupScrollReveal();
    setupVenueAddresses();
    setupHeroScrollArrow();
    hidePageLoader();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.setupVenueReadMore = setupVenueReadMore;
  window.setupVenueAddresses = setupVenueAddresses;
})();
