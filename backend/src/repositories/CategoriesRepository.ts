import { Category } from "../model/Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

class CategoriesRepository {
  private categories: Category[];
  constructor() {
    this.categories = [];
  }
  public create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category();
    Object.assign(category, {
      name,
      description,
      create_at: new Date(),
    });
    this.categories.push(category);
  }

  public listAll(): Category[] {
    return this.categories;
  }
  public findByName(name: string): Category {
    const category = this.categories.find((cat) => cat.name === name);
    return category;
  }
}

export { CategoriesRepository };
