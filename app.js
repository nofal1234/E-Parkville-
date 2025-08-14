// E Parkville - Main Application Functions
// هذا الملف يحتوي على جميع الـ functions والـ data المستخدمة في الموقع

function createMainApp() {
    return {
        // =========== State Variables ===========
        mobileMenuOpen: false,
        searchOpen: false,
        cartOpen: false,
        
        // =========== Cart Data ===========
        cart: [
            { 
                id: 101, 
                name: 'Bobai Sunscreen Stick SPF 50+', 
                brand: 'BOBAI', 
                price: 450.00, 
                originalPrice: 500.00, 
                image: 'shop/files/1_699ed77f-c965-47c2-a9cd-7894c49ea79e_v=1745932747&width=400.png', 
                quantity: 1 
            },
            { 
                id: 102, 
                name: 'Shaan Body Milk 300 ml', 
                brand: 'SHAAN', 
                price: 200.00, 
                originalPrice: null, 
                image: 'shop/files/1_5a22fdc6-ede1-4ab1-a560-473c9a4f2c05_v=1736851626&width=400.png', 
                quantity: 2 
            },
            { 
                id: 103, 
                name: 'Starville Acne Prone Skin Facial Cleanser', 
                brand: 'STARVILLE', 
                price: 220.00, 
                originalPrice: 250.00, 
                image: 'shop/files/StarvilleAcneProneSkinFacialCleanser400ml_v=1715818307&width=500.png', 
                quantity: 1 
            }
        ],
        
        // =========== Top Picks Data ===========
        topPicks: [
            { 
                id: 2, 
                name: 'Clary Hair Fresh Scalp...', 
                brand: 'CLARY', 
                price: 314.50, 
                originalPrice: 370.00, 
                image: 'shop/files/1_5a22fdc6-ede1-4ab1-a560-473c9a4f2c05_v=1736851626&width=200.png' 
            },
            { 
                id: 3, 
                name: 'Clary Hair Leave In Cre...', 
                brand: 'CLARY', 
                price: 300.00, 
                originalPrice: null, 
                image: 'shop/files/1_699ed77f-c965-47c2-a9cd-7894c49ea79e_v=1745932747&width=400.png' 
            },
            { 
                id: 4, 
                name: 'DERMEDIC CAPILARTE...', 
                brand: 'DERMEDIC', 
                price: 272.00, 
                originalPrice: 320.00, 
                image: 'shop/files/2_f1cb9aad-be8b-4d1a-83f1-25df0fee813a_v=1745932747&width=200.png' 
            }
        ],
        
        // =========== Brands Data ===========
        brands: [
            {src: 'shop/files/DERMEDIC_logo_Pantone_426_d3852c54-a70a-4bde-a373-1e6e39327101_v=1753274497&width=400.png', alt: 'Dermedic'},
            {src: 'shop/files/1_4ca34bad-a1c6-4f4b-9b21-048a97fbc003_v=1733876025&width=400.png', alt: 'Bobai'},
            {src: 'shop/files/2_06649fc4-b89f-49b0-993b-d54889ba1d62_v=1737462058&width=400.png', alt: 'Shaan'},
            {src: 'shop/files/2_f1cb9aad-be8b-4d1a-83f1-25df0fee813a_v=1745932747&width=400.png', alt: 'Clary'},
            {src: 'shop/files/1_699ed77f-c965-47c2-a9cd-7894c49ea79e_v=1745932747&width=400.png', alt: 'Breath Day'},
            {src: 'shop/files/5_a6c31e44-d810-4f57-b0fa-134113f5a8e5_v=1736851509&width=400.png', alt: 'Glamy Lab'},
            {src: 'shop/files/E_parkville_-_logo-01_25fd7ac1-f989-4593-9830-0224d7ec68f6_v=1652112832&width=460.png', alt: 'E Parkville'}
        ],
        
        // =========== Reviews Data ===========
        reviews: [
            { 
                title: 'Great moisturizer 👍', 
                text: 'Will buy it again! One of the best moisturizers I\'ve ever used', 
                author: 'Fatima', 
                product: 'GLAMY LAB Hydra Intense Cream 50 gm', 
                image: 'shop/files/GLAMYLABWhiteningcreamSPF3050gm_1_v=1715815530&width=500.png' 
            },
            { 
                title: 'Starville facial cleanser', 
                text: 'Perfect for oily skin is so gently and handle acnes', 
                author: 'Sara Ahmed', 
                product: 'Starville Acne Prone Skin Facial Cleanser 400 ml', 
                image: 'shop/files/StarvilleAcneProneSkinFacialCleanser400ml_v=1715818307&width=500.png' 
            },
            { 
                title: 'النتيجة رائعة', 
                text: 'منظف لطيف بزيت شجرة الشاي برائحة منعشة مناسبة جدًا لوظيفته', 
                author: 'R.R.', 
                product: 'Shaan Intimate Feminine Cleanser 250 ml', 
                image: 'shop/files/Shaan_-_Make_Up_Remover_-_1_v=1748175554&width=500.png' 
            },
            { 
                title: 'Amazing', 
                text: 'Excellent make up remover for all skin types specially sensitive one ♥️', 
                author: 'Noha Magdy', 
                product: 'Starville Micellar Water 100 ml', 
                image: 'shop/files/StarvilleMicellarWater100ml_v=1715818447&width=500.png' 
            }
        ],
        
        names: ['Ahmed', 'Sara', 'Omar', 'Mariam', 'Fatima', 'Yara', 'Ali', 'Khaled', 'Nour', 'Laila', 'Hassan', 'Youssef', 'Reem', 'Huda', 'Tarek'],
        
        // =========== Computed Properties ===========
        get cartTotal() {
            return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        },
        
        get cartItemCount() {
            return this.cart.reduce((total, item) => total + item.quantity, 0);
        },
        
        // =========== Cart Functions ===========
        openAndFillCart() {
            // إذا كانت السلة فارغة، املأها بالمنتجات
            if (this.cart.length === 0) {
                this.cart = [
                    { 
                        id: 101, 
                        name: 'Bobai Sunscreen Stick SPF 50+', 
                        brand: 'BOBAI', 
                        price: 450.00, 
                        originalPrice: 500.00, 
                        image: 'shop/files/1_699ed77f-c965-47c2-a9cd-7894c49ea79e_v=1745932747&width=400.png', 
                        quantity: 1 
                    },
                    { 
                        id: 102, 
                        name: 'Shaan Body Milk 300 ml', 
                        brand: 'SHAAN', 
                        price: 200.00, 
                        originalPrice: null, 
                        image: 'shop/files/1_5a22fdc6-ede1-4ab1-a560-473c9a4f2c05_v=1736851626&width=400.png', 
                        quantity: 2 
                    },
                    { 
                        id: 103, 
                        name: 'Starville Acne Prone Skin Facial Cleanser', 
                        brand: 'STARVILLE', 
                        price: 220.00, 
                        originalPrice: 250.00, 
                        image: 'shop/files/StarvilleAcneProneSkinFacialCleanser400ml_v=1715818307&width=500.png', 
                        quantity: 1 
                    }
                ];
            }
            this.cartOpen = true;
        },
        
        closeAndEmptyCart() {
            this.cartOpen = false;
            // لا تفرغ السلة، اترك المنتجات كما هي
        },
        
        // =========== Notification Functions ===========
        showNotification(message) {
            const notification = document.createElement('div');
            notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-[70]';
            notification.innerHTML = `<span>${message}</span>`;
            document.body.appendChild(notification);
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 3000);
        },
        
        // =========== Brands Slider Functions ===========
        start: 0,
        perView: 5,
        
        maxStart() { 
            return Math.max(0, this.brands.length - this.perView); 
        },
        
        updatePerView() { 
            this.perView = window.innerWidth >= 1280 ? 6 : (window.innerWidth >= 1024 ? 5 : (window.innerWidth >= 768 ? 3 : 2));
            if (this.start > this.maxStart()) this.start = this.maxStart();
        },
        
        next() { 
            if (this.start < this.maxStart()) this.start += 1; 
        },
        
        prev() { 
            if (this.start > 0) this.start -= 1; 
        },
        
        visible(i) { 
            return i >= this.start && i < this.start + this.perView; 
        },
        
        // =========== Reviews Slider Functions ===========
        reviewsStart: 0,
        reviewsPerView: 1,
        
        updateReviewsPerView() { 
            this.reviewsPerView = window.innerWidth >= 1024 ? 3 : (window.innerWidth >= 768 ? 2 : 1); 
        },
        
        randomizeTitles() { 
            this.reviews = this.reviews.map(r => ({ 
                ...r, 
                title: this.names[Math.floor(Math.random()*this.names.length)] 
            })); 
        },
        
        reviewsNext() { 
            if (this.reviewsStart + this.reviewsPerView < this.reviews.length) this.reviewsStart += 1; 
        },
        
        reviewsPrev() { 
            if (this.reviewsStart > 0) this.reviewsStart -= 1; 
        },
        
        reviewsVisible(i) { 
            return i >= this.reviewsStart && i < this.reviewsStart + this.reviewsPerView; 
        }
    };
}

