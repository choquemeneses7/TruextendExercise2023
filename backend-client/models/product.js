const db = require('../config/db');

db.run(`CREATE TABLE IF NOT EXISTS products (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  image TEXT NOT NULL,
  price REAL NOT NULL
)`);

module.exports = {};
