-- Electro storefront database bootstrap
-- Works with MySQL 8+ and MariaDB 10.5+.

CREATE DATABASE IF NOT EXISTS electro_store
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

USE electro_store;

CREATE TABLE IF NOT EXISTS categories (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(120) NOT NULL UNIQUE,
    slug VARCHAR(140) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS products (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    category_id INT UNSIGNED NOT NULL,
    sku VARCHAR(80) NOT NULL UNIQUE,
    name VARCHAR(180) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    old_price DECIMAL(10, 2),
    stock INT UNSIGNED NOT NULL DEFAULT 0,
    rating DECIMAL(2, 1) NOT NULL DEFAULT 0,
    image_path VARCHAR(255),
    is_featured BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_products_category
        FOREIGN KEY (category_id) REFERENCES categories(id)
        ON DELETE RESTRICT
);

CREATE TABLE IF NOT EXISTS customers (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(80) NOT NULL,
    last_name VARCHAR(80) NOT NULL,
    email VARCHAR(160) NOT NULL UNIQUE,
    phone VARCHAR(40),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS orders (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    customer_id INT UNSIGNED,
    status ENUM('pending', 'paid', 'shipped', 'completed', 'cancelled') NOT NULL DEFAULT 'pending',
    subtotal DECIMAL(10, 2) NOT NULL DEFAULT 0,
    shipping DECIMAL(10, 2) NOT NULL DEFAULT 0,
    total DECIMAL(10, 2) NOT NULL DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_orders_customer
        FOREIGN KEY (customer_id) REFERENCES customers(id)
        ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS order_items (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    order_id INT UNSIGNED NOT NULL,
    product_id INT UNSIGNED NOT NULL,
    quantity INT UNSIGNED NOT NULL DEFAULT 1,
    unit_price DECIMAL(10, 2) NOT NULL,
    line_total DECIMAL(10, 2) NOT NULL,
    CONSTRAINT fk_order_items_order
        FOREIGN KEY (order_id) REFERENCES orders(id)
        ON DELETE CASCADE,
    CONSTRAINT fk_order_items_product
        FOREIGN KEY (product_id) REFERENCES products(id)
        ON DELETE RESTRICT
);

INSERT INTO categories (name, slug) VALUES
    ('Accessories', 'accessories'),
    ('Electronics & Computer', 'electronics-computer'),
    ('Laptops & Desktops', 'laptops-desktops'),
    ('Mobiles & Tablets', 'mobiles-tablets'),
    ('SmartPhone & Smart TV', 'smartphone-smart-tv')
ON DUPLICATE KEY UPDATE name = VALUES(name);

INSERT INTO products (category_id, sku, name, description, price, old_price, stock, rating, image_path, is_featured)
SELECT c.id, 'IPAD-MINI-G2356', 'Apple iPad Mini G2356',
       'Compact tablet with a sharp display, fast performance, and all-day battery life.',
       1050.00, 1250.00, 20, 4.0, 'img/product-3.png', TRUE
FROM categories c WHERE c.slug = 'mobiles-tablets'
ON DUPLICATE KEY UPDATE price = VALUES(price), stock = VALUES(stock);

INSERT INTO products (category_id, sku, name, description, price, old_price, stock, rating, image_path, is_featured)
SELECT c.id, 'CAM-SMART-400', 'Smart Camera',
       'Smart camera with clear image quality and dependable recording for photos and video calls.',
       350.00, 420.00, 15, 4.0, 'img/product-4.png', TRUE
FROM categories c WHERE c.slug = 'electronics-computer'
ON DUPLICATE KEY UPDATE price = VALUES(price), stock = VALUES(stock);

INSERT INTO products (category_id, sku, name, description, price, old_price, stock, rating, image_path, is_featured)
SELECT c.id, 'HEAD-GAME-85', 'Gaming Headphones',
       'Comfortable headphones with strong sound, soft cushions, and a clear microphone.',
       85.00, 110.00, 25, 4.0, 'img/product-6.png', FALSE
FROM categories c WHERE c.slug = 'accessories'
ON DUPLICATE KEY UPDATE price = VALUES(price), stock = VALUES(stock);
