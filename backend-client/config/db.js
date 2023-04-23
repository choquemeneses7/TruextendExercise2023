const sqlite3 = require('sqlite3').verbose();


const DBSOURCE = "catalog.db";

let db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    console.error(err.message);
    throw err;
  } else {
    console.log('Connected to SQLite database.');
    db.run(`CREATE TABLE product (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            category TEXT NOT NULL,
            image TEXT,
            price REAL NOT NULL
            )`,
      (err) => {
        if (err) {
        console.error("Table already exists");
          // Table already created
        } else {
          // Table just created, create some rows
            console.error("Creating Table");
          var insert = 'INSERT INTO product (name, category, image, price) VALUES (?,?,?,?)';
          db.run(insert, ["Mobile phone", "Electronics", "https://cdn.pixabay.com/photo/2017/04/03/15/52/mobile-phone-2198770_960_720.png", 1400.78]);
          db.run(insert, ["Laptop", "Electronics", "https://cdn.pixabay.com/photo/2014/05/02/21/50/home-office-336378_960_720.jpg", 900]);
          db.run(insert, ["T-Shirt", "Clothing", "https://cdn.pixabay.com/photo/2017/08/06/21/32/t-shirt-2595908_960_720.jpg", 25.99]);
          db.run(insert, ["Jeans", "Clothing", "https://cdn.pixabay.com/photo/2016/03/26/22/10/jeans-1281679_960_720.jpg", 60.5]);
        }
      });
    
      db.run(`
      CREATE TABLE IF NOT EXISTS category (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL
      )
    `);
  }
});

module.exports = db;
// Open a new SQLite database connection
// const db = new sqlite3.Database('./database.sqlite');

// // Create the product and category tables if they don't exist
// db.serialize(() => {
//   db.run(`
//     CREATE TABLE IF NOT EXISTS product (
//       id INTEGER PRIMARY KEY,
//       name TEXT NOT NULL,
//       category TEXT NOT NULL,
//       image_url TEXT NOT NULL,
//       price REAL NOT NULL
//     )
//   `);

//   db.run(`
//     CREATE TABLE IF NOT EXISTS category (
//       id INTEGER PRIMARY KEY,
//       name TEXT NOT NULL
//     )
//   `);
// });

// Export the database connection
module.exports = db;
