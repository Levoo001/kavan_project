// Sample product data - you can replace this with real data from your backend
const products = [
    {
        id: 1,
        name: "Niyah Maxi Dress",
        price: 358.00,
        description: "Elegant flowing maxi dress perfect for any occasion. Made from premium materials with exceptional attention to detail.",
        category: "dresses",
        imageUrl: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200",
        secondaryImageUrl: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200",
        inStock: true,
        featured: true,
        sizes: ["XS", "S", "M", "L", "XL"]
    },
    {
        id: 2,
        name: "Harper Maxi Dress",
        price: 345.00,
        description: "Sophisticated white maxi dress with flowing silhouette. Perfect for special occasions and elegant events.",
        category: "dresses",
        imageUrl: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200",
        secondaryImageUrl: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200",
        inStock: true,
        featured: true,
        sizes: ["XS", "S", "M", "L", "XL"]
    },
    {
        id: 3,
        name: "Niyah Tank Top",
        price: 174.00,
        description: "Sleek black tank top with modern cut. Versatile piece that pairs perfectly with any bottom.",
        category: "tops",
        imageUrl: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200",
        secondaryImageUrl: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200",
        inStock: true,
        featured: true,
        sizes: ["XS", "S", "M", "L", "XL"]
    },
    {
        id: 4,
        name: "Harper Mini Dress",
        price: 285.00,
        description: "Chic mini dress with contemporary styling. Modern silhouette with timeless appeal.",
        category: "dresses",
        imageUrl: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200",
        secondaryImageUrl: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200",
        inStock: true,
        featured: true,
        sizes: ["XS", "S", "M", "L", "XL"]
    },
    {
        id: 5,
        name: "Kalani Sun Dress",
        price: 320.00,
        description: "Flowing sun dress perfect for warm weather. Light and comfortable with beautiful draping.",
        category: "dresses",
        imageUrl: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200",
        secondaryImageUrl: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200",
        inStock: false,
        featured: true,
        sizes: ["XS", "S", "M", "L", "XL"]
    },
    {
        id: 6,
        name: "Amanda Jumpsuit II",
        price: 274.00,
        description: "Elegant black jumpsuit with sophisticated design. Perfect for both day and evening wear.",
        category: "jumpsuits",
        imageUrl: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200",
        secondaryImageUrl: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200",
        inStock: true,
        featured: true,
        sizes: ["XS", "S", "M", "L", "XL"]
    },
    {
        id: 7,
        name: "Aria Silk Blouse",
        price: 198.00,
        description: "Luxurious silk blouse with delicate detailing. Timeless piece for the modern wardrobe.",
        category: "tops",
        imageUrl: "https://images.unsplash.com/photo-1564257577-1a36bf02dd7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200",
        secondaryImageUrl: "https://images.unsplash.com/photo-1564257577-1a36bf02dd7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200",
        inStock: true,
        featured: false,
        sizes: ["XS", "S", "M", "L", "XL"]
    },
    {
        id: 8,
        name: "Luna Evening Dress",
        price: 495.00,
        description: "Stunning evening dress with intricate beadwork. Perfect for special occasions and formal events.",
        category: "dresses",
        imageUrl: "https://images.unsplash.com/photo-1566479179817-0dcc4e3a7df8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200",
        secondaryImageUrl: "https://images.unsplash.com/photo-1566479179817-0dcc4e3a7df8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200",
        inStock: true,
        featured: false,
        sizes: ["XS", "S", "M", "L", "XL"]
    }
];

// Global variables
let cart = [];
let wishlist = [];
let currentCategory = 'all';
let isCartOpen = false;

// DOM Elements
const productsGrid = document.getElementById('products-grid');
const cartSidebar = document.getElementById('cart-sidebar');
const cartContent = document.getElementById('cart-content');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');
const cartFooter = document.getElementById('cart-footer');
const productModal = document.getElementById('product-modal');
const modalBody = document.getElementById('modal-body');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toast-message');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    updateCartDisplay();
    initializeHeroVideo();
    
    // Add event listeners
    document.addEventListener('click', handleOutsideClick);
    window.addEventListener('scroll', handleScroll);
});

// Initialize hero video
function initializeHeroVideo() {
    const heroVideo = document.getElementById('hero-video');
    if (heroVideo) {
        // Ensure video plays on mobile devices
        heroVideo.muted = true;
        heroVideo.playsInline = true;
        
        // Handle video load error - fallback to image
        heroVideo.addEventListener('error', function() {
            console.log('Video failed to load, showing fallback image');
            heroVideo.style.display = 'none';
        });
        
        // Ensure video loops properly
        heroVideo.addEventListener('ended', function() {
            heroVideo.currentTime = 0;
            heroVideo.play();
        });
        
        // Try to play the video
        const playPromise = heroVideo.play();
        if (playPromise !== undefined) {
            playPromise.catch(function(error) {
                console.log('Auto-play was prevented:', error);
                // Auto-play was prevented, but that's okay for hero videos
            });
        }
    }
}

