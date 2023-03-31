import { CategoriesRepository } from "../repositories/CategoriesRepository";

interface IProps {
  name: string;
  description: string;
}

class CategoryService {
  private repository: CategoriesRepository;

  constructor(repository: CategoriesRepository) {
    this.repository = repository;
  }

  public create({ description, name }: IProps): void {
    const categoryAlreadyExists = this.repository.findByName(name);
    if (categoryAlreadyExists) {
      throw new Error("Category Alread exists!");
    }
    this.repository.create({ name, description });
  }
}
export { CategoryService };
