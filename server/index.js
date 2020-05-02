require("dotenv").config();

const express = require("express"),
  massive = require("massive"),
  session = require("express-session"),
  authCtrl = require("./controllers/authController"),
  mainCtrl = require("./controllers/mainController"),
  mailCtrl = require("./controllers/mailController"),
  { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env,
  port = SERVER_PORT,
  app = express();

app.use(express.json());

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
  })
);

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
}).then((db) => {
  app.set("db", db);
  console.log("db connected");
});

//Auth endpoints
app.post('/auth/register', authCtrl.register);
app.post('/auth/login', authCtrl.login);
app.get('/auth/logout', authCtrl.logout);

//Main endpoint
app.get('/api/products', mainCtrl.getProducts);
app.post('/api/cart-item', mainCtrl.addToCart);
app.get(`/api/cart/:id`, mainCtrl.getCart);
app.delete('/api/cart-item/:id', mainCtrl.deleteCartItem);
app.post('/api/payment', mainCtrl.completePurchase);

//Nodemailer endpoint
app.post('/api/email', mailCtrl.email);

app.listen(port, () => console.log(`Server running on port ${port}`));
