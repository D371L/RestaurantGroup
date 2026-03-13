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

      // Measure full content height and store in CSS variable
      var fullHeight = inner.scrollHeight;
      if (fullHeight && fullHeight > 0) {
        wrap.style.setProperty('--venue-description-height', fullHeight + 'px');
      }

      var fullText = desc.textContent || '';
      var parts = fullText.split(/\n\s*\n/);
      var hasMultiple = parts.length > 1;
      var needsButton = hasMultiple || fullText.length > minLength;

      btn.removeAttribute('hidden');
      btn.setAttribute('aria-expanded', 'false');

      if (needsButton) {
        wrap.classList.add('is-collapsed');
        btn.textContent = getLabel('readMore');
        btn.onclick = function () {
          var collapsed = wrap.classList.contains('is-collapsed');
          wrap.classList.toggle('is-collapsed', !collapsed);
          btn.textContent = collapsed ? getLabel('readLess') : getLabel('readMore');
          btn.setAttribute('aria-expanded', collapsed ? 'true' : 'false');
        };
      } else {
        btn.setAttribute('hidden', '');
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupVenueReadMore);
  } else {
    setupVenueReadMore();
  }

  window.setupVenueReadMore = setupVenueReadMore;
})();
