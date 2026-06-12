# HTML Starter Page

A lightweight, self-contained HTML starter project that showcases common web page elements, responsive layout, multiple colour themes, and basic GDPR-style privacy tooling. No build step, framework, or package manager is required — open the files directly in a browser.

## About

This project began as a simple Hello World page and grew into a practical reference for:

- Semantic HTML structure (`header`, `nav`, `main`, `section`, `footer`)
- Common HTML elements (typography, lists, tables, forms, media, and more)
- Side-by-side **preview + source code** panels for each element section
- A custom light-themed design with responsive breakpoints
- A theme system with five selectable colour palettes
- A privacy policy page and cookie consent modal

It is intended as a starting point for static pages, demos, or learning how HTML, CSS, and a small amount of JavaScript work together.

## Features

- **Hello World landing page** with sticky navigation and section anchors
- **Element showcase** — live previews with matching HTML snippets
- **External stylesheet** — all styling in `styles.css` using CSS custom properties
- **Five themes** — Light, Dark, Matrix, Spring, and Lava (saved in `localStorage`)
- **Responsive design** — layout adapts from large desktops down to small phones
- **Privacy page** — GDPR-oriented privacy policy template at `privacy.html`
- **Cookie consent modal** — granular accept / reject / save preferences, shown on each visit

## Project Structure

```
Hello GD git/
├── index.html      # Main showcase page
├── privacy.html    # Privacy policy page
├── styles.css      # All page and component styles
├── theme.js        # Theme dropdown logic and persistence
├── cookies.js      # Cookie consent modal behaviour
└── README.MD       # Project documentation
```

## Getting Started

1. Clone or download this repository.
2. Open `index.html` in any modern web browser.
3. No installation or build commands are needed.

```bash
git clone https://github.com/vnistor-godaddy/hello-world-page.git
```

Then open `index.html` locally, or serve the folder with any static file server if you prefer.

## Pages

| Page | Description |
|------|-------------|
| `index.html` | Main Hello World page with HTML element demonstrations |
| `privacy.html` | Privacy policy including cookie categories and GDPR rights |

Navigation links and the footer connect both pages.

## Themes

Use the **Theme** dropdown in the top navigation to switch palettes:

| Theme | Style |
|-------|-------|
| Light | Default soft gray and white layout with blue accents |
| Dark | Dark navy surfaces with light text |
| Matrix | Black-green terminal-inspired palette |
| Spring | Deeper sky blue backgrounds with yellow accents |
| Lava | Dark volcanic backgrounds with bright red accents |

The selected theme is stored in the browser via `localStorage` and restored on the next visit.

## Cookie Consent

On each page load, a cookie preferences modal appears with:

- **Strictly Necessary** — always enabled
- **Analytics** — optional
- **Marketing** — optional

Users can **Accept All**, **Reject All**, or **Save Preferences**. The modal is shown on every visit by design (no persistent dismissal). See `privacy.html#cookies` for the cookie policy section.

## Technologies

- HTML5
- CSS3 (custom properties, Grid, Flexbox, media queries)
- Vanilla JavaScript (theme switching and cookie modal only)

## Browser Support

Works in modern browsers that support CSS custom properties, Flexbox, and Grid (Chrome, Firefox, Safari, Edge).

## License

This project is provided as a starter template. Update the content, contact details, and legal text before using it in production.
