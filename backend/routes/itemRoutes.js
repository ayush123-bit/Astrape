import express from "express";
import { getItems, createItem, updateItem, deleteItem } from "../controllers/itemController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// Public route: anyone can view items with filters
router.get("/", getItems);

// Protected routes for CRUD
router.post("/", protect, createItem);
router.put("/:id", protect, updateItem);
router.delete("/:id", protect, deleteItem);

export default router;
