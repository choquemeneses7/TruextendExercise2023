const sqlite3 = require('sqlite3').verbose();


const DBSOURCE = "catalog.db";

let db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    console.error(err.message);
    throw err;
  } else {
        db.run(`
            CREATE TABLE category (
            id INTEGER PRIMARY KEY,
            name TEXT NOT NULL
        )`,
        (err) => {
            if (err) {
            console.error("Table category already exists");
            // Table already created
            } else {
            // Table just created, create some rows
                console.error("Adding rows to Table category");
                var insert = 'INSERT INTO category (name) VALUES (?)';
                db.run(insert, ["Electronics"]);
                db.run(insert, ["Clothing"]);
            }
        });

        db.run(`
            CREATE TABLE product (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            category_id INTEGER NOT NULL,
            image TEXT,
            price REAL NOT NULL,
            FOREIGN KEY (category_id) REFERENCES category(id) ON DELETE CASCADE
        );`,
        (err) => {
        if (err) {
        console.error("Table product already exists");
        // Table already created
        } else {
            // Table just created, create some rows
            var insertCategory = 'INSERT INTO category (name) VALUES (?)';
            db.run(insertCategory, ["Electronics"]);
            db.run(insertCategory, ["Clothing"]);

            console.error("Adding rows to table product");
            var insert = 'INSERT INTO product (name, category_id, image, price) VALUES (?,?,?,?)';
            db.run(insert, ["Mobile phone", 1, "https://cdn.pixabay.com/photo/2017/04/03/15/52/mobile-phone-2198770_960_720.png", 1400.78]);
            db.run(insert, ["Laptop", 1, "https://cdn.pixabay.com/photo/2014/05/02/21/50/home-office-336378_960_720.jpg", 900]);
            db.run(insert, ["T-Shirt", 2, "https://cdn.pixabay.com/photo/2017/08/06/21/32/t-shirt-2595908_960_720.jpg", 25.99]);
            db.run(insert, ["Jeans", 2, "https://cdn.pixabay.com/photo/2016/03/26/22/10/jeans-1281679_960_720.jpg", 60.5]);
        }
    });
   
  }
});

module.exports = db;
