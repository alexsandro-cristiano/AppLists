import { ICategory, ICategoryDTO } from "../repositories/Category/ICategory";

class CategoriesService {
  private repository: ICategory;

  constructor(repository: ICategory) {
    this.repository = repository;
  }

  public create({ name }: ICategoryDTO): void {
    const categoryAlreadyExists = this.repository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error("Category Alread exists!");
    }

    this.repository.create({ name });
  }
}

export { CategoriesService };
