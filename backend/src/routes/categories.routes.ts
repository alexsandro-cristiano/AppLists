import { Router } from "express";
import { CategoriesRepository } from "../modules/Playlist/repositories/Category/CategoriesRepository";
import { CategoryService } from "../modules/Playlist/services/CategoryService";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name } = request.body;
  const categoryService = new CategoryService(categoriesRepository);
  categoryService.create({ name });
  response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
  const all = categoriesRepository.listAll();
  response.json(all);
});

export { categoriesRoutes };
