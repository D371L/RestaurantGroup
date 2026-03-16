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

## Project Structure

- `index.html` — The main markup, containing sections annotated with `data-i18n` and `data-i18n-attr` for dynamic translation.
- `css/style.css` — Core styling: layout grids, typography, custom scrollbars, animations, and responsive media queries.
- `css/rtl.css` — Right-To-Left (RTL) specific adjustments for Hebrew and Arabic layouts.
- `js/i18n.js` — Internationalization logic and translation dictionaries (he, ru, en, ar). Handles language switching and DOM updates.
- `js/main.js` — Core interactive logic: smooth anchor scrolling and intersection observers for scroll animations.
- `logo.png` — Main group logo used in the hero section.

## Images & Media

To update the placeholder images, modify the `PLACEHOLDER_IMG` constants within `js/i18n.js`. For specific venue imagery, supply valid URLs to the `logo` and `photos` array fields defined inside the `venues` translation dictionaries. Local files should ideally be placed in an `images/` directory.
