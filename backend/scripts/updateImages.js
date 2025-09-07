import dotenv from "dotenv";
import connectDB from "../config/db.js";
import Item from "../models/Item.js";
import { imageMap } from "../imageMap.js";

dotenv.config();
await connectDB();

const updateImages = async () => {
  try {
    const ops = Object.entries(imageMap).map(([name, url]) => ({
      updateOne: {
        filter: { name },
        update: { $set: { image: url } },
      },
    }));

    if (ops.length > 0) {
      const result = await Item.bulkWrite(ops);
      console.log("✅ Images updated:", result.modifiedCount);
    } else {
      console.log("⚠️ No updates found");
    }
  } catch (error) {
    console.error("❌ Error updating images:", error);
  } finally {
    process.exit();
  }
};

await updateImages();
