import { Category } from "../model/Category";

interface ICategoryDTO {
  name: string;
  description: string;
}

interface ICategory {
  findByName(name: string): Category;
  listAll(): Category[];
  create({ name, description }: ICategoryDTO): void;
}

export { ICategory, ICategoryDTO };
