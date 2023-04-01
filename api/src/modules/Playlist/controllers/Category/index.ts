import { CategoriesRepository } from "../../repositories/Category/CategoriesRepository";
import { CategoriesService } from "../../services/CategoriesService";
import { CategoriesController } from "./CategoriesController";

const categoryRepository = CategoriesRepository.getInstance();
const categoryService = new CategoriesService(categoryRepository);
const categoryController = new CategoriesController(categoryService);

export { categoryController };
