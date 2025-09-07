import mongoose from "mongoose";
import dotenv from "dotenv";
import Item from "./models/Item.js";
import connectDB from "./config/db.js";

dotenv.config();
await connectDB();

const products = [
  // Electronics
  {
    name: "iPhone 14",
    price: 70000,
    category: "Electronics",
    description: "Latest Apple iPhone with A15 Bionic chip",
    image: "https://via.placeholder.com/300x200.png?text=iPhone+14",
  },
  {
    name: "Samsung Galaxy S23",
    price: 65000,
    category: "Electronics",
    description: "Samsung flagship phone with Snapdragon processor",
    image: "https://via.placeholder.com/300x200.png?text=Galaxy+S23",
  },
  {
    name: "Sony WH-1000XM4",
    price: 25000,
    category: "Electronics",
    description: "Noise cancelling wireless headphones",
    image: "https://via.placeholder.com/300x200.png?text=Sony+Headphones",
  },
  {
    name: "Dell XPS 13 Laptop",
    price: 95000,
    category: "Electronics",
    description: "13-inch ultrabook with Intel i7",
    image: "https://via.placeholder.com/300x200.png?text=Dell+XPS+13",
  },
  {
    name: "Apple iPad Air",
    price: 55000,
    category: "Electronics",
    description: "10.9-inch iPad Air with M1 chip",
    image: "https://via.placeholder.com/300x200.png?text=iPad+Air",
  },

  // Clothing
  {
    name: "Nike Air Max",
    price: 5000,
    category: "Clothing",
    description: "Stylish running shoes",
    image: "https://via.placeholder.com/300x200.png?text=Nike+Air+Max",
  },
  {
    name: "Adidas Hoodie",
    price: 3000,
    category: "Clothing",
    description: "Comfortable cotton hoodie",
    image: "https://via.placeholder.com/300x200.png?text=Adidas+Hoodie",
  },
  {
    name: "Levi's Jeans",
    price: 2500,
    category: "Clothing",
    description: "Slim fit blue jeans",
    image: "https://via.placeholder.com/300x200.png?text=Levis+Jeans",
  },
  {
    name: "Puma T-Shirt",
    price: 1200,
    category: "Clothing",
    description: "Casual cotton T-shirt",
    image: "https://via.placeholder.com/300x200.png?text=Puma+TShirt",
  },
  {
    name: "Zara Jacket",
    price: 4500,
    category: "Clothing",
    description: "Trendy winter jacket",
    image: "https://via.placeholder.com/300x200.png?text=Zara+Jacket",
  },

  // Books
  {
    name: "Atomic Habits",
    price: 500,
    category: "Books",
    description: "Book by James Clear on habits and productivity",
    image: "https://via.placeholder.com/300x200.png?text=Atomic+Habits",
  },
  {
    name: "The Lean Startup",
    price: 600,
    category: "Books",
    description: "Guide for entrepreneurs by Eric Ries",
    image: "https://via.placeholder.com/300x200.png?text=Lean+Startup",
  },
  {
    name: "Rich Dad Poor Dad",
    price: 400,
    category: "Books",
    description: "Book on financial education by Robert Kiyosaki",
    image: "https://via.placeholder.com/300x200.png?text=Rich+Dad+Poor+Dad",
  },
  {
    name: "The Alchemist",
    price: 350,
    category: "Books",
    description: "Novel by Paulo Coelho",
    image: "https://via.placeholder.com/300x200.png?text=The+Alchemist",
  },
  {
    name: "Clean Code",
    price: 750,
    category: "Books",
    description: "Book on software craftsmanship by Robert C. Martin",
    image: "https://via.placeholder.com/300x200.png?text=Clean+Code",
  },

  // Accessories
  {
    name: "Fossil Watch",
    price: 8000,
    category: "Accessories",
    description: "Leather strap analog watch",
    image: "https://via.placeholder.com/300x200.png?text=Fossil+Watch",
  },
  {
    name: "Ray-Ban Sunglasses",
    price: 6500,
    category: "Accessories",
    description: "Classic aviator sunglasses",
    image: "https://via.placeholder.com/300x200.png?text=RayBan+Sunglasses",
  },
  {
    name: "Wildcraft Backpack",
    price: 2000,
    category: "Accessories",
    description: "Travel and laptop backpack",
    image: "https://via.placeholder.com/300x200.png?text=Wildcraft+Backpack",
  },
  {
    name: "Noise Smartwatch",
    price: 4000,
    category: "Accessories",
    description: "Smartwatch with fitness tracking",
    image: "https://via.placeholder.com/300x200.png?text=Noise+Smartwatch",
  },
  {
    name: "Boat Earbuds",
    price: 1500,
    category: "Accessories",
    description: "Wireless Bluetooth earbuds",
    image: "https://via.placeholder.com/300x200.png?text=Boat+Earbuds",
  },

  // Furniture
  {
    name: "Ikea Study Table",
    price: 6000,
    category: "Furniture",
    description: "Wooden study table with drawers",
    image: "https://via.placeholder.com/300x200.png?text=Study+Table",
  },
  {
    name: "Urban Ladder Sofa",
    price: 25000,
    category: "Furniture",
    description: "3-seater fabric sofa",
    image: "https://via.placeholder.com/300x200.png?text=Fabric+Sofa",
  },
  {
    name: "Nilkamal Chair",
    price: 1200,
    category: "Furniture",
    description: "Plastic chair for home and office",
    image: "https://via.placeholder.com/300x200.png?text=Plastic+Chair",
  },
  {
    name: "Wakefit Mattress",
    price: 10000,
    category: "Furniture",
    description: "Orthopedic memory foam mattress",
    image: "https://via.placeholder.com/300x200.png?text=Mattress",
  },
  {
    name: "Bookshelf",
    price: 3500,
    category: "Furniture",
    description: "5-shelf wooden bookshelf",
    image: "https://via.placeholder.com/300x200.png?text=Bookshelf",
  },
];

const importData = async () => {
  try {
    await Item.deleteMany();
    await Item.insertMany(products);
    console.log("✅ 25 Sample Products Inserted Successfully!");
    process.exit();
  } catch (error) {
    console.error("❌ Error inserting sample data:", error);
    process.exit(1);
  }
};

await importData();
