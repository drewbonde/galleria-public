const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mysql = require('mysql')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'gallery',
})


app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))


app.get('/api/get/customer', (req, res) => {
    const sqlSelect = "SELECT * FROM customer";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    })
})

app.post('/api/insert/customer', (req, res) => {
    const Id = req.body.Id;
    const Fname = req.body.Fname;
    const Lname = req.body.Lname;
    const email = req.body.email;
    const pass = req.body.pass;
    const address = req.body.address;
    const city = req.body.city;
    const state = req.body.state;
    const zip = req.body.zip;
    
    const sqlInsert = "INSERT INTO customer (CUSTOMER_ID, CUSTOMER_FNAME, CUSTOMER_LNAME, CUSTOMER_EMAIL, CUSTOMER_PASS, CUSTOMER_ADDRESS, CUSTOMER_CITY, CUSTOMER_STATE, CUSTOMER_ZIP) VALUES (?,?,?,?,?,?,?,?,?)";
    db.query(sqlInsert, [Id, Fname, Lname, email, pass, address, city, state, zip], (err, result) => {
        console.log(err);
    })
})

app.put('/api/update/customer/:id', (req, res) => {
    const id = req.params.id;
    const Fname = req.body.Fname;
    const Lname = req.body.Lname;
    const email = req.body.email;
    const pass = req.body.pass;
    const address = req.body.address;
    const city = req.body.city;
    const state = req.body.state;
    const zip = req.body.zip;

    const sqlUpdate = "UPDATE customer SET CUSTOMER_FNAME = ?, CUSTOMER_LNAME = ?, CUSTOMER_EMAIL = ?, CUSTOMER_PASS = ?, CUSTOMER_ADDRESS = ?, CUSTOMER_CITY = ?, CUSTOMER_STATE = ?, CUSTOMER_ZIP = ? WHERE CUSTOMER_ID = ?"
    db.query(sqlUpdate, [Fname, Lname, email, pass, address, city, state, zip, id], (err, result) => {
        console.log(err)
    })

})

app.get('/api/get/artist', (req, res) => {
    const sqlSelect = "SELECT * FROM artist";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    })
})

app.post('/api/insert/artist', (req, res) => {
    const id = req.body.Id;
    const name = req.body.name;
    const hometown = req.body.hometown;
    const country = req.body.country;
    const dob = req.body.dob;
    const email = req.body.email;

    const sqlInsert = "INSERT INTO artist (ARTIST_ID, ARTIST_NAME, ARTIST_HOMETOWN, ARTIST_COUNTRY, ARTIST_DOB, ARTIST_EMAIL) VALUES (?,?,?,?,?,?)";
    db.query(sqlInsert, [id, name, hometown, country, dob, email], (err, result) => {
        console.log(err)
    })
})

app.put('/api/update/artist/:id', (req, res) => {
    const id = req.params.id;
    const name = req.body.name;
    const hometown = req.body.hometown;
    const country = req.body.country;
    const dob = req.body.dob;
    const email = req.body.email;

    const sqlUpdate = "UPDATE artist SET ARTIST_NAME = ?, ARTIST_HOMETOWN = ?, ARTIST_COUNTRY = ?, ARTIST_DOB = ?, ARTIST_EMAIL = ? WHERE ARTIST_ID = ?"
    db.query(sqlUpdate, [name, hometown, country, dob, email, id], (err, result) => {
        console.log(err)
    })
})

app.get('/api/get/employee', (req, res) => {
    const sqlSelect = "SELECT * FROM employee";
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    })
})

app.post('/api/insert/employee', (req, res) => {
    const Id = req.body.Id;
    const Fname = req.body.Fname;
    const Lname = req.body.Lname;
    const email = req.body.email;
    const pass = req.body.pass;
    const startDate = req.body.startDate;
    
    const sqlInsert = "INSERT INTO employee (EMPLOYEE_ID, EMPLOYEE_FNAME, EMPLOYEE_LNAME, EMPLOYEE_EMAIL, EMPLOYEE_PASS, EMPLOYEE_START_DATE) VALUES (?,?,?,?,?,?)";
    db.query(sqlInsert, [Id, Fname, Lname, email, pass, startDate], (err, result) => {
        console.log(err);
    })
})

app.put('/api/update/employee/:id', (req, res) => {
    const id = req.params.id;
    const Fname = req.body.Fname;
    const Lname = req.body.Lname;
    const email = req.body.email;
    const pass = req.body.pass;
    const startDate = req.body.startDate;
    
    const sqlUpdate = "UPDATE employee SET EMPLOYEE_FNAME = ?, EMPLOYEE_LNAME = ?, EMPLOYEE_EMAIL = ?, EMPLOYEE_PASS = ?, EMPLOYEE_START_DATE = ? WHERE EMPLOYEE_ID = ?";
    db.query(sqlUpdate, [Fname, Lname, email, pass, startDate, id], (err, result) => {
        console.log(err)
    })
})

