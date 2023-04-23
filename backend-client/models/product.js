const db = require('../config/db');

// Product model
class Product {
  constructor(name, category, image_url, price) {
    this.name = name;
    this.category = category;
    this.image_url = image_url;
    this.price = price;
  }

  // Create a new product
  static create(name, category, image_url, price) {
    return new Promise((resolve, reject) => {
      db.run(
        'INSERT INTO product (name, category, image_url, price) VALUES (?, ?, ?, ?)',
        [name, category, image_url, price],
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
      db.all(`SELECT p.id, p.name, p.price, c.name as category_name 
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
      db.get('SELECT * FROM product WHERE id = ?', [id], (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
  }

  // Update product by ID
  static updateById(id, name, category, image_url, price) {
    return new Promise((resolve, reject) => {
      db.run(
        'UPDATE product SET name = ?, category_id = ?, image_url = ?, price = ? WHERE id = ?',
        [name, category, image_url, price, id],
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

  // Get all products by Category
  static getAllByCategoryId(categoryId) {
    return new Promise((resolve, reject) => {
      db.all(`SELECT p.id, p.name, p.price, c.name as category_name 
              FROM product p JOIN category c ON c.id = p.category_id
              WHERE category_id = ?`, [categoryId], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }
}

module.exports = Product;
