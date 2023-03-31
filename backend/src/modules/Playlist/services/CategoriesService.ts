import { Category } from "../model/Category";
import {
  ICategoryRepository,
  ICategoryDTO,
} from "../repositories/Category/ICategoryRepository";

class CategoriesService {
  private repository: ICategoryRepository;

  constructor(repository: ICategoryRepository) {
    this.repository = repository;
  }

  public create({ name }: ICategoryDTO): void {
    const categoryAlreadyExists = this.repository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error("Category Alread exists!");
    }

    this.repository.create({ name });
  }

  public listAll(): Category[] {
    return this.repository.listAll();
  }
}

export { CategoriesService };
