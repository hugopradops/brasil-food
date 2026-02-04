# 🇧🇷 Brazilian Flavors Restaurant

A beautiful, modern restaurant website showcasing authentic Brazilian cuisine. Built with pure HTML, CSS, and JavaScript - no frameworks or build tools required.

<img width="1794" height="1317" alt="image" src="https://github.com/user-attachments/assets/dd50f82b-c926-4eeb-8318-65a2d84aa85d" />


## ✨ Features

- **Modern Design** - Clean, elegant UI with Brazilian-inspired color palette
- **Fully Responsive** - Looks great on desktop, tablet, and mobile
- **Interactive Menu** - Filter menu items by category
- **Image Lightbox** - Click any dish to view a larger image
- **Smooth Animations** - Scroll-triggered animations and transitions
- **Accessible** - Semantic HTML and ARIA labels

## 🚀 Getting Started

Simply open `index.html` in your browser - that's it! No build process or dependencies required.

### Local Development

For local development with live reload, you can use any simple HTTP server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (npx)
npx serve

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## 📁 Project Structure

```
brasil-food/
├── index.html      # Main HTML file
├── styles.css      # All styling
├── script.js       # Interactive functionality
├── images/         # All images
│   ├── brazilian-food.jpg   # Hero background
│   ├── acai.jpg            # Menu item
│   ├── brigadeiro.png      # Menu item
│   ├── feijoada.png        # Menu item (tipica.png)
│   ├── guarana.jpg         # Menu item
│   ├── pao-de-queijo.png   # Menu item
│   ├── prato-feito.png     # Menu item (Picanha)
│   ├── restaurante2.jpg    # About section
│   ├── rio-de-janeiro.jpg  # About section
│   └── the-other.jpg       # About section
└── README.md
```

## 🎨 Customization

### Colors

The color scheme is defined as CSS custom properties in `styles.css`. Edit these to match your brand:

```css
:root {
    --primary: #009c3b;        /* Brazilian green */
    --secondary: #ffdf00;      /* Brazilian yellow */
    --accent: #002776;         /* Brazilian blue */
}
```

### Menu Items

Edit the menu cards in `index.html` to add, remove, or modify dishes. Each card uses the `data-category` attribute for filtering:

```html
<article class="menu-card" data-category="main">
    <!-- Card content -->
</article>
```

Categories: `main`, `snacks`, `desserts`, `drinks`

### Contact Information

Update the contact details in the Contact section of `index.html`.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the MIT License.

---

Made with 💚💛 bringing the taste of Brazil to the world.
