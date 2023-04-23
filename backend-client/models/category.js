const db = require('../config/db');

// Product model
class Category {
  constructor(name) {
    this.name = name;
  }

  // Get all Categories
  static getAll() {
    return new Promise((resolve, reject) => {
      db.all(`SELECT * 
            FROM category`, [], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }
}

module.exports = Category;
