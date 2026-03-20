# Culinary Group — Landing Page

A premium single-page website for a restaurant group, featuring a responsive dark-themed aesthetic. It includes a custom top header, a multi-language switcher (HE / RU / EN / AR), and four prominent venue cards (Domo, ASI ATI, Smash Burger, Arto) followed by a customized footer.

## Running Locally

Open `index.html` directly in your browser or serve the directory using a simple static server:

```bash
# Python 3
python3 -m http.server 8000

# Node.js
npx serve .
```

Navigate to [http://localhost:8000](http://localhost:8000).

### Localized URLs (`/he/`, `/en/contact/`, …)

Canonical URLs: **`/{lang}/`**, **`/{lang}/contact/`**, **`/{lang}/join/`** (trailing slash on inner pages matches `contact/index.html` layout).

- **GitHub Pages** has no `.htaccess` rewrites. The repo includes **duplicate copies** under [`he/`](he/), [`ru/`](ru/), [`en/`](en/), [`ar/`](ar/) so `/he/` maps to `he/index.html` and `/he/contact/` to `he/contact/index.html`. After editing root `index.html`, `contact.html`, or `join.html`, run:
  ```bash
  ./scripts/sync-lang-pages.sh
  ```
- **Apache:** [`.htaccess`](.htaccess) can serve a single set of files instead (optional).
- **Netlify:** [`netlify.toml`](netlify.toml`) — `npx netlify-cli dev` for local rewrites.

Plain `python -m http.server`: open `http://localhost:8000/he/` (folder must exist — run the sync script once).

## Project Structure

- `index.html` — The main markup, containing sections annotated with `data-i18n` and `data-i18n-attr` for dynamic translation.
- `css/style.css` — Core styling: layout grids, typography, custom scrollbars, animations, and responsive media queries.
- `css/rtl.css` — Right-To-Left (RTL) specific adjustments for Hebrew and Arabic layouts.
- `js/i18n.js` — Internationalization (he, ru, en, ar): reads language from the URL prefix when present, updates nav links, `hreflang`, canonical/OG meta, and switches locale via full navigation on HTTP(S).
- `robots.txt` / `sitemap.xml` — SEO; sitemap lists all localized URLs.
- `js/main.js` — Core interactive logic: smooth anchor scrolling and intersection observers for scroll animations.
- `logo.png` — Main group logo used in the hero section.

## Images & Media

To update the placeholder images, modify the `PLACEHOLDER_IMG` constants within `js/i18n.js`. For specific venue imagery, supply valid URLs to the `logo` and `photos` array fields defined inside the `venues` translation dictionaries. Local files should ideally be placed in an `images/` directory.
