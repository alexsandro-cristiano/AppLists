import { Category } from "../model/Category";
import { ICategory, ICategoryDTO } from "./ICategoriesRepository";

class CategoriesRepository implements ICategory {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  public create({ name, description }: ICategoryDTO): void {
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