// =========== Slideshow Functions ===========
function createSlideshow() {
    return {
        currentSlide: 1,
        totalSlides: 5,
        autoplay: null,
        
        init() {
            this.autoplay = setInterval(() => { 
                this.currentSlide = (this.currentSlide % this.totalSlides) + 1; 
            }, 6000);
        },
        
        pause() {
            clearInterval(this.autoplay);
        },
        
        resume() {
            this.autoplay = setInterval(() => { 
                this.currentSlide = (this.currentSlide % this.totalSlides) + 1; 
            }, 6000);
        }
    };
}

// =========== Trending Products Functions ===========
function createTrendingProducts() {
    return {
        activeTab: 'new'
    };
}

// =========== Language Functions ===========
function createLanguageSelector() {
    return {
        openLang: false,
        selectedLang: 'English'
    };
}

// =========== Mobile Menu Functions ===========
function createMobileMenu() {
    return {
        open: false
    };
}

// =========== Search Functions ===========
function createSearch() {
    return {
        open: false
    };
}

// =========== Cookie Policy Functions ===========
function createCookiePolicy() {
    return {
        show: true
    };
}

// =========== Cart Page Functions ===========
function createCartPage() {
    return {
        mobileMenuOpen: false,
        searchOpen: false,
        cart: [
            { id: 101, name: 'Bobai Sunscreen Stick SPF 50+', brand: 'BOBAI', price: 450.00, originalPrice: 500.00, image: 'shop/files/1_699ed77f-c965-47c2-a9cd-7894c49ea79e_v=1745932747&width=400.png', quantity: 1 },
            { id: 102, name: 'Shaan Body Milk 300 ml', brand: 'SHAAN', price: 200.00, originalPrice: null, image: 'shop/files/1_5a22fdc6-ede1-4ab1-a560-473c9a4f2c05_v=1736851626&width=400.png', quantity: 2 },
            { id: 103, name: 'Starville Acne Prone Skin Facial Cleanser', brand: 'STARVILLE', price: 220.00, originalPrice: 250.00, image: 'shop/files/1_699ed77f-c965-47c2-a9cd-7894c49ea79e_v=1745932747&width=400.png', quantity: 1 }
        ],
        recentlyViewed: [
            { id: 201, name: 'Clary Hair Fresh Scalp Treatment', brand: 'CLARY', price: 314.50, originalPrice: 370.00, image: 'shop/files/1_5a22fdc6-ede1-4ab1-a560-473c9a4f2c05_v=1736851626&width=200.png' },
            { id: 202, name: 'DERMEDIC CAPILARTE Hair Serum', brand: 'DERMEDIC', price: 272.00, originalPrice: 320.00, image: 'shop/files/2_f1cb9aad-be8b-4d1a-83f1-25df0fee813a_v=1745932747&width=200.png' },
            { id: 203, name: 'SuperKids Vitamin C Gummies', brand: 'SUPERKIDS', price: 180.00, originalPrice: null, image: 'shop/files/44065-Catalouge-Superkids01_v=1746522148&width=200.png' },
            { id: 204, name: 'Bobai Sunscreen Stick SPF 50+', brand: 'BOBAI', price: 450.00, originalPrice: 500.00, image: 'shop/files/1_699ed77f-c965-47c2-a9cd-7894c49ea79e_v=1745932747&width=400.png' },
            { id: 205, name: 'Shaan Body Milk 300 ml', brand: 'SHAAN', price: 200.00, originalPrice: null, image: 'shop/files/1_5a22fdc6-ede1-4ab1-a560-473c9a4f2c05_v=1736851626&width=400.png' },
            { id: 206, name: 'Starville Acne Prone Skin Facial Cleanser', brand: 'STARVILLE', price: 220.00, originalPrice: 250.00, image: 'shop/files/1_699ed77f-c965-47c2-a9cd-7894c49ea79e_v=1745932747&width=400.png' },
            { id: 207, name: 'Clary Hair Leave In Conditioner', brand: 'CLARY', price: 300.00, originalPrice: null, image: 'shop/files/1_699ed77f-c965-47c2-a9cd-7894c49ea79e_v=1745932747&width=400.png' },
            { id: 208, name: 'SuperKids Hair Shampoo', brand: 'SUPERKIDS', price: 150.00, originalPrice: 180.00, image: 'shop/files/44065-Catalouge-Superkids03_v=1744704018&width=200.png' },
            { id: 209, name: 'Starville Face Moisturizer', brand: 'STARVILLE', price: 280.00, originalPrice: 320.00, image: 'shop/files/2_f1cb9aad-be8b-4d1a-83f1-25df0fee813a_v=1745932747&width=400.png' },
            { id: 210, name: 'Bobai Anti-Aging Serum', brand: 'BOBAI', price: 380.00, originalPrice: 420.00, image: 'shop/files/1_5a22fdc6-ede1-4ab1-a560-473c9a4f2c05_v=1736851626&width=400.png' },
            { id: 211, name: 'Shaan Hand Cream', brand: 'SHAAN', price: 120.00, originalPrice: null, image: 'shop/files/1_699ed77f-c965-47c2-a9cd-7894c49ea79e_v=1745932747&width=400.png' },
            { id: 212, name: 'SuperKids Toothpaste', brand: 'SUPERKIDS', price: 90.00, originalPrice: 110.00, image: 'shop/files/44065-Catalouge-Superkids01_v=1746522148&width=200.png' }
        ],
        
        // =========== Computed Properties ===========
        get cartTotal() {
            return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        },
        
        get cartItemCount() {
            return this.cart.reduce((total, item) => total + item.quantity, 0);
        },
        
        get subtotal() {
            return this.cartTotal;
        },
        
        get shipping() {
            return this.cartTotal > 500 ? 0 : 50;
        },
        
        get total() {
            return this.subtotal + this.shipping;
        },
        
        // =========== Cart Functions ===========
        updateQuantity(id, newQuantity) {
            if (newQuantity < 1) return;
            const item = this.cart.find(item => item.id === id);
            if (item) {
                item.quantity = newQuantity;
            }
        },
        
        removeItem(id) {
            this.cart = this.cart.filter(item => item.id !== id);
        },
        
        addToCart(product) {
            const existingItem = this.cart.find(item => item.id === product.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                this.cart.push({ ...product, quantity: 1 });
            }
        }
    };
}

// =========== Recently Viewed Carousel Functions ===========
function createRecentlyViewedCarousel() {
    return {
        currentIndex: 0,
        itemsPerView: 4
    };
}

// =========== Collection Page Functions ===========
function createCollectionPage() {
    return {
        mobileMenuOpen: false,
        searchOpen: false
    };
}

// =========== Collection Filter Functions ===========
function createCollectionFilter() {
    return {
        open: false
    };
}

// =========== Product Details Page Functions ===========
function createProductDetailsPage() {
    return {
        mobileMenuOpen: false,
        searchOpen: false
    };
}

// =========== Product Details Filter Functions ===========
function createProductDetailsFilter() {
    return {
        open: false
    };
}

// =========== Null/Empty Cart Page Functions ===========
function createNullPage() {
    return {
        mobileMenuOpen: false,
        searchOpen: false,
        cart: [],
        get cartItemCount() {
            return this.cart.reduce((total, item) => total + item.quantity, 0);
        }
    };
}
