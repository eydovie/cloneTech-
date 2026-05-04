const mongoose = require("mongoose");
require("dotenv").config();

const Crypto = require("./models/Crypto");

const coins = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    price: 67432.5,
    change24h: 2.34,
    image: "https://assets.coingecko.com/coins/images/1/small/bitcoin.png",
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    price: 3521.8,
    change24h: 1.87,
    image: "https://assets.coingecko.com/coins/images/279/small/ethereum.png",
  },
  {
    name: "Solana",
    symbol: "SOL",
    price: 178.4,
    change24h: 5.21,
    image: "https://assets.coingecko.com/coins/images/4128/small/solana.png",
  },
  {
    name: "Cardano",
    symbol: "ADA",
    price: 0.58,
    change24h: -1.42,
    image: "https://assets.coingecko.com/coins/images/975/small/cardano.png",
  },
  {
    name: "Polygon",
    symbol: "MATIC",
    price: 0.92,
    change24h: 3.67,
    image:
      "https://assets.coingecko.com/coins/images/4713/small/matic-token-icon.png",
  },
  {
    name: "Chainlink",
    symbol: "LINK",
    price: 18.75,
    change24h: -0.83,
    image:
      "https://assets.coingecko.com/coins/images/877/small/chainlink-new-logo.png",
  },
  {
    name: "Avalanche",
    symbol: "AVAX",
    price: 38.9,
    change24h: 4.12,
    image:
      "https://assets.coingecko.com/coins/images/12559/small/Avalanche_Circle_RedWhite_Trans.png",
  },
  {
    name: "Polkadot",
    symbol: "DOT",
    price: 8.43,
    change24h: -2.15,
    image: "https://assets.coingecko.com/coins/images/12171/small/polkadot.png",
  },
  {
    name: "Dogecoin",
    symbol: "DOGE",
    price: 0.163,
    change24h: 6.54,
    image: "https://assets.coingecko.com/coins/images/5/small/dogecoin.png",
  },
  {
    name: "Shiba Inu",
    symbol: "SHIB",
    price: 0.0000245,
    change24h: -3.21,
    image: "https://assets.coingecko.com/coins/images/11939/small/shiba.png",
  },
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB...");

    await Crypto.deleteMany({});
    console.log("Cleared existing crypto data...");

    await Crypto.insertMany(coins);
    console.log(`✅ Successfully seeded ${coins.length} coins!`);

    mongoose.disconnect();
  } catch (error) {
    console.error("❌ Seeding failed:", error.message);
    process.exit(1);
  }
};

seedDB();
