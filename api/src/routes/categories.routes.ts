import { Router } from "express";
import { CategoriesRepository } from "../modules/Playlist/repositories/Category/CategoriesRepository";
import { categoryController } from "../modules/Playlist/controllers/Category";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  return categoryController.handleCreate(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  return categoryController.handleList(request, response);
});

export { categoriesRoutes };