// Load and display products
function loadProducts(category = 'all', featured = true) {
    let filteredProducts = products;
    
    if (featured) {
        filteredProducts = products.filter(product => product.featured);
    }
    
    if (category !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === category);
    }
    
    displayProducts(filteredProducts);
}

// Display products in grid
function displayProducts(productList) {
    if (!productsGrid) return;
    
    productsGrid.innerHTML = '';
    
    if (productList.length === 0) {
        productsGrid.innerHTML = '<p class="no-products">No products found.</p>';
        return;
    }
    
    productList.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// Create product card element
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.onclick = () => openProductModal(product);
    
    const isWishlisted = wishlist.some(item => item.id === product.id);
    
    card.innerHTML = `
        <div class="product-image-container">
            <img src="${product.imageUrl}" alt="${product.name}" class="product-image">
            ${!product.inStock ? '<div class="product-overlay"><span class="sold-out-text">Sold Out</span></div>' : ''}
            <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" onclick="toggleWishlist(event, ${product.id})">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
            </button>
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-price ${!product.inStock ? 'sold-out' : ''}">$${product.price.toFixed(2)}</p>
        </div>
    `;
    
    return card;
}

// Open product modal
function openProductModal(product) {
    if (!productModal || !modalBody) return;
    
    const isWishlisted = wishlist.some(item => item.id === product.id);
    
    modalBody.innerHTML = `
        <div class="product-detail-grid">
            <div class="product-images">
                <img src="${product.imageUrl}" alt="${product.name}" class="main-image" id="main-image">
                <div class="thumbnail-images">
                    <img src="${product.imageUrl}" alt="${product.name}" class="thumbnail" onclick="changeMainImage('${product.imageUrl}')">
                    <img src="${product.secondaryImageUrl}" alt="${product.name}" class="thumbnail" onclick="changeMainImage('${product.secondaryImageUrl}')">
                    <img src="${product.imageUrl}" alt="${product.name}" class="thumbnail" onclick="changeMainImage('${product.imageUrl}')">
                </div>
            </div>
            <div class="product-details">
                <h2 class="product-detail-name">${product.name}</h2>
                <p class="product-detail-price">$${product.price.toFixed(2)}</p>
                <p class="product-description">${product.description}</p>
                
                <div class="size-selection">
                    <label class="size-label">Size</label>
                    <div class="size-options">
                        ${product.sizes.map(size => `<button class="size-option" data-size="${size}">${size}</button>`).join('')}
                    </div>
                </div>
                
                <div class="quantity-selection">
                    <label class="quantity-label">Quantity</label>
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="changeQuantity(-1)">-</button>
                        <span class="quantity-display" id="quantity-display">1</span>
                        <button class="quantity-btn" onclick="changeQuantity(1)">+</button>
                    </div>
                </div>
                
                <button class="add-to-cart-btn" onclick="addToCartFromModal(${product.id})" ${!product.inStock ? 'disabled' : ''}>
                    ${product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </button>
                
                <button class="wishlist-detail-btn" onclick="toggleWishlistFromModal(${product.id})">
                    ${isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
                </button>
            </div>
        </div>
    `;
    
    // Add event listeners for size selection
    const sizeOptions = modalBody.querySelectorAll('.size-option');
    sizeOptions.forEach(option => {
        option.addEventListener('click', function() {
            sizeOptions.forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
    
    productModal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

// Close product modal
function closeModal() {
    if (!productModal) return;
    
    productModal.classList.remove('open');
    document.body.style.overflow = 'auto';
}

// Change main image in modal
function changeMainImage(imageSrc) {
    const mainImage = document.getElementById('main-image');
    if (mainImage) {
        mainImage.src = imageSrc;
    }
}

// Change quantity in modal
function changeQuantity(delta) {
    const quantityDisplay = document.getElementById('quantity-display');
    if (!quantityDisplay) return;
    
    let currentQuantity = parseInt(quantityDisplay.textContent);
    currentQuantity = Math.max(1, currentQuantity + delta);
    quantityDisplay.textContent = currentQuantity;
}

// Add to cart from modal
function addToCartFromModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const selectedSize = document.querySelector('.size-option.selected');
    if (!selectedSize) {
        showToast('Please select a size');
        return;
    }
    
    const quantity = parseInt(document.getElementById('quantity-display').textContent);
    
    addToCart(product, selectedSize.dataset.size, quantity);
    closeModal();
}

// Toggle wishlist from modal
function toggleWishlistFromModal(productId) {
    toggleWishlist(null, productId);
    
    // Update button text
    const button = document.querySelector('.wishlist-detail-btn');
    const isWishlisted = wishlist.some(item => item.id === productId);
    if (button) {
        button.textContent = isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist';
    }
}

// Add product to cart
function addToCart(product, size, quantity = 1) {
    const existingItem = cart.find(item => item.id === product.id && item.size === size);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            size: size,
            quantity: quantity,
            imageUrl: product.imageUrl
        });
    }
    
    updateCartDisplay();
    showToast(`${product.name} added to cart`);
}

// Remove item from cart
function removeFromCart(productId, size) {
    cart = cart.filter(item => !(item.id === productId && item.size === size));
    updateCartDisplay();
    showToast('Item removed from cart');
}

// Update cart quantity
function updateCartQuantity(productId, size, newQuantity) {
    const item = cart.find(item => item.id === productId && item.size === size);
    if (item) {
        if (newQuantity <= 0) {
            removeFromCart(productId, size);
        } else {
            item.quantity = newQuantity;
            updateCartDisplay();
        }
    }
}

// Toggle wishlist
function toggleWishlist(event, productId) {
    if (event) {
        event.stopPropagation();
        event.preventDefault();
    }
    
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingIndex = wishlist.findIndex(item => item.id === productId);
    
    if (existingIndex > -1) {
        wishlist.splice(existingIndex, 1);
        showToast(`${product.name} removed from wishlist`);
    } else {
        wishlist.push({
            id: product.id,
            name: product.name,
            price: product.price,
            imageUrl: product.imageUrl
        });
        showToast(`${product.name} added to wishlist`);
    }
    
    // Update wishlist buttons
    updateWishlistButtons();
}

// Update wishlist button states
function updateWishlistButtons() {
    const wishlistButtons = document.querySelectorAll('.wishlist-btn');
    wishlistButtons.forEach(button => {
        const card = button.closest('.product-card');
        if (card) {
            const productName = card.querySelector('.product-name').textContent;
            const product = products.find(p => p.name === productName);
            if (product) {
                const isWishlisted = wishlist.some(item => item.id === product.id);
                button.classList.toggle('active', isWishlisted);
            }
        }
    });
}

// Update cart display
function updateCartDisplay() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCount) {
        cartCount.textContent = totalItems;
    }
    
    // Update cart content
    if (cartContent) {
        if (cart.length === 0) {
            cartContent.innerHTML = `
                <div class="cart-empty">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                    </svg>
                    <p class="cart-empty-text">Your cart is empty</p>
                    <p class="cart-empty-subtext">Add some items to get started</p>
                </div>
            `;
            if (cartFooter) cartFooter.style.display = 'none';
        } else {
            cartContent.innerHTML = `
                <div class="cart-items">
                    ${cart.map(item => `
                        <div class="cart-item">
                            <img src="${item.imageUrl}" alt="${item.name}" class="cart-item-image">
                            <div class="cart-item-details">
                                <h4 class="cart-item-name">${item.name}</h4>
                                <p class="cart-item-size">Size: ${item.size}</p>
                                <p class="cart-item-price">$${item.price.toFixed(2)}</p>
                                <div class="cart-item-actions">
                                    <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, '${item.size}', ${item.quantity - 1})">-</button>
                                    <span class="quantity-display">${item.quantity}</span>
                                    <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, '${item.size}', ${item.quantity + 1})">+</button>
                                    <button class="remove-btn" onclick="removeFromCart(${item.id}, '${item.size}')">Remove</button>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
            
            // Update total
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            if (cartTotal) {
                cartTotal.textContent = `$${total.toFixed(2)}`;
            }
            if (cartFooter) cartFooter.style.display = 'block';
        }
    }
}

