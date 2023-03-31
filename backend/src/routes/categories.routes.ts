import { Router } from "express";
import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { CategoryService } from "../services/CategoryService";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;
  const categoryService = new CategoryService(categoriesRepository);

  categoryService.create({ name, description });

  response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
  const all = categoriesRepository.listAll();
  response.json(all);
});

export { categoriesRoutes };
