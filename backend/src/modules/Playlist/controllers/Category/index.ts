import { CategoriesRepository } from "../../repositories/Category/CategoriesRepository";
import { CategoriesService } from "../../services/CategoriesService";
import { CategoriesController } from "./CategoriesController";

const categoryRepository = new CategoriesRepository();
const categoryService = new CategoriesService(categoryRepository);
const categoryController = new CategoriesController(categoryService);

export { categoryController };