// Toggle cart sidebar
function toggleCart() {
    if (!cartSidebar) return;
    
    isCartOpen = !isCartOpen;
    cartSidebar.classList.toggle('open', isCartOpen);
    
    if (isCartOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

// Filter products by category
function filterByCategory(category, element) {
    // Update active tab
    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    element.classList.add('active');
    
    // Update section title
    const sectionTitle = document.querySelector('.section-title');
    if (sectionTitle) {
        const categoryNames = {
            'all': 'SS25 - DROP 2',
            'dresses': 'Dresses Collection',
            'tops': 'Tops & Blouses',
            'jumpsuits': 'Jumpsuits',
            'sale': 'Sale Items'
        };
        sectionTitle.textContent = categoryNames[category] || 'Products';
    }
    
    currentCategory = category;
    loadProducts(category, false);
    
    // Add animation to products
    setTimeout(() => {
        const productCards = document.querySelectorAll('.product-card');
        productCards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
            card.classList.add('animate-in');
        });
    }, 100);
}

// Show products by category
function showProducts(category) {
    currentCategory = category;
    
    // Update section title
    const sectionTitle = document.querySelector('.section-title');
    if (sectionTitle) {
        const categoryNames = {
            'all': 'SS25 - DROP 2',
            'dresses': 'Dresses',
            'tops': 'Tops',
            'jumpsuits': 'Jumpsuits',
            'sale': 'Sale'
        };
        sectionTitle.textContent = categoryNames[category] || 'Products';
    }
    
    loadProducts(category, false);
    scrollToProducts();
}

