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

### Localized URLs (`/he/`, `/en/contact`, …)

Production URLs use a language prefix: **`/{he|ru|en|ar}/`**, **`/{lang}/contact`**, **`/{lang}/join`**. The same HTML files (`index.html`, `contact.html`, `join.html`) are served via rewrites:

- **Apache:** [`.htaccess`](.htaccess) (needs `AllowOverride All`)
- **Netlify:** [`netlify.toml`](netlify.toml) — use `npx netlify-cli dev` locally to test rewrites

Plain `python -m http.server` **does not** apply those rules, so paths like `/he/` may 404 locally. Use `netlify dev` or open `index.html` directly (language switcher then only updates text when navigation to another locale path is not available).

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
