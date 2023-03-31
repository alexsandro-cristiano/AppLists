import { Category } from "../../model/Category";

interface ICategoryDTO {
  name: string;
}

interface ICategory {
  findByName(name: string): Category;
  listAll(): Category[];
  create({ name }: ICategoryDTO): void;
}

export { ICategory, ICategoryDTO };
