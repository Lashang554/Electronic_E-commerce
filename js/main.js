(function ($) {
    "use strict";

    var dummyApiBase = "https://dummyjson.com/products";
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
        },
        "product-18": {
            name: "Smartphone Pro",
            category: "Mobiles & Tablets",
            price: "$780.00",
            oldPrice: "$850.00",
            image: "img/product-18.png",
            sku: "PHONE-PRO-780",
            stock: 13,
            rating: 4,
            description: "Smartphone with a bright display, fast performance, quality camera, and reliable battery for everyday use.",
            details: "A strong option for calls, photos, apps, gaming, browsing, and social media."
        }
    };

    function getProductIdFromImage(src) {
        var match = src && src.match(/product-\d+/);
        return match ? match[0] : "";
    }

    function productUrl(id) {
        return "single.html?id=" + encodeURIComponent(id);
    }

    function formatCategory(category) {
        return String(category || "")
            .replace(/-/g, " ")
            .replace(/\b\w/g, function (letter) {
                return letter.toUpperCase();
            });
    }

    function formatPrice(price) {
        return "$" + Number(price || 0).toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    }

    function parsePrice(price) {
        return Number(String(price).replace(/[^0-9.]/g, ""));
    }

    function escapeHtml(value) {
        return String(value || "").replace(/[&<>"']/g, function (character) {
            return {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            }[character];
        });
    }

    function normalizeProduct(product) {
        if (product.title) {
            var price = Number(product.price || 0);
            var oldPrice = product.discountPercentage
                ? price / (1 - (Number(product.discountPercentage) / 100))
                : price;

            return {
                id: String(product.id),
                name: product.title,
                category: formatCategory(product.category),
                categorySlug: product.category,
                price: formatPrice(price),
                oldPrice: formatPrice(oldPrice),
                rawPrice: price,
                discount: Number(product.discountPercentage || 0),
                image: product.thumbnail || (product.images && product.images[0]) || "img/product-3.png",
                gallery: product.images && product.images.length ? product.images : [product.thumbnail],
                sku: product.sku || "N/A",
                stock: product.stock || 0,
                rating: Math.round(product.rating || 0),
                description: product.description || "",
                details: [
                    product.brand ? "Brand: " + product.brand : "",
                    product.warrantyInformation || "",
                    product.shippingInformation || "",
                    product.returnPolicy || ""
                ].filter(Boolean).join(" | "),
                reviews: product.reviews || []
            };
        }

        product.id = product.id || getProductIdFromImage(product.image);
        product.rawPrice = parsePrice(product.price);
        product.discount = product.discount || 0;
        product.categorySlug = String(product.category || "").toLowerCase().replace(/\s+/g, "-");
        product.gallery = product.gallery || [product.image];
        product.reviews = product.reviews || [];
        return product;
    }

    function setProducts(productList) {
        products = productList.reduce(function (catalog, product) {
            var normalized = normalizeProduct(product);
            catalog[normalized.id] = normalized;
            return catalog;
        }, {});
    }

    function fetchJson(url) {
        return fetch(url).then(function (response) {
            if (!response.ok) {
                throw new Error("Request failed: " + response.status);
            }

            return response.json();
        });
    }

    function getFallbackProducts() {
        return Object.keys(products).map(function (id) {
            return normalizeProduct($.extend({ id: id }, products[id]));
        });
    }

    function loadShopProducts() {
        return fetchJson(dummyApiBase + "?limit=0").then(function (response) {
            var items = response.products || [];

            if (!items.length) {
                throw new Error("No API products returned");
            }

            setProducts(items);
            return Object.keys(products).map(function (id) {
                return products[id];
            });
        }).catch(function () {
            var fallback = getFallbackProducts();
            setProducts(fallback);
            return fallback;
        });
    }

    function loadSingleProduct(id) {
        if (!id || !/^\d+$/.test(id)) {
            return Promise.resolve(normalizeProduct(products[id] || products["product-4"]));
        }

        return fetchJson(dummyApiBase + "/" + id).then(function (product) {
            return normalizeProduct(product);
        }).catch(function () {
            return normalizeProduct(products["product-4"]);
        });
    }

    function starMarkup(rating) {
        var stars = "";
        for (var i = 1; i <= 5; i++) {
            stars += '<i class="fa fa-star' + (i <= rating ? ' text-secondary' : '') + '"></i>';
        }
        return stars;
    }

    function productCardMarkup(product) {
        var name = escapeHtml(product.name);
        var category = escapeHtml(product.category);

        return '<div class="col-lg-4">' +
            '<div class="product-item rounded wow fadeInUp" data-product-id="' + product.id + '">' +
            '<div class="product-item-inner border rounded">' +
            '<div class="product-item-inner-item">' +
            '<img src="' + product.image + '" class="img-fluid w-100 rounded-top" alt="' + name + '">' +
            '<div class="product-new">New</div>' +
            '<div class="product-details"><a href="' + productUrl(product.id) + '"><i class="fa fa-eye fa-1x"></i></a></div>' +
            '</div>' +
            '<div class="text-center rounded-bottom p-4">' +
            '<a href="' + productUrl(product.id) + '" class="d-block mb-2">' + category + '</a>' +
            '<a href="' + productUrl(product.id) + '" class="d-block h4">' + name + '</a>' +
            '<del class="me-2 fs-5">' + product.oldPrice + '</del>' +
            '<span class="text-primary fs-5">' + product.price + '</span>' +
            '</div></div>' +
            '<div class="product-item-add border border-top-0 rounded-bottom text-center p-4 pt-0">' +
            '<a href="#" class="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-4"><i class="fas fa-shopping-cart me-2"></i> Add To Cart</a>' +
            '<div class="d-flex justify-content-between align-items-center">' +
            '<div class="d-flex">' + starMarkup(product.rating).replace(/text-secondary/g, "text-primary") + '</div>' +
            '<div class="d-flex">' +
            '<a href="#" class="text-primary d-flex align-items-center justify-content-center me-3"><span class="rounded-circle btn-sm-square border"><i class="fas fa-random"></i></span></a>' +
            '<a href="#" class="text-primary d-flex align-items-center justify-content-center me-0"><span class="rounded-circle btn-sm-square border"><i class="fas fa-heart"></i></span></a>' +
            '</div></div></div></div></div>';
    }

    function productListMarkup(product) {
        var name = escapeHtml(product.name);
        var category = escapeHtml(product.category);

        return '<div class="col-lg-6">' +
            '<div class="products-mini-item border" data-product-id="' + product.id + '">' +
            '<div class="row g-0">' +
            '<div class="col-5"><div class="products-mini-img border-end h-100">' +
            '<img src="' + product.image + '" class="img-fluid w-100 h-100" alt="' + name + '">' +
            '<div class="products-mini-icon rounded-circle bg-primary"><a href="' + productUrl(product.id) + '"><i class="fa fa-eye fa-1x text-white"></i></a></div>' +
            '</div></div>' +
            '<div class="col-7"><div class="products-mini-content p-3">' +
            '<a href="' + productUrl(product.id) + '" class="d-block mb-2">' + category + '</a>' +
            '<a href="' + productUrl(product.id) + '" class="d-block h4">' + name + '</a>' +
            '<del class="me-2 fs-5">' + product.oldPrice + '</del>' +
            '<span class="text-primary fs-5">' + product.price + '</span>' +
            '</div></div></div>' +
            '<div class="products-mini-add border p-3">' +
            '<a href="#" class="btn btn-primary border-secondary rounded-pill py-2 px-4"><i class="fas fa-shopping-cart me-2"></i> Add To Cart</a>' +
            '<div class="d-flex">' +
            '<a href="#" class="text-primary d-flex align-items-center justify-content-center me-3"><span class="rounded-circle btn-sm-square border"><i class="fas fa-random"></i></span></a>' +
            '<a href="#" class="text-primary d-flex align-items-center justify-content-center me-0"><span class="rounded-circle btn-sm-square border"><i class="fas fa-heart"></i></span></a>' +
            '</div></div></div></div>';
    }

    function productMiniMarkup(product) {
        var name = escapeHtml(product.name);
        var category = escapeHtml(product.category);
        var discount = Math.round(product.discount || 0);
        var badge = discount > 0 ? '<span class="badge bg-secondary mb-2">' + discount + '% off</span>' : "";

        return '<div class="productImg-item products-mini-item border" data-product-id="' + product.id + '">' +
            '<div class="row g-0">' +
            '<div class="col-5"><div class="products-mini-img border-end h-100">' +
            '<img src="' + product.image + '" class="img-fluid w-100 h-100" alt="' + name + '">' +
            '<div class="products-mini-icon rounded-circle bg-primary"><a href="' + productUrl(product.id) + '"><i class="fa fa-eye fa-1x text-white"></i></a></div>' +
            '</div></div>' +
            '<div class="col-7"><div class="products-mini-content p-3">' +
            badge +
            '<a href="' + productUrl(product.id) + '" class="d-block mb-2">' + category + '</a>' +
            '<a href="' + productUrl(product.id) + '" class="d-block h4">' + name + '</a>' +
            '<del class="me-2 fs-5">' + product.oldPrice + '</del>' +
            '<span class="text-primary fs-5">' + product.price + '</span>' +
            '</div></div></div>' +
            '<div class="products-mini-add border p-3">' +
            '<a href="#" class="btn btn-primary border-secondary rounded-pill py-2 px-4"><i class="fas fa-shopping-cart me-2"></i> Add To Cart</a>' +
            '<div class="d-flex">' +
            '<a href="#" class="text-primary d-flex align-items-center justify-content-center me-3"><span class="rounded-circle btn-sm-square border"><i class="fas fa-random"></i></span></a>' +
            '<a href="#" class="text-primary d-flex align-items-center justify-content-center me-0"><span class="rounded-circle btn-sm-square border"><i class="fas fa-heart"></i></span></a>' +
            '</div></div></div>';
    }

    function homeProductCardMarkup(product) {
        var name = escapeHtml(product.name);
        var category = escapeHtml(product.category);
        var discount = Math.round(product.discount || 0);
        var badge = discount > 0
            ? '<div class="product-sale">' + discount + '% off</div>'
            : '<div class="product-new">New</div>';

        return '<div class="col-md-6 col-lg-4 col-xl-3">' +
            '<div class="product-item rounded wow fadeInUp" data-product-id="' + product.id + '">' +
            '<div class="product-item-inner border rounded">' +
            '<div class="product-item-inner-item">' +
            '<img src="' + product.image + '" class="img-fluid w-100 rounded-top" alt="' + name + '">' +
            badge +
            '<div class="product-details"><a href="' + productUrl(product.id) + '"><i class="fa fa-eye fa-1x"></i></a></div>' +
            '</div>' +
            '<div class="text-center rounded-bottom p-4">' +
            '<a href="' + productUrl(product.id) + '" class="d-block mb-2">' + category + '</a>' +
            '<a href="' + productUrl(product.id) + '" class="d-block h4">' + name + '</a>' +
            '<del class="me-2 fs-5">' + product.oldPrice + '</del>' +
            '<span class="text-primary fs-5">' + product.price + '</span>' +
            '</div></div>' +
            '<div class="product-item-add border border-top-0 rounded-bottom text-center p-4 pt-0">' +
            '<a href="#" class="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-4"><i class="fas fa-shopping-cart me-2"></i> Add To Cart</a>' +
            '<div class="d-flex justify-content-between align-items-center">' +
            '<div class="d-flex">' + starMarkup(product.rating).replace(/text-secondary/g, "text-primary") + '</div>' +
            '<div class="d-flex">' +
            '<a href="#" class="text-primary d-flex align-items-center justify-content-center me-3"><span class="rounded-circle btn-sm-square border"><i class="fas fa-random"></i></span></a>' +
            '<a href="#" class="text-primary d-flex align-items-center justify-content-center me-0"><span class="rounded-circle btn-sm-square border"><i class="fas fa-heart"></i></span></a>' +
            '</div></div></div></div></div>';
    }

    function bestsellerCardMarkup(product) {
        return '<div class="col-md-6 col-lg-6 col-xl-4 wow fadeInUp">' + productMiniMarkup(product) + '</div>';
    }

    function getDiscountInfo(product) {
        var price = Number(product.rawPrice || parsePrice(product.price));
        var oldPrice = Number(parsePrice(product.oldPrice));

        if (!oldPrice || oldPrice <= price) {
            oldPrice = price * 1.2;
        }

        var saveAmount = Math.max(oldPrice - price, 0);
        var discountPercent = oldPrice ? Math.round((saveAmount / oldPrice) * 100) : 0;

        return {
            oldPrice: oldPrice,
            price: price,
            saveAmount: saveAmount,
            discountPercent: discountPercent
        };
    }

    function selectFeaturedProducts(productList, count) {
        return productList
            .slice()
            .sort(function (first, second) {
                return getDiscountInfo(second).discountPercent - getDiscountInfo(first).discountPercent;
            })
            .slice(0, count);
    }

    function renderHomeHighlights(productList) {
        if (!productList || !productList.length) {
            return;
        }

        var featured = selectFeaturedProducts(productList, 4);
        var headerProducts = featured.slice(0, 2);
        var specialOffer = featured[0];
        var saleOffer = featured[1] || featured[0];

        $(".header-carousel .header-carousel-item").each(function (index) {
            var product = headerProducts[index] || headerProducts[0];
            if (!product) {
                return;
            }

            var discount = getDiscountInfo(product);
            var item = $(this);
            item.find(".carousel-img img").attr({
                src: product.image,
                alt: product.name
            });
            item.find("h4").first().text("Save Up To A " + formatPrice(discount.saveAmount));
            item.find("h1").first().text("On Selected " + product.category + " Deals");
            item.find("p.text-dark").first().text(product.description || "Terms and Condition Apply");
            item.find("a.btn").first().attr("href", productUrl(product.id));
        });

        if (specialOffer) {
            var specialDiscount = getDiscountInfo(specialOffer);
            var banner = $(".carousel-header-banner");
            banner.find("> img").attr({
                src: specialOffer.image,
                alt: specialOffer.name
            });
            banner.find(".carousel-banner-offer .bg-primary").first().text("Save " + formatPrice(specialDiscount.saveAmount));
            banner.find(".carousel-banner-offer .text-primary").last().text("Special Offer");
            banner.find(".carousel-banner-content a.d-block").first().text(specialOffer.category).attr("href", productUrl(specialOffer.id));
            banner.find(".carousel-banner-content a.d-block.text-white").first().html(escapeHtml(specialOffer.name)).attr("href", productUrl(specialOffer.id));
            banner.find(".carousel-banner-content del").first().text(specialOffer.oldPrice);
            banner.find(".carousel-banner-content span.text-primary").first().text(specialOffer.price);
            banner.find(".carousel-banner .btn").first().attr("href", productUrl(specialOffer.id));
        }

        $(".container-fluid.bg-light.py-5 .row.g-4 > .col-lg-6").each(function (index) {
            var product = featured[index] || featured[0];
            if (!product) {
                return;
            }

            var discount = getDiscountInfo(product);
            var card = $(this).find("a.d-flex").first();
            card.attr("href", productUrl(product.id));
            card.find("p.text-muted").first().text("Best deal on " + product.category + " for you!");
            card.find("h3.text-primary").first().text(product.name);
            card.find("h1.display-3").first().html(discount.discountPercent + "% <span class=\"text-primary fw-normal\">Off</span>");
            card.find("img").first().attr({
                src: product.image,
                alt: product.name
            });
        });

        if (saleOffer) {
            var saleDiscount = getDiscountInfo(saleOffer);
            var saleBanner = $("img[src*='product-banner-2.jpg']").first().closest("a");
            if (saleBanner.length) {
                saleBanner.attr("href", productUrl(saleOffer.id));
                saleBanner.find("h2.display-2").first().text("SALE");
                saleBanner.find("h4.display-5").first().text("Get UP To " + saleDiscount.discountPercent + "% Off");
                saleBanner.find(".btn").first().attr("href", productUrl(saleOffer.id));
            }
        }
    }

    function renderShopProducts(productList) {
        var grid = $("#tab-5 .row.product");
        var list = $("#tab-6 .row.products-mini");
        var pagination = grid.find(".pagination").closest(".col-12").detach();

        if (!grid.length || !list.length) {
            return;
        }

        grid.empty();
        list.empty();

        productList.forEach(function (product, index) {
            grid.append($(productCardMarkup(product)).attr("data-original-index", index));
            list.append($(productListMarkup(product)).attr("data-original-index", index));
        });

        grid.append(pagination);
    }

    function renderHomeProductTabs(productList) {
        var sections = [
            {
                selector: "#tab-1 .row.g-4",
                products: productList.slice(0, 12)
            },
            {
                selector: "#tab-2 .row.g-4",
                products: productList.slice().sort(function (a, b) {
                    return Number(b.id) - Number(a.id);
                }).slice(0, 8)
            },
            {
                selector: "#tab-3 .row.g-4",
                products: productList.slice().sort(function (a, b) {
                    return b.rating - a.rating;
                }).slice(0, 8)
            },
            {
                selector: "#tab-4 .row.g-4",
                products: productList.slice().sort(function (a, b) {
                    return (b.discount || 0) - (a.discount || 0);
                }).slice(0, 8)
            }
        ];

        sections.forEach(function (section) {
            var row = $(section.selector).first();

            if (!row.length) {
                return;
            }

            row.empty();
            section.products.forEach(function (product) {
                row.append(homeProductCardMarkup(product));
            });
        });
    }

    function renderBestsellerProducts(productList) {
        var row = $(".products-mini h4").filter(function () {
            return $(this).text().trim() === "Bestseller Products";
        }).closest(".products-mini").find(".row.g-4").first();

        if (!row.length) {
            return;
        }

        row.empty();
        productList.slice().sort(function (a, b) {
            if (b.rating !== a.rating) {
                return b.rating - a.rating;
            }

            return (b.discount || 0) - (a.discount || 0);
        }).slice(0, 6).forEach(function (product) {
            row.append(bestsellerCardMarkup(product));
        });
    }

    function renderHomeProductCarousel(productList) {
        var carousel = $(".productList-carousel");

        if (!carousel.length) {
            return;
        }

        if (carousel.hasClass("owl-loaded")) {
            carousel.trigger("destroy.owl.carousel");
            carousel.removeClass("owl-loaded owl-hidden");
            carousel.find(".owl-stage-outer").children().unwrap();
        }

        carousel.find(".productImg-carousel").each(function () {
            var innerCarousel = $(this);
            if (innerCarousel.hasClass("owl-loaded")) {
                innerCarousel.trigger("destroy.owl.carousel");
                innerCarousel.removeClass("owl-loaded owl-hidden");
                innerCarousel.find(".owl-stage-outer").children().unwrap();
            }
        });

        carousel.empty();

        var carouselProducts = productList.slice().sort(function (a, b) {
            return (b.discount || 0) - (a.discount || 0);
        }).slice(0, 24);

        for (var i = 0; i < carouselProducts.length; i += 4) {
            var group = $('<div class="productImg-carousel owl-carousel productList-item"></div>');
            carouselProducts.slice(i, i + 4).forEach(function (product) {
                group.append(productMiniMarkup(product));
            });
            carousel.append(group);
        }

        $(".productImg-carousel").owlCarousel({
            autoplay: true,
            smartSpeed: 1500,
            dots: false,
            loop: true,
            items: 1,
            margin: 25,
            nav: true,
            navText: [
                '<i class="bi bi-arrow-left"></i>',
                '<i class="bi bi-arrow-right"></i>'
            ]
        });

        carousel.owlCarousel({
            autoplay: true,
            smartSpeed: 2000,
            dots: false,
            loop: true,
            margin: 25,
            nav: true,
            navText: [
                '<i class="fas fa-chevron-left"></i>',
                '<i class="fas fa-chevron-right"></i>'
            ],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
        });
    }

    function linkProductCards() {
        $(".product-item, .related-item, .featured-product-item, .products-mini-item").each(function () {
            var card = $(this);
            var id = card.attr("data-product-id") || getProductIdFromImage(card.find("img[src*='product-']").first().attr("src"));
            var product = products[id];

            if (!id || !product) {
                return;
            }

            card.attr("data-product-id", id);
            card.find(".product-details a, .related-details a, .products-mini-icon a").attr("href", productUrl(id));
            card.find(".text-center a.d-block, .products-mini-content a.d-block").first().text(product.category).attr("href", productUrl(id));
            card.find(".text-center a.h4, .products-mini-content a.h4").first().html(product.name).attr("href", productUrl(id));
            card.find("del").first().text(product.oldPrice);
            card.find(".text-primary.fs-5").first().text(product.price);
            card.find("h6").first().each(function () {
                var title = $(this);
                if (!title.find("a").length) {
                    title.html('<a class="text-dark" href="' + productUrl(id) + '">' + product.name + '</a>');
                }
            });
        });
    }

    function updateCategoryControls(productList) {
        var categories = productList.reduce(function (items, product) {
            if (items.indexOf(product.category) === -1) {
                items.push(product.category);
            }
            return items;
        }, []);

        $(".product-categories .categories-item").each(function (index) {
            var category = categories[index];
            if (category) {
                $(this).find("a").contents().last()[0].textContent = " " + category;
                $(this).find("span").text("(" + productList.filter(function (product) {
                    return product.category === category;
                }).length + ")");
            }
        });

        $(".additional-product-item").each(function (index) {
            var category = categories[index];
            if (category) {
                $(this).find("label").text(" " + category);
            }
        });
    }

    function initShopFilters() {
        var grid = $("#tab-5 .row.product");
        var list = $("#tab-6 .row.products-mini");

        if (!grid.length || !list.length) {
            return;
        }

        var state = {
            search: "",
            category: "all",
            maxPrice: Math.max.apply(null, Object.keys(products).map(function (id) {
                return products[id].rawPrice || parsePrice(products[id].price);
            })),
            sort: "default"
        };
        var maxCatalogPrice = state.maxPrice;
        var priceInput = $("#rangeInput");
        var amountOutput = $("#amount");
        var searchInput = $(".shop .col-xl-7 input[type='search']").first();
        var sortInput = $("#electronics");
        var categoryLinks = $(".product-categories .categories-item a");
        var categoryRadios = $(".additional-product input[type='radio']");
        var gridEmptyMessage = $('<div class="col-12 shop-empty-message d-none"><div class="alert alert-light border text-center mb-0">No products found. Try another search or filter.</div></div>');
        var listEmptyMessage = gridEmptyMessage.clone();

        grid.children().each(function (index) {
            $(this).attr("data-original-index", index);
        });
        list.children().each(function (index) {
            $(this).attr("data-original-index", index);
        });
        grid.append(gridEmptyMessage);
        list.append(listEmptyMessage);
        priceInput.attr({
            min: 0,
            max: Math.ceil(maxCatalogPrice),
            value: Math.ceil(maxCatalogPrice)
        });
        amountOutput.text(Math.ceil(maxCatalogPrice));

        function productMatches(product) {
            var text = [
                product.name,
                product.category,
                product.sku,
                product.description
            ].join(" ").toLowerCase();
            var searchMatch = !state.search || text.indexOf(state.search) !== -1;
            var categoryMatch = state.category === "all" || product.category.toLowerCase() === state.category;
            var priceMatch = (product.rawPrice || parsePrice(product.price)) <= state.maxPrice;

            return searchMatch && categoryMatch && priceMatch;
        }

        function sortedCards(cards) {
            return cards.sort(function (a, b) {
                var first = products[$(a).find("[data-product-id]").attr("data-product-id")];
                var second = products[$(b).find("[data-product-id]").attr("data-product-id")];

                if (!first || !second) {
                    return 0;
                }

                if (state.sort === "price-low") {
                    return first.rawPrice - second.rawPrice;
                }

                if (state.sort === "price-high") {
                    return second.rawPrice - first.rawPrice;
                }

                if (state.sort === "rating") {
                    return second.rating - first.rating;
                }

                if (state.sort === "newest") {
                    return Number(second.id) - Number(first.id);
                }

                return Number($(a).attr("data-original-index")) - Number($(b).attr("data-original-index"));
            });
        }

        function applyToContainer(container, itemSelector) {
            var visibleCount = 0;
            var cards = container.children().filter(function () {
                return $(this).find(itemSelector).length;
            }).get();

            sortedCards(cards).forEach(function (column) {
                var item = $(column).find(itemSelector).first();
                var product = products[item.attr("data-product-id")];
                var visible = product && productMatches(product);

                $(column).toggle(!!visible);
                container.append(column);

                if (visible) {
                    visibleCount++;
                }
            });

            return visibleCount;
        }

        function applyFilters() {
            var gridCount = applyToContainer(grid, ".product-item");
            var listCount = applyToContainer(list, ".products-mini-item");

            gridEmptyMessage.toggleClass("d-none", gridCount !== 0);
            listEmptyMessage.toggleClass("d-none", listCount !== 0);
            grid.find(".pagination").closest(".col-12").toggle(gridCount !== 0);
        }

        searchInput.on("input", function () {
            state.search = $(this).val().trim().toLowerCase();
            applyFilters();
        });

        priceInput.on("input change", function () {
            state.maxPrice = Number($(this).val());
            amountOutput.text(state.maxPrice);
            applyFilters();
        });

        sortInput.on("change", function () {
            var value = $(this).val();
            state.sort = value === "audio" ? "price-low" :
                value === "audi" ? "price-high" :
                value === "opel" ? "rating" :
                value === "saab" ? "newest" : "default";
            applyFilters();
        });

        categoryLinks.on("click", function (event) {
            event.preventDefault();
            state.category = $(this).text().trim().toLowerCase();
            categoryLinks.removeClass("text-primary").addClass("text-dark");
            $(this).removeClass("text-dark").addClass("text-primary");
            categoryRadios.prop("checked", false);
            applyFilters();
        });

        categoryRadios.on("change", function () {
            state.category = $("label[for='" + this.id + "']").text().trim().toLowerCase();
            categoryLinks.removeClass("text-primary").addClass("text-dark");
            applyFilters();
        });

        applyFilters();
    }

    function renderSingleProduct(product) {
        if (!$(".single-product").length) {
            return;
        }

        var carousel = $(".single-carousel");
        var galleryImages = (product.gallery && product.gallery.length ? product.gallery : [product.image]).filter(Boolean);
        var galleryHtml = galleryImages.map(function (image) {
            return '<div class="single-item" data-dot="<img class=\'img-fluid\' src=\'' + image + '\' alt=\'\'>">' +
                '<div class="single-inner bg-light rounded">' +
                '<img src="' + image + '" class="img-fluid rounded" alt="' + product.name + '">' +
                '</div></div>';
        }).join("");

        document.title = product.name + " - Electro";
        if (carousel.hasClass("owl-loaded")) {
            carousel.trigger("destroy.owl.carousel");
            carousel.removeClass("owl-loaded owl-hidden");
            carousel.find(".owl-stage-outer").children().unwrap();
        }
        carousel.html(galleryHtml);
        carousel.owlCarousel({
            autoplay: true,
            smartSpeed: 1500,
            dots: true,
            dotsData: true,
            loop: true,
            items: 1,
            nav: true,
            navText: [
                '<i class="bi bi-arrow-left"></i>',
                '<i class="bi bi-arrow-right"></i>'
            ]
        });
        $(".single-product h4.fw-bold").first().text(product.name);
        $(".single-product .col-xl-6").eq(1).find("p.mb-3").first().text("Category: " + product.category);
        $(".single-product .col-xl-6").eq(1).find("h5.fw-bold").first().text(product.price);
        $(".single-product .col-xl-6").eq(1).find(".d-flex.mb-4").first().html(starMarkup(product.rating));
        $(".single-product small").eq(0).text("Product SKU: " + product.sku);
        $(".single-product small strong").first().text(product.stock + " items in stock");
        $(".single-product .col-xl-6").eq(1).find("p.mb-4").eq(0).text(product.description);
        $(".single-product .col-xl-6").eq(1).find("p.mb-4").eq(1).text(product.details || "Product data loaded from DummyJSON.");
        $("#nav-about p").first().html(product.description + " <b class=\"fw-bold\">" + product.name + "</b> is loaded from DummyJSON using the product ID in the page URL.");
    }

    function initProducts() {
        if ($("#tab-5 .row.product").length) {
            loadShopProducts().then(function (productList) {
                renderShopProducts(productList);
                updateCategoryControls(productList);
                linkProductCards();
                initShopFilters();
            }).catch(function () {
                linkProductCards();
            });
        } else if ($(".productList-carousel").length) {
            loadShopProducts().then(function (productList) {
                renderHomeHighlights(productList);
                renderHomeProductTabs(productList);
                renderHomeProductCarousel(productList);
                renderBestsellerProducts(productList);
                linkProductCards();
            }).catch(function () {
                linkProductCards();
            });
        } else {
            linkProductCards();
        }

        if ($(".single-product").length) {
            var requestedId = new URLSearchParams(window.location.search).get("id") || "1";
            loadSingleProduct(requestedId).then(renderSingleProduct).catch(function () {
                renderSingleProduct(normalizeProduct(products["product-4"]));
            });
        }
    }

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show').remove();
            }
        }, 1);
    };
    spinner(0);

    initProducts();
    
    
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
