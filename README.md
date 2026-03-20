# EXIT GROUP — Culinary group landing

Static landing site for **EXIT GROUP** (Haifa, Israel): **Domo**, **ASI ATI**, **Smash Burger**, and **Arto**.  
Production: **[exitgroup.co.il](https://exitgroup.co.il)** (GitHub Pages).

## Features

- Dark premium UI, hero video, venue cards, galleries, responsive layout.
- **Four languages:** Hebrew, Russian, English, Arabic (`js/i18n.js`), header switcher, RTL for HE/AR.
- **Localized URLs** for SEO: `/{he|ru|en|ar}/`, `/{lang}/contact/`, `/{lang}/join/`.
- **SEO:** meta description, canonical, Open Graph, Twitter Card, JSON-LD (Organization + restaurant list), `robots.txt`, `sitemap.xml`, dynamic `hreflang` via JavaScript.
- Root-absolute asset paths (`/css/…`, `/js/…`) so nested locale paths resolve correctly.

## Stack

HTML5, CSS3, vanilla JavaScript (no build step or framework).

## Running locally

```bash
# from repository root
python3 -m http.server 8000
# or
npx serve .
```

Open the site with a locale prefix, e.g. **http://localhost:8000/he/**  
(The site root `/` serves the same `index.html`; using `/he/`, `/en/`, etc. is easier when testing language switching.)

### Syncing per-locale copies (required for GitHub Pages)

**GitHub Pages does not use `.htaccess`.** URLs like `/ru/contact/` need real files in the repo:

| Repository path              | Public URL        |
|-----------------------------|-------------------|
| `he/index.html`             | `/he/`            |
| `he/contact/index.html`     | `/he/contact/`    |
| `he/join/index.html`        | `/he/join/`       |
| Same pattern for `ru/`, `en/`, `ar/` | |

After editing the **root** `index.html`, `contact.html`, or `join.html`, run:

```bash
./scripts/sync-lang-pages.sh
```

Then commit changes under `he/`, `ru/`, `en/`, and `ar/`.

### Other hosting

- **Apache** — optional [`.htaccess`](.htaccess) (single file set in the document root + rewrite rules).
- **Netlify** — [`netlify.toml`](netlify.toml); local testing: `npx netlify-cli dev`.

## Project layout

| Path | Purpose |
|------|---------|
| `index.html`, `contact.html`, `join.html` | Source pages (edit these first). |
| `he/`, `ru/`, `en/`, `ar/` | Duplicates for static hosts without rewrites (see script above). |
| `css/style.css` | Main styles, layout, animations, responsive rules. |
| `css/rtl.css` | RTL tweaks for Hebrew and Arabic. |
| `css/fonts/` | Local Secular One font files (referenced from CSS). |
| `js/i18n.js` | Translation dictionaries, language from URL, SEO meta, `hreflang`, cross-locale navigation. |
| `js/main.js` | Smooth anchor scrolling, venue “read more”, other UI behavior. |
| `robots.txt`, `sitemap.xml` | Crawlers (canonical domain `exitgroup.co.il`). |
| `og_image_for_messengers.png` | Open Graph / Telegram / Twitter preview (dark background + wordmarks). Used by `og:image` and `twitter:image` in HTML and `js/i18n.js` (`OG_SHARE_IMAGE_PATH`). Separate from `logo.png` (hero + JSON-LD `Organization.logo`). Telegram caches previews — after changing this file, try sharing a URL with a new query (e.g. `?v=2`). |
| `scripts/sync-lang-pages.sh` | Copies the three HTML files into each `he|ru|en|ar/` tree. |
| `Domo/`, `ASI ATI/`, `Smash Burger/`, `Arto/`, `img/` | Venue logos and media (paths configured in `i18n.js`). |
| `logo.png`, `hero_background.mp4`, `join_background.mp4` | Shared hero and inner-page assets. |

## Content and translations

Copy and image paths live in **`js/i18n.js`** under `he`, `ru`, `en`, `ar` (`venues`, `nav`, `contact`, `meta`, etc.).  
Image fallbacks: `PLACEHOLDER_IMG` and `PLACEHOLDER_LOGO` in the same file.

The contact page currently shows **placeholder** phone, email, and Instagram (`*@test-exitgroup.co.il`, `@exitgroup.test`). Replace with real details in `i18n.js` before go-live, then run the sync script and commit.

## License and security

This is a public repository — **do not commit** API keys or passwords (this static site does not need them).  
The footer credits the developer (HellSec).

---

*README reflects the current setup: multilingual URLs, GitHub Pages, and SEO.*