app.delete('/api/delete/employee/:id', (req, res) => {
    const id = req.params.id;
    const sqlDelete = "DELETE FROM employee WHERE EMPLOYEE_ID = ?";

    db.query(sqlDelete, id, (err,res) => {
        console.log(err)
    });
})

app.get('/api/get/museum', (req, res) => {
    const sqlSelect = "SELECT * FROM museum";
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    })
})

app.post('/api/insert/museum', (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const address = req.body.address;
    const city = req.body.city;
    const state = req.body.state;
    const zip = req.body.zip;
    const quantity = req.body.quantity;

    const sqlInsert = "INSERT INTO museum (MUSEUM_ID, MUSEUM_NAME, MUSEUM_STREET_ADDRESS, MUSEUM_CITY, MUSEUM_STATE, MUSEUM_ZIP, MUSEUM_QUANTITY) VALUES (?,?,?,?,?,?,?)";
    db.query(sqlInsert, [id, name, address, city, state, zip, quantity], (err, result) => {
        console.log(err)
    })
})

app.put('/api/update/museum/:id', (req, res) => {
    const id = req.params.id;
    const name = req.body.name;
    const address = req.body.address;
    const city = req.body.city;
    const state = req.body.state;
    const zip = req.body.zip;
    const quantity = req.body.quantity;

    const sqlUpdate = "UPDATE museum SET MUSEUM_NAME = ?, MUSEUM_STREET_ADDRESS = ?, MUSEUM_CITY = ?, MUSEUM_STATE = ?, MUSEUM_ZIP = ?, MUSEUM_QUANTITY = ? WHERE MUSEUM_ID = ?";
    db.query(sqlUpdate, [name, address, city, state, zip, quantity, id], (err, result) => {
        console.log(err)
    })
})

app.get('/api/get/POS', (req, res) => {
    const sqlSelect = "SELECT * FROM payment";
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    })
})

app.post('/api/insert/POS', (req, res) => {
    const id = req.body.id;
    const date = req.body.date;
    const method = req.body.method;
    const price = req.body.price;
    const custId = req.body.custId;
    const museumId = req.body.museumId;
    const pieceId = req.body.pieceId;

    const sqlInsert = "INSERT INTO payment (PAYMENT_ID, PAYMENT_DATE, PAYMENT_METHOD, PAYMENT_PRICE, CUSTOMER_ID, MUSEUM_ID, PIECE_ID) VALUES (?,?,?,?,?,?,?)";
    db.query(sqlInsert, [id, date, method, price, custId, museumId, pieceId], (err, result) => {
        console.log(err)
    })
})

app.put('/api/update/POS/:id', (req, res) => {
    const id = req.params.id;
    const date = req.body.date;
    const method = req.body.method;
    const price = req.body.price;

    const sqlUpdate = "UPDATE payment SET PAYMENT_DATE = ?, PAYMENT_METHOD = ?, PAYMENT_PRICE = ? WHERE PAYMENT_ID = ?";
    db.query(sqlUpdate, [date, method, price, id], (err, result) => {
        console.log(err)
    })
})

app.get('/api/get/piece', (req, res) => {
    const sqlSelect = "SELECT * FROM piece";
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    })
})

app.put('/api/update/piece/:id', (req, res) => {
    const id = req.params.id;
    const title = req.body.title;
    const desc = req.body.desc;
    const price = req.body.price;
    const date = req.body.dateAdded;
    const status = req.body.status;

    const sqlUpdate = "UPDATE piece SET PIECE_TITLE = ?, PIECE_DESCRIPTION = ?, PIECE_PRICE = ?, DATE_ADDED = ?, PIECE_STATUS = ? WHERE PIECE_ID = ?";
    db.query(sqlUpdate, [title, desc, price, date, status, id], (err, result) => {
        console.log(err)
    })
})

app.post('/api/insert/piece', (req, res) => {
    const id = req.body.id;
    const title = req.body.title;
    const year = req.body.year;
    const artistId = req.body.artistId;
    const desc = req.body.desc;
    const price = req.body.price;
    const date = req.body.date;
    const status = req.body.status;
    const museumId = req.body.museumId;
    const type = req.body.type;

    const sqlInsert = "INSERT INTO piece (PIECE_ID, PIECE_TITLE, PIECE_YEAR, ARTIST_ID, PIECE_DESCRIPTION, PIECE_PRICE, DATE_ADDED, PIECE_STATUS, MUSEUM_ID, PIECE_TYPE) VALUES (?,?,?,?,?,?,?,?,?,?)";
    db.query(sqlInsert, [id, title, year, artistId, desc, price, date, status, museumId, type], (err, result) => {
        console.log(err)
    })
})

app.get('/api/get/piece/user', (req, res) => {
    const sqlSelect = "SELECT * FROM piece WHERE PIECE_STATUS = 'For Sale'";
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    })
})

app.listen(3001, () => {
    console.log('running on port 3001')
});