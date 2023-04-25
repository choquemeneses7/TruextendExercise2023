const db = require('../config/db');

// Product model
class Product {
  constructor(name, category_id, image, price) {
    this.name = name;
    this.category_id = category_id;
    this.image = image;
    this.price = price;
  }

  // Create a new product
  static create(product) {
    return new Promise((resolve, reject) => {
      db.run(
        'INSERT INTO product (name, category_id, image, price) VALUES (?, ?, ?, ?)',
        [product.name, product.category_id, product.image, product.price],
        function (err) {
          if (err) {
            reject(err);
          } else {
            resolve(this.lastID);
          }
        }
      );
    });
  }

  // Get all products
  static getAll() {
    return new Promise((resolve, reject) => {
      db.all(`SELECT p.id, p.name, p.price, c.name as category_name, p.image 
              FROM product p JOIN category c ON c.id = p.category_id`, [], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  // Get product by ID
  static getById(id) {
    return new Promise((resolve, reject) => {
      db.get(`SELECT p.id, p.name, p.price, c.name as category_name, p.image 
              FROM product p JOIN category c ON c.id = p.category_id 
              WHERE p.id = ?`, [id], (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
  }

  // Update product by ID
  static updateById(id, name, category_id, image, price) {
    return new Promise((resolve, reject) => {
      db.run(
        'UPDATE product SET name = ?, category_id = ?, image = ?, price = ? WHERE id = ?',
        [name, category_id, image, price, id],
        (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        }
      );
    });
  }

  // Delete product by ID
  static deleteById(id) {
    return new Promise((resolve, reject) => {
      db.run('DELETE FROM product WHERE id = ?', [id], (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }
}

module.exports = Product;
