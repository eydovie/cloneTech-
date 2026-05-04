const Crypto = require("../models/Crypto");

// GET /crypto - All cryptocurrencies
const getAllCrypto = async (req, res) => {
  try {
    const cryptos = await Crypto.find().sort({ createdAt: -1 });
    res.json({ success: true, data: cryptos });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET /crypto/gainers - Top gainers sorted by highest 24h change
const getGainers = async (req, res) => {
  try {
    const gainers = await Crypto.find({ change24h: { $gt: 0 } }).sort({
      change24h: -1,
    });
    res.json({ success: true, data: gainers });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET /crypto/new - Newest listings
const getNewListings = async (req, res) => {
  try {
    const newListings = await Crypto.find().sort({ createdAt: -1 });
    res.json({ success: true, data: newListings });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// POST /crypto - Add new cryptocurrency
const addCrypto = async (req, res) => {
  try {
    const { name, symbol, price, image, change24h } = req.body;

    if (!name || !symbol || price === undefined || change24h === undefined) {
      return res.status(400).json({
        success: false,
        message: "Please provide name, symbol, price, and change24h.",
      });
    }

    const crypto = await Crypto.create({ name, symbol, price, image, change24h });
    res.status(201).json({
      success: true,
      message: "Cryptocurrency added successfully.",
      data: crypto,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { getAllCrypto, getGainers, getNewListings, addCrypto };
