# Electro E-commerce

Electro is a static electronics storefront built with HTML, Bootstrap, jQuery, Owl Carousel, and a small JavaScript catalog layer. It can run directly from a local web server and uses `localStorage` for cart interactions.

## Pages

- `index.html` - storefront home page with featured product sections
- `shop.html` - product listing with search, sorting, category, and price filters
- `single.html` - dynamic product detail page
- `cart.html` - local cart view powered by `localStorage`
- `checkout.html` - checkout summary and customer details
- `bestseller.html` - best-selling product showcase
- `contact.html` - contact form and store details

## Run Locally

```bash
python3 -m http.server 8090
```

Then open:

```text
http://localhost:8090/index.html
```

## Verification

```bash
node --check js/main.js
```

The project has no build step. Most behavior lives in `js/main.js`, with styling in `css/style.css`.

## Database

`database_setup.sql` provides a starter MySQL/MariaDB schema for moving the static catalog toward a database-backed storefront.
