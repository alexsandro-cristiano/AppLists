import { Category } from "../../model/Category";
import { ICategoryRepository, ICategoryDTO } from "./ICategoryRepository";

class CategoriesRepository implements ICategoryRepository {
  private static INSTANCE: CategoriesRepository;
  private categories: Category[];

  private constructor() {
    this.categories = [];
  }

  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }
    return CategoriesRepository.INSTANCE;
  }

  public create({ name }: ICategoryDTO): void {
    const category = new Category();
    Object.assign(category, {
      name,
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
