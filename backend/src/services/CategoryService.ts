import { ICategory, ICategoryDTO } from "../repositories/ICategoriesRepository";

class CategoryService {
  private repository: ICategory;

  constructor(repository: ICategory) {
    this.repository = repository;
  }

  public create({ description, name }: ICategoryDTO): void {
    const categoryAlreadyExists = this.repository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error("Category Alread exists!");
    }

    this.repository.create({ name, description });
  }
}

export { CategoryService };