// Show all products
function showAllProducts() {
    showProducts('all');
}

// Scroll to products section
function scrollToProducts() {
    const productsSection = document.getElementById('products');
    if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Toggle mobile menu
function toggleMobileMenu() {
    const navMenu = document.getElementById('nav-menu');
    if (navMenu) {
        navMenu.classList.toggle('open');
    }
}

// Subscribe to newsletter
function subscribeNewsletter(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    if (email) {
        showToast('Thank you for subscribing!');
        event.target.reset();
    }
}

// Show toast notification
function showToast(message) {
    if (!toast || !toastMessage) return;
    
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Handle outside clicks
function handleOutsideClick(event) {
    // Close cart if clicking outside
    if (isCartOpen && cartSidebar && !cartSidebar.contains(event.target) && !event.target.closest('.cart-btn')) {
        toggleCart();
    }
    
    // Close modal if clicking outside
    if (productModal && productModal.classList.contains('open') && event.target === productModal) {
        closeModal();
    }
}

// Handle scroll events
function handleScroll() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    }
}

// Keyboard navigation
document.addEventListener('keydown', function(event) {
    // Close modal with Escape key
    if (event.key === 'Escape') {
        if (productModal && productModal.classList.contains('open')) {
            closeModal();
        } else if (isCartOpen) {
            toggleCart();
        }
    }
});

// Smooth scrolling for anchor links
document.addEventListener('click', function(event) {
    if (event.target.matches('a[href^="#"]')) {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// Image lazy loading
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading if supported
if ('IntersectionObserver' in window) {
    document.addEventListener('DOMContentLoaded', lazyLoadImages);
}

// Local storage functions
function saveCartToStorage() {
    localStorage.setItem('hanifa_cart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const savedCart = localStorage.getItem('hanifa_cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartDisplay();
    }
}

function saveWishlistToStorage() {
    localStorage.setItem('hanifa_wishlist', JSON.stringify(wishlist));
}

function loadWishlistFromStorage() {
    const savedWishlist = localStorage.getItem('hanifa_wishlist');
    if (savedWishlist) {
        wishlist = JSON.parse(savedWishlist);
        updateWishlistButtons();
    }
}

// Save to storage when cart or wishlist changes
const originalAddToCart = addToCart;
addToCart = function(...args) {
    originalAddToCart.apply(this, args);
    saveCartToStorage();
};

const originalRemoveFromCart = removeFromCart;
removeFromCart = function(...args) {
    originalRemoveFromCart.apply(this, args);
    saveCartToStorage();
};

const originalToggleWishlist = toggleWishlist;
toggleWishlist = function(...args) {
    originalToggleWishlist.apply(this, args);
    saveWishlistToStorage();
};

// Load from storage on page load
document.addEventListener('DOMContentLoaded', function() {
    loadCartFromStorage();
    loadWishlistFromStorage();
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

const debouncedHandleScroll = debounce(handleScroll, 10);
window.removeEventListener('scroll', handleScroll);
window.addEventListener('scroll', debouncedHandleScroll);

// Analytics tracking (placeholder - replace with actual analytics)
function trackEvent(eventName, data = {}) {
    // console.log('Event:', eventName, data);
    // Replace with actual analytics tracking like Google Analytics
    // gtag('event', eventName, data);
}

// Track product views
const originalOpenProductModal = openProductModal;
openProductModal = function(product) {
    trackEvent('product_view', {
        product_id: product.id,
        product_name: product.name,
        product_category: product.category
    });
    originalOpenProductModal(product);
};

// Track add to cart events
const originalAddToCartTracked = addToCart;
addToCart = function(product, size, quantity) {
    trackEvent('add_to_cart', {
        product_id: product.id,
        product_name: product.name,
        size: size,
        quantity: quantity,
        value: product.price * quantity
    });
    originalAddToCartTracked(product, size, quantity);
};

// Error handling
window.addEventListener('error', function(event) {
    console.error('JavaScript Error:', event.error);
    // You can add error reporting here
});

window.addEventListener('unhandledrejection', function(event) {
    console.error('Unhandled Promise Rejection:', event.reason);
    // You can add error reporting here
});

// Service Worker registration (for PWA capabilities)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // navigator.serviceWorker.register('/sw.js')
        //     .then(function(registration) {
        //         console.log('ServiceWorker registration successful');
        //     })
        //     .catch(function(err) {
        //         console.log('ServiceWorker registration failed');
        //     });
    });
}