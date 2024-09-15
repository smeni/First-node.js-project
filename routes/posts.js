import express from "express";
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "../controllers/postController.js";
const router = express.Router();

//Get all
router.get("/", getPosts);

//Get by id
router.get("/:id", getPost);

// POST
router.post("/", createPost);

// Update post
router.put("/:id", updatePost);

// Delete post
router.delete("/:id", deletePost);

export default router;
