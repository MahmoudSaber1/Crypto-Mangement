// All Important Lib
const express = require("express");
const { default: mongoose } = require("mongoose");
const usersModels = require("./models/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const pricesModels = require("./models/Prices");
const cors = require("cors");
const path = require("path");

const JWT_SECRET = "nmradmincryptomangement";

// Define Express as app and PORT Number
const app = express();
const PORT = 5000;

// Require App Use
app.use(express.json());
app.use(cors());
require("dotenv").config();

// Connect To Mongo DB
mongoose.connect(process.env.DB, {
  useNewUrlParser: true,
});

// Add New User Manually
// app.get("/register", async (req, res) => {
//   const Name = "Shadi";
//   const Key = "shadi.sy.all";

//   const Keys = await bcrypt.hash(Key, 10);

//   try {
//     const users = await usersModels.create({
//       name: Name,
//       key: Keys,
//     });
//     console.log("User Create Success", users);
//   } catch (err) {
//     console.log(err);
//   }
// });

// Match User Key From DB to CLient
app.post("/login", async (req, res) => {
  const keyValue = req.body.keyValue;

  console.log(keyValue);
  const user = await usersModels.findOne({});
  console.log(user);

  if (!user) {
    return res.json({ status: "error", error: "User Not Found" });
  }

  if (await bcrypt.compare(keyValue, user.key)) {
    const token = jwt.sign({ id: user._id, name: user.name }, JWT_SECRET);

    return res.json({ status: "OK", data: token });
  }

  if (user) {
    res.send(`Welcome ${keyValue}`);
  } else {
    res.send(`${keyValue}`);
  }
});

// Update Data to Api
app.post("/prices", async (req, res, next) => {
  const PriceSell1 = req.body.PriceSell1;
  const PriceSell2 = req.body.PriceSell2;
  const PriceSell3 = req.body.PriceSell3;
  const PriceSell4 = req.body.PriceSell4;

  const PriceBuy1 = req.body.PriceBuy1;
  const PriceBuy2 = req.body.PriceBuy2;
  const PriceBuy3 = req.body.PriceBuy3;
  const PriceBuy4 = req.body.PriceBuy4;

  const arrowUp1 = req.body.arrowUp1;
  const arrowUp2 = req.body.arrowUp2;
  const arrowUp3 = req.body.arrowUp3;
  const arrowUp4 = req.body.arrowUp4;
  const arrowDown1 = req.body.arrowDown1;
  const arrowDown2 = req.body.arrowDown2;
  const arrowDown3 = req.body.arrowDown3;
  const arrowDown4 = req.body.arrowDown4;

  const id = "62186960c5defa1164631f2b";

  const price = {
    priceSell: {
      pricesell1: PriceSell1,
      pricesell2: PriceSell2,
      pricesell3: PriceSell3,
      pricesell4: PriceSell4,
    },

    priceBuy: {
      pricebuy1: PriceBuy1,
      pricebuy2: PriceBuy2,
      pricebuy3: PriceBuy3,
      pricebuy4: PriceBuy4,
    },

    arrowup1: arrowUp1,
    arrowup2: arrowUp2,
    arrowup3: arrowUp3,
    arrowup4: arrowUp4,
    arrowdown1: arrowDown1,
    arrowdown2: arrowDown2,
    arrowdown3: arrowDown3,
    arrowdown4: arrowDown4,
  };

  try {
    await pricesModels.updateOne({ _id: id }, { $set: price });
    res.send("Success Save Data");
  } catch (err) {
    console.log(err);
  }
});

// Route to Get All data From Api And Send it to Frontend
app.get("/prices", async (req, res) => {
  pricesModels.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }

    res.send(result);
  });
});

// That code for build Project to Heroku or any Panel

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   });
// }

// Port Listen
app.listen(process.env.PORT || PORT, () => {
  console.log(`Backend Server is Running To http://localhost:${PORT}`);
});
