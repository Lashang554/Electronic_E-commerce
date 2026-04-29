(function ($) {
    "use strict";

    var products = {
        "product-3": {
            name: "Apple iPad Mini G2356",
            category: "Mobiles & Tablets",
            price: "$1,050.00",
            oldPrice: "$1,250.00",
            image: "img/product-3.png",
            sku: "IPAD-MINI-G2356",
            stock: 20,
            rating: 4,
            description: "Compact tablet with a sharp display, fast performance, and all-day battery life for work, streaming, browsing, and everyday entertainment.",
            details: "A lightweight mobile device made for students, professionals, and home users who want a portable screen with reliable performance."
        },
        "product-4": {
            name: "Smart Camera",
            category: "Electronics & Computer",
            price: "$350.00",
            oldPrice: "$420.00",
            image: "img/product-4.png",
            sku: "CAM-SMART-400",
            stock: 15,
            rating: 4,
            description: "Smart camera with clear image quality, simple controls, and dependable recording for photos, video calls, and content creation.",
            details: "Built for clean shots, quick setup, and flexible everyday use at home, in the studio, or on the move."
        },
        "product-5": {
            name: "Camera Lens",
            category: "Accessories",
            price: "$120.00",
            oldPrice: "$160.00",
            image: "img/product-5.png",
            sku: "LENS-CAM-120",
            stock: 12,
            rating: 4,
            description: "Camera lens accessory designed to improve clarity, focus, and image detail for compatible camera systems.",
            details: "A useful upgrade for creators who want sharper product shots, portraits, and close-up photography."
        },
        "product-6": {
            name: "Gaming Headphones",
            category: "Accessories",
            price: "$85.00",
            oldPrice: "$110.00",
            image: "img/product-6.png",
            sku: "HEAD-GAME-85",
            stock: 25,
            rating: 4,
            description: "Comfortable headphones with strong sound, soft ear cushions, and a clear microphone for gaming, calls, and music.",
            details: "Tuned for long sessions with balanced audio and a lightweight fit."
        },
        "product-7": {
            name: "Smart Watch",
            category: "Accessories",
            price: "$199.00",
            oldPrice: "$249.00",
            image: "img/product-7.png",
            sku: "WATCH-SMART-199",
            stock: 18,
            rating: 4,
            description: "Smart watch with fitness tracking, notifications, activity monitoring, and a modern display for daily use.",
            details: "Keeps important updates, health stats, and time-saving tools close at hand."
        },
        "product-8": {
            name: "Bluetooth Speaker",
            category: "Electronics & Computer",
            price: "$75.00",
            oldPrice: "$95.00",
            image: "img/product-8.png",
            sku: "SPK-BT-75",
            stock: 30,
            rating: 4,
            description: "Portable Bluetooth speaker with clear sound, wireless pairing, and a durable body for indoor and outdoor listening.",
            details: "Easy to carry and simple to connect for music, podcasts, calls, and small gatherings."
        },
        "product-9": {
            name: "Wireless Earbuds",
            category: "Accessories",
            price: "$65.00",
            oldPrice: "$89.00",
            image: "img/product-9.png",
            sku: "EAR-BUD-65",
            stock: 22,
            rating: 4,
            description: "Wireless earbuds with a compact charging case, comfortable fit, and balanced sound for daily listening.",
            details: "Made for commuting, workouts, online classes, and hands-free calls."
        },
        "product-10": {
            name: "Laptop Pro",
            category: "Laptops & Desktops",
            price: "$899.00",
            oldPrice: "$999.00",
            image: "img/product-10.png",
            sku: "LAP-PRO-899",
            stock: 10,
            rating: 4,
            description: "Performance laptop for productivity, study, browsing, media, and everyday business work.",
            details: "A practical computer with enough speed and storage for common professional and personal tasks."
        },
        "product-11": {
            name: "Desktop Monitor",
            category: "Laptops & Desktops",
            price: "$230.00",
            oldPrice: "$280.00",
            image: "img/product-11.png",
            sku: "MON-DESK-230",
            stock: 14,
            rating: 4,
            description: "Desktop monitor with a clean display, slim profile, and comfortable viewing for work or entertainment.",
            details: "Good for office setups, study desks, coding, design previews, and streaming."
        },
        "product-12": {
            name: "Smart TV",
            category: "SmartPhone & Smart TV",
            price: "$699.00",
            oldPrice: "$799.00",
            image: "img/product-12.png",
            sku: "TV-SMART-699",
            stock: 8,
            rating: 4,
            description: "Smart TV with vivid display quality, streaming support, and simple controls for home entertainment.",
            details: "Designed for movies, shows, sports, and app-based viewing from one screen."
        },
        "product-13": {
            name: "Drone Camera",
            category: "Electronics & Computer",
            price: "$499.00",
            oldPrice: "$599.00",
            image: "img/product-13.png",
            sku: "DRONE-CAM-499",
            stock: 7,
            rating: 4,
            description: "Drone camera for aerial shots, travel videos, landscape views, and creative outdoor recording.",
            details: "A useful option for creators who want smooth flying shots and wider visual angles."
        },
        "product-14": {
            name: "Tablet Pro",
            category: "Mobiles & Tablets",
            price: "$420.00",
            oldPrice: "$480.00",
            image: "img/product-14.png",
            sku: "TAB-PRO-420",
            stock: 16,
            rating: 4,
            description: "Tablet with a large display, responsive performance, and a slim design for entertainment and productivity.",
            details: "Great for reading, drawing, video meetings, note-taking, and media use."
        },
        "product-15": {
            name: "Portable Projector",
            category: "Electronics & Computer",
            price: "$310.00",
            oldPrice: "$360.00",
            image: "img/product-15.png",
            sku: "PROJ-PORT-310",
            stock: 11,
            rating: 4,
            description: "Portable projector for movies, presentations, and small-room viewing with an easy setup.",
            details: "Useful for home theater nights, classroom demos, and lightweight business presentations."
        },
        "product-16": {
            name: "Power Bank",
            category: "Accessories",
            price: "$45.00",
            oldPrice: "$60.00",
            image: "img/product-16.png",
            sku: "PWR-BANK-45",
            stock: 40,
            rating: 4,
            description: "Portable power bank for charging phones, tablets, earbuds, and other USB-powered devices.",
            details: "A travel-friendly backup battery for busy days and emergency charging."
        },
        "product-17": {
            name: "Wireless Keyboard",
            category: "Accessories",
            price: "$55.00",
            oldPrice: "$75.00",
            image: "img/product-17.png",
            sku: "KEY-WIRE-55",
            stock: 28,
            rating: 4,
            description: "Wireless keyboard with responsive keys, clean design, and simple pairing for desktop or laptop setups.",
            details: "Comfortable for typing, studying, office work, and everyday computer use."
        }
    };

    function getProductIdFromImage(src) {
        var match = src && src.match(/product-\d+/);
        return match ? match[0] : "";
    }

    function productUrl(id) {
        return "single.html?id=" + encodeURIComponent(id);
    }

    function getProductFromUrl() {
        var requestedId = new URLSearchParams(window.location.search).get("id") || "product-4";
        return products[requestedId] || products["product-4"];
    }

    function starMarkup(rating) {
        var stars = "";
        for (var i = 1; i <= 5; i++) {
            stars += '<i class="fa fa-star' + (i <= rating ? ' text-secondary' : '') + '"></i>';
        }
        return stars;
    }

    function linkProductCards() {
        $(".product-item, .related-item, .featured-product-item").each(function () {
            var card = $(this);
            var id = getProductIdFromImage(card.find("img[src*='product-']").first().attr("src"));

            if (!id || !products[id]) {
                return;
            }

            card.find(".product-details a, .related-details a").attr("href", productUrl(id));
            card.find(".text-center a.d-block").first().attr("href", productUrl(id));
            card.find("h6").first().each(function () {
                var title = $(this);
                if (!title.find("a").length) {
                    title.html('<a class="text-dark" href="' + productUrl(id) + '">' + title.text() + '</a>');
                }
            });
        });
    }

    function renderSingleProduct() {
        if (!$(".single-product").length) {
            return;
        }

        var product = getProductFromUrl();
        var carousel = $(".single-carousel");
        var galleryImages = [
            product.image,
            "img/product-5.png",
            "img/product-6.png",
            "img/product-7.png",
            "img/product-3.png"
        ].filter(function (image, index, images) {
            return images.indexOf(image) === index;
        });
        var galleryHtml = galleryImages.map(function (image) {
            return '<div class="single-item" data-dot="<img class=\'img-fluid\' src=\'' + image + '\' alt=\'\'>">' +
                '<div class="single-inner bg-light rounded">' +
                '<img src="' + image + '" class="img-fluid rounded" alt="' + product.name + '">' +
                '</div></div>';
        }).join("");

        document.title = product.name + " - Electro";
        carousel.html(galleryHtml);
        $(".single-product h4.fw-bold").first().text(product.name);
        $(".single-product .col-xl-6").eq(1).find("p.mb-3").first().text("Category: " + product.category);
        $(".single-product .col-xl-6").eq(1).find("h5.fw-bold").first().text(product.price);
        $(".single-product .col-xl-6").eq(1).find(".d-flex.mb-4").first().html(starMarkup(product.rating));
        $(".single-product small").eq(0).text("Product SKU: " + product.sku);
        $(".single-product small strong").first().text(product.stock + " items in stock");
        $(".single-product .col-xl-6").eq(1).find("p.mb-4").eq(0).text(product.description);
        $(".single-product .col-xl-6").eq(1).find("p.mb-4").eq(1).text(product.details);
        $("#nav-about p").first().html(product.description + " <b class=\"fw-bold\">" + product.name + "</b> is selected from the product ID in the page URL.");
    }

    linkProductCards();
    renderSingleProduct();

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.nav-bar').addClass('sticky-top shadow-sm');
        } else {
            $('.nav-bar').removeClass('sticky-top shadow-sm');
        }
    });


    // Hero Header carousel
    $(".header-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 2000,
        center: false,
        dots: false,
        loop: true,
        margin: 0,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ]
    });


    // ProductList carousel
    $(".productList-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 2000,
        dots: false,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });

    // ProductList categories carousel
    $(".productImg-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        items: 1,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ]
    });


    // Single Products carousel
    $(".single-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        dotsData: true,
        loop: true,
        items: 1,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ]
    });


    // ProductList carousel
    $(".related-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });



    // Product Quantity
    $('.quantity button').on('click', function () {
        var button = $(this);
        var oldValue = button.parent().parent().find('input').val();
        if (button.hasClass('btn-plus')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        button.parent().parent().find('input').val(newVal);
    });


    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


   

})(jQuery);
