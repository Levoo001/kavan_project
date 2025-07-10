# HANIFA Fashion E-commerce Website

A beautiful, modern fashion e-commerce website built with HTML, CSS, and vanilla JavaScript. Features a clean black, white, and grey design aesthetic inspired by high-end fashion brands.

## Features

### Design & UI
- **Modern Minimalist Design**: Clean black, white, and grey color scheme
- **Responsive Layout**: Fully responsive design that works on desktop, tablet, and mobile
- **Smooth Animations**: CSS animations and transitions for enhanced user experience
- **Professional Typography**: Inter font family for clean, readable text
- **High-Quality Images**: Beautiful fashion photography from Unsplash

### Functionality
- **Product Showcase**: Featured products grid with hover effects
- **Product Modal**: Detailed product view with image gallery, size selection, and quantity controls
- **Shopping Cart**: Fully functional cart with add/remove items, quantity updates, and total calculation
- **Wishlist**: Save favorite items for later
- **Category Filtering**: Browse products by category (Dresses, Tops, Jumpsuits)
- **Local Storage**: Cart and wishlist persist between sessions
- **Toast Notifications**: User feedback for actions like adding to cart
- **Newsletter Signup**: Email subscription form with validation
- **Mobile Navigation**: Responsive mobile menu

### Sections
1. **Hero Section**: Full-screen banner with call-to-action
2. **Featured Products**: Product grid with hover effects and wishlist functionality
3. **Brand Story**: About section with compelling copy
4. **Newsletter**: Email signup section
5. **Footer**: Links, social media, and brand information

## File Structure

```
/export/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles and responsive design
├── script.js           # JavaScript functionality and interactions
└── README.md          # This file
```

## Setup Instructions

1. **Download Files**: Save all files in the same directory
2. **Open in Browser**: Simply open `index.html` in any modern web browser
3. **Local Development**: Use a local server for best experience:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   
   # Using VS Code Live Server extension
   # Right-click index.html and select "Open with Live Server"
   ```

## Customization

### Colors
The color scheme is defined in CSS custom properties at the top of `styles.css`:
```css
:root {
    --primary-color: #000;
    --secondary-color: #fff;
    --accent-color: #f8f8f8;
    --text-color: #000;
    --text-muted: #666;
}
```

### Products
Edit the `products` array in `script.js` to add/modify products:
```javascript
const products = [
    {
        id: 1,
        name: "Product Name",
        price: 299.00,
        description: "Product description",
        category: "dresses", // dresses, tops, jumpsuits
        imageUrl: "image-url.jpg",
        secondaryImageUrl: "secondary-image.jpg",
        inStock: true,
        featured: true,
        sizes: ["XS", "S", "M", "L", "XL"]
    }
    // Add more products...
];
```

### Images
Replace the Unsplash image URLs in the `products` array and hero section with your own product images. Recommended image sizes:
- **Product Images**: 800x1200px (aspect ratio 2:3)
- **Hero Image**: 1920x1080px (aspect ratio 16:9)

### Branding
1. **Logo**: Replace "HANIFA" text in the navigation with your brand name
2. **Copy**: Update text content in the HTML file
3. **Colors**: Modify CSS custom properties to match your brand colors
4. **Fonts**: Change the Google Fonts import and CSS font-family declarations

## Browser Compatibility

- **Chrome**: 60+
- **Firefox**: 60+
- **Safari**: 12+
- **Edge**: 79+
- **Mobile Browsers**: iOS Safari 12+, Chrome Mobile 60+

## Features Used

### HTML5
- Semantic HTML elements
- Meta tags for SEO
- Responsive viewport meta tag

### CSS3
- CSS Grid and Flexbox for layout
- CSS Custom Properties (variables)
- CSS Animations and Transitions
- Media queries for responsive design
- CSS transforms for interactive effects

### JavaScript (ES6+)
- Arrow functions
- Template literals
- Destructuring assignment
- Array methods (map, filter, reduce)
- Local Storage API
- Intersection Observer API (for lazy loading)
- Event delegation

## Performance Optimizations

- **Image Lazy Loading**: Images load as they come into view
- **Debounced Scroll Events**: Reduces scroll event frequency
- **Local Storage**: Reduces need for server requests
- **CSS Animations**: Hardware-accelerated transforms
- **Efficient DOM Queries**: Cached element references

## Accessibility Features

- **Semantic HTML**: Proper heading hierarchy and semantic elements
- **Alt Text**: All images have descriptive alt attributes
- **Keyboard Navigation**: Full keyboard support for interactive elements
- **ARIA Labels**: Screen reader support for dynamic content
- **Focus Management**: Proper focus handling for modals and navigation

## SEO Optimization

- **Meta Tags**: Title, description, and viewport meta tags
- **Semantic HTML**: Proper document structure
- **Image Alt Text**: Descriptive alternative text for all images
- **Clean URLs**: Single-page application with hash routing

## Future Enhancements

### Potential Features to Add
1. **Search Functionality**: Product search with filters
2. **User Accounts**: Login/registration system
3. **Payment Integration**: Stripe or PayPal checkout
4. **Product Reviews**: Customer review system
5. **Size Guide**: Interactive size chart
6. **Recently Viewed**: Track viewed products
7. **Related Products**: Product recommendations
8. **Zoom Functionality**: Image zoom on product pages

### Backend Integration
To connect with a real backend:
1. Replace the `products` array with API calls
2. Implement user authentication
3. Add payment processing
4. Set up order management
5. Implement inventory tracking

## License

This code is provided as-is for educational and commercial use. Feel free to modify and adapt for your projects.

## Credits

- **Images**: [Unsplash](https://unsplash.com) - High-quality stock photography
- **Icons**: [Lucide](https://lucide.dev) - Beautiful SVG icons
- **Fonts**: [Google Fonts](https://fonts.google.com) - Inter font family

## Support

This is a static website template. For custom development or additional features, consider hiring a web developer or development team.

---

**Built with ❤️ for modern fashion brands**