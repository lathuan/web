console.log("Custom slider script loaded");

// Slider cho hình ảnh
let currentIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    if (index >= totalSlides) currentIndex = 0;
    if (index < 0) currentIndex = totalSlides - 1;
    slides.style.transform = `translateX(-${currentIndex * 33.33}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

function autoSlide() {
    currentIndex++;
    showSlide(currentIndex);
}

document.querySelector('.next').addEventListener('click', () => {
    currentIndex++;
    showSlide(currentIndex);
});

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex--;
    showSlide(currentIndex);
});

function currentSlide(index) {
    currentIndex = index;
    showSlide(currentIndex);
}

function initializeSlider() {
    currentIndex = 0;
    showSlide(currentIndex);
    setInterval(autoSlide, 3000);
}

// Slider cho video
let videoIndex = 0;
let videoSlides;
let totalVideoSlides;
let videoSlideElements;
let players = [];

function onYouTubeIframeAPIReady() {
    console.log("YouTube IFrame API Ready");
    const videoIds = ['video-1', 'video-2', 'video-3'];
    videoIds.forEach((id, index) => {
        players[index] = new YT.Player(id, {
            events: {
                'onReady': (event) => {
                    console.log(`Player ${id} is ready`);
                    if (index !== videoIndex) {
                        event.target.pauseVideo();
                    }
                },
                'onStateChange': (event) => {
                    if (event.data === YT.PlayerState.PLAYING && index !== videoIndex) {
                        event.target.pauseVideo();
                    }
                }
            }
        });
    });
}

function showVideoSlide(index) {
    if (index >= totalVideoSlides) videoIndex = 0;
    if (index < 0) videoIndex = totalVideoSlides - 1;
    videoSlides.style.transform = `translateX(-${videoIndex * 33.33}%)`;
    players.forEach((player, i) => {
        if (i === videoIndex) {
            player.playVideo();
        } else {
            player.pauseVideo();
        }
    });
    videoSlideElements.forEach((slide, i) => {
        slide.classList.toggle('active', i === videoIndex);
    });
}

function initializeVideoSlider() {
    videoSlides = document.querySelector('.video-slides');
    videoSlideElements = document.querySelectorAll('.video-slide');
    totalVideoSlides = videoSlideElements.length;
    videoIndex = 0;
    showVideoSlide(videoIndex);

    document.querySelector('.video-next').addEventListener('click', () => {
        videoIndex++;
        showVideoSlide(videoIndex);
    });

    document.querySelector('.video-prev').addEventListener('click', () => {
        videoIndex--;
        showVideoSlide(videoIndex);
    });
}

// Danh sách sản phẩm
const products = {
    1: { name: "Xiaomi 15", description: "Snapdragon 8 Elite, Leica camera, 5500mAh battery, 90W fast charging, IP69.", price: 999 },
    2: { name: "Xiaomi 15 Pro", description: "Snapdragon 8 Elite, Leica camera, 6000mAh battery, 90W fast charging, HyperOS 2.0.", price: 1199 },
    3: { name: "Redmi Note 14 Pro", description: "48MP camera, AMOLED display, 5000mAh battery, mid-range price.", price: 299 },
    4: { name: "Redmi K70 Ultra", description: "200MP camera, Snapdragon 8+ Gen 1, 5000mAh battery, 120W fast charging.", price: 499 },
    5: { name: "Mi Watch S1", description: "AMOLED display, 14-day battery life, SpO2 monitoring.", price: 149 },
    6: { name: "Mi Band 7", description: "1.62\" AMOLED display, 14-day battery, 120 sports modes.", price: 49 },
    7: { name: "Redmi Watch 3", description: "1.75\" AMOLED, GPS, 12-day battery life.", price: 99 },
    8: { name: "Mi Watch Lite", description: "1.4\" TFT display, 9-day battery, 5ATM water resistance.", price: 59 },
    9: { name: "Mi Smart Air Fryer", description: "3.5L capacity, app control, voice control with Alexa, 1500W power.", price: 99 },
    10: { name: "Mi Robot Vacuum-Mop 2", description: "2200Pa suction, smart mapping, app control, mopping function.", price: 299 },
    11: { name: "Mi Smart LED Bulb", description: "16 million colors, app control, voice control, energy-saving.", price: 19 },
    12: { name: "Mi 360° Home Security Camera", description: "2K resolution, 360° view, motion detection, night vision.", price: 49 },
    13: { name: "Mi Electric Scooter", description: "30km range, 25km/h max speed, foldable design, app control.", price: 399 },
    14: { name: "Mi Air Purifier", description: "HEPA filter, 400m³/h CADR, app control, quiet operation.", price: 149 },
    15: { name: "Mi Electric Kettle", description: "1.5L capacity, 1800W power, temperature control, stainless steel.", price: 39 },
    16: { name: "Mi City Backpack", description: "20L capacity, water-resistant, laptop compartment, minimalist design.", price: 29 },
    17: { name: "POCO F7 Pro", description: "Snapdragon 8 Gen 2, 120Hz AMOLED, 64MP camera, 5000mAh battery.", price: 499 },
    18: { name: "POCO C75", description: "MediaTek Helio G81, 6.88\" HD+ 90Hz display, 50MP camera, 5160mAh battery.", price: 199 },
    19: { name: "POCO X6 Pro", description: "Dimensity 8300 Ultra, 120Hz AMOLED, 67W fast charging, 5000mAh battery.", price: 349 },
    20: { name: "POCO M6 Pro", description: "Snapdragon 4 Gen 2, 6.79\" FHD+ 90Hz display, 50MP camera, 5000mAh battery.", price: 229 },
    21: { name: "Xiaomi Pad 6S Pro", description: "12.4 inch 3K display, Snapdragon 8 Gen 2, 10000mAh battery, 120W fast charging.", price: 599 },
    22: { name: "Redmi Pad SE", description: "11 inch FHD+ display, Snapdragon 680, 8000mAh battery, budget-friendly.", price: 199 },
    23: { name: "Xiaomi 14T Pro", description: "Dimensity 9300+, 6.67 inch AMOLED 144Hz, 50MP Leica camera, 5000mAh battery.", price: 699 },
    24: { name: "Redmi Note 14 Pro", description: "6.67 inch AMOLED 120Hz, Snapdragon 7 Gen 2, 50MP camera, 5500mAh battery.", price: 349 },
    25: { name: "Xiaomi Watch S3", description: "1.43 inch AMOLED, heart rate, SpO2, 15-day battery life.", price: 179 },
    26: { name: "Redmi Buds 5 Pro", description: "Hi-Res audio, 46dB ANC, 38-hour battery life.", price: 79 },
    27: { name: "Xiaomi Smart Band 9", description: "1.62 inch AMOLED, heart rate, SpO2, 21-day battery life.", price: 59 },
    28: { name: "Redmi Watch 4", description: "1.97 inch AMOLED, Bluetooth calling, 20-day battery life.", price: 129 },
    29: { name: "Xiaomi Robot Vacuum X20+", description: "6000Pa suction, self-cleaning mop, app control, smart mapping.", price: 499 },
    30: { name: "Xiaomi Smart Air Purifier 4 Pro", description: "99.97% PM2.5 filtration, 60m² coverage, OLED display, app control.", price: 249 },
    31: { name: "Xiaomi Smart Camera C300", description: "2K resolution, 360° view, AI motion detection, two-way audio.", price: 59 },
    32: { name: "Xiaomi Smart Doorbell 3", description: "2K resolution, face recognition, two-way audio, app control.", price: 99 },
    33: { name: "Xiaomi Electric Scooter 4 Pro", description: "55km range, 25km/h max speed, 20% incline capability, foldable.", price: 599 },
    34: { name: "Xiaomi Smart Blender", description: "1000W power, 9 blending modes, app control, heating function.", price: 129 },
    35: { name: "Xiaomi Mijia Electric Kettle 2", description: "1.7L capacity, 1800W power, 5-minute boiling, double-layer insulation.", price: 49 },
    36: { name: "Xiaomi Mijia Nail Clipper Set", description: "5-piece stainless steel set, compact design, premium quality.", price: 19 },
    37: { name: "POCO F6", description: "Snapdragon 8s Gen 3, 6.67 inch AMOLED 120Hz, 50MP camera, 5000mAh battery.", price: 449 },
    38: { name: "POCO X6 Pro", description: "Dimensity 8300 Ultra, 6.67 inch AMOLED 120Hz, 64MP camera, 5000mAh battery.", price: 399 },
    39: { name: "POCO M6 Plus 5G", description: "Snapdragon 4 Gen 2, 6.79 inch 120Hz, 108MP camera, 5030mAh battery.", price: 279 },
    40: { name: "POCO Pad", description: "12.1 inch 2.5K display, Snapdragon 7 Gen 1, 10000mAh battery, 33W charging.", price: 399 }
};

// Modal sản phẩm
const modal = document.querySelector('.product-modal');
const modalImage = document.querySelector('.modal-image');
const modalSubImages = document.querySelectorAll('.modal-sub-image');
const modalTitle = document.querySelector('.modal-title');
const modalDescription = document.querySelector('.modal-description');
const modalPrice = document.querySelector('.modal-price');
const closeModal = document.querySelector('.close-modal');
const buyButton = document.querySelector('.buy-button');
let currentProductId = null; // Biến để lưu productId khi mở modal

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

function attachProductItemEvents() {
    document.querySelectorAll('.product-item').forEach(item => {
        item.addEventListener('click', () => {
            const productId = item.getAttribute('data-product-id');
            const product = products[productId];
            if (!product) return;

            currentProductId = productId; // Lưu productId
            const images = JSON.parse(item.getAttribute('data-images'));

            modalTitle.textContent = product.name;
            modalDescription.textContent = product.description;
            modalPrice.textContent = `$${product.price}`;
            modalImage.src = images.main;

            modalSubImages[0].src = images.main;
            modalSubImages[1].src = images.sub1;
            modalSubImages[2].src = images.sub2;

            modal.style.display = 'block';
        });
    });
}

modalSubImages.forEach(img => {
    img.addEventListener('click', () => {
        modalImage.src = img.src;
        modalSubImages.forEach(sub => sub.classList.remove('active'));
        img.classList.add('active');
    });
});

// Giỏ hàng
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartUI() {
    const cartItems = document.querySelector('.cart-items');
    cartItems.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        document.querySelector('.empty-cart').style.display = 'block';
        document.querySelector('.cart-total').style.display = 'none';
    } else {
        document.querySelector('.empty-cart').style.display = 'none';
        document.querySelector('.cart-total').style.display = 'block';

        cart.forEach((cartItem, index) => {
            const product = products[cartItem.id];
            const itemTotal = product.price * cartItem.quantity;
            total += itemTotal;

            const cartItemElement = document.createElement('div');
            cartItemElement.classList.add('cart-item');
            cartItemElement.innerHTML = `
                <img src="${JSON.parse(document.querySelector(`[data-product-id="${cartItem.id}"]`).getAttribute('data-images')).main}" alt="${product.name}">
                <div class="cart-item-details">
                    <h3>${product.name}</h3>
                    <p>Price: $${product.price}</p>
                    <p>Quantity: ${cartItem.quantity}</p>
                    <p>Total: $${itemTotal}</p>
                    <button class="remove-from-cart" data-index="${index}">Remove</button>
                </div>
            `;
            cartItems.appendChild(cartItemElement);
        });

        document.querySelectorAll('.remove-from-cart').forEach(button => {
            button.addEventListener('click', () => {
                const index = button.getAttribute('data-index');
                cart.splice(index, 1);
                localStorage.setItem('cart', JSON.stringify(cart));
                updateCartUI();
            });
        });

        document.querySelector('.cart-total h3').textContent = `Total: $${total}`;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Xử lý nút Buy trong modal
buyButton.addEventListener('click', () => {
    if (!currentProductId) {
        console.error("No product ID found!");
        return;
    }

    const product = products[currentProductId];
    const cartItem = cart.find(item => item.id === currentProductId);

    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({ id: currentProductId, quantity: 1 });
    }

    console.log("Cart after adding:", cart); // Debug giỏ hàng
    localStorage.setItem('cart', JSON.stringify(cart)); // Lưu vào localStorage
    updateCartUI();
    modal.style.display = 'none';

    // Chuyển thẳng đến trang giỏ hàng
    document.querySelectorAll('.main-content, .store-section, .shopping-cart').forEach(section => {
        section.style.display = 'none';
    });
    document.querySelector('.shopping-cart').style.display = 'block';
});

// Menu điều hướng
document.querySelectorAll('.menu-left a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('data-section');
        document.querySelectorAll('.main-content, .store-section, .shopping-cart').forEach(section => {
            section.style.display = 'none';
        });
        document.querySelector(`.${sectionId}`).style.display = 'block';
        attachProductItemEvents();
    });
});

// Nút logo hoạt động như nút thoát
document.querySelector('.home-link').addEventListener('click', (e) => {
    e.preventDefault();
    if (modal.style.display === 'block') {
        modal.style.display = 'none';
    } else {
        document.querySelectorAll('.main-content, .store-section, .shopping-cart').forEach(section => {
            section.style.display = 'none';
        });
        document.querySelector('.main-content').style.display = 'block';
    }
});

// Icon giỏ hàng
document.querySelector('.cart-icon').addEventListener('click', () => {
    document.querySelectorAll('.main-content, .store-section, .shopping-cart').forEach(section => {
        section.style.display = 'none';
    });
    document.querySelector('.shopping-cart').style.display = 'block';
});

// User popover
const userIcon = document.querySelector('.user-icon-wrapper');
const popover = document.querySelector('.user-popover');
userIcon.addEventListener('click', () => {
    popover.classList.toggle('active');
});

// Nút back to top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', () => {
    const backToTop = document.querySelector('.back-to-top');
    if (window.scrollY > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

// Khởi tạo khi tải trang
document.addEventListener('DOMContentLoaded', () => {
    initializeSlider();
    initializeVideoSlider();
    updateCartUI();
    attachProductItemEvents();
});
// Xử lý sự kiện Log Out
document.querySelector('.logout-link').addEventListener('click', function(event) {
    event.preventDefault(); // Ngăn chuyển hướng mặc định để thêm logic

    // Hiển thị thông báo tùy chỉnh (nếu muốn)
    const alertBox = document.getElementById('custom-alert');
    const alertMessage = document.getElementById('alert-message');
    alertMessage.textContent = 'You have been logged out successfully!';
    alertBox.style.display = 'block';

    // Xóa dữ liệu giỏ hàng hoặc thông tin người dùng (nếu có)
    localStorage.clear(); // Ví dụ: Xóa toàn bộ dữ liệu trong localStorage

    // Chuyển hướng sau 2 giây
    setTimeout(() => {
        window.location.href = 'Signup.html';
    }, 2000); // Thời gian chờ 2 giây để người dùng thấy thông báo
});