import { Category } from "../../model/Category";

interface ICategoryDTO {
  name: string;
}

interface ICategoryRepository {
  findByName(name: string): Category;
  listAll(): Category[];
  create({ name }: ICategoryDTO): void;
}

export { ICategoryRepository, ICategoryDTO };
