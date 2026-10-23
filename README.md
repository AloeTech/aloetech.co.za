# Aloe Tech — Official Website

Modern 2026 single-page website for **Aloe Tech**, a South African digital solutions company specialising in websites, custom apps, automation systems, payment trackers, and placement platforms.

---

## Quick Start

1. Download `index.html`
2. Open it in any modern browser to preview
3. Upload `index.html` to your web host (as the root/homepage file)

No build step, no dependencies, no server required — pure HTML + CSS + a tiny bit of JavaScript.

---

## What’s Included

| File | Description |
|------|-------------|
| `index.html` | Complete single-page website (all CSS & JS embedded) |
| `README.md` | This documentation file |

---

## Features

- **Modern dark design** — green/teal accent palette, glassmorphism cards, ambient gradients
- **Fully responsive** — works on mobile, tablet and desktop
- **Sticky navigation** with mobile hamburger menu
- **WhatsApp-first CTAs** — every “Order / Quote” button opens WhatsApp with a pre-filled message to **079 456 0147**
- **Services section** covering:
  - Website Design & Development (from R1 499)
  - Custom Web & Mobile Apps
  - Automation & Integrations
  - Cash Loan & Payment Trackers (incl. Luvhengo-style systems)
  - Nanny & Staff Placement Systems
  - Company Registration & Business Support (from R349)
- **Live systems showcase**:
  - [saeasy.co.za](https://www.saeasy.co.za)
  - [nannyplacementssouthafrica.co.za](https://www.nannyplacementssouthafrica.co.za)
  - Luvhengo Payment Tracker
  - Quick Cash-Loan Systems
- **Company registration number**: K2019503198
- Copyright © 2026

---

## Customisation Guide

### Change the WhatsApp number
Search for `27794560147` and replace with your number (country code + number, no spaces or +).

### Update pricing or service text
Edit the relevant cards inside the `#services` section.

### Add / remove a service
Copy an existing `.service-card` block and adjust the icon, title, description, price and WhatsApp message.

### Change colours
Edit the CSS variables at the top of the `<style>` block:

```css
:root {
  --bg: #0a0f0d;
  --accent: #4ade80;
  --gradient: linear-gradient(135deg, #4ade80 0%, #14b8a6 50%, #06b6d4 100%);
  /* etc. */
}
```

### Add a logo image
Replace the text logo in the nav:

```html
<a href="#" class="logo">
  <img src="logo.png" alt="Aloe Tech" height="32">
</a>
```

---

## Browser Support

Works in all modern browsers (Chrome, Firefox, Safari, Edge). No Internet Explorer support.

---

## Contact

For service orders and quotes, message on WhatsApp:

**079 456 0147**

---

*Built for Aloe Tech · 2026*
