const { default: mongoose } = require("mongoose");

const PricesScheme = new mongoose.Schema({
  priceSell: {
    pricesell1: {
      type: Number,
      required: true,
    },
    pricesell2: {
      type: Number,
      required: true,
    },
    pricesell3: {
      type: Number,
      required: true,
    },
    pricesell4: {
      type: Number,
      required: true,
    },
  },

  priceBuy : {
    pricebuy1: {
      type: Number,
      required: true,
    },
    pricebuy2: {
      type: Number,
      required: true,
    },
    pricebuy3: {
      type: Number,
      required: true,
    },
    pricebuy4: {
      type: Number,
      required: true,
    },
  },

  arrowup1: {
    type: String,
  },
  arrowup2: {
    type: String,
  },
  arrowup3: {
    type: String,
  },
  arrowup4: {
    type: String,
  },

  arrowdown1: {
    type: String,
  },
  arrowdown2: {
    type: String,
  },
  arrowdown3: {
    type: String,
  },
  arrowdown4: {
    type: String,
  },
});

const Prices = mongoose.model("Prices", PricesScheme);

module.exports = Prices;
