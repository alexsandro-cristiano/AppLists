import { Request, Response } from "express";
import { CategoriesService } from "../../services/CategoriesService";

class CategoriesController {
  private services: CategoriesService;

  constructor(service: CategoriesService) {
    this.services = service;
  }

  public handleCreate(request: Request, response: Response): Response {
    const { name } = request.body;

    this.services.create({ name });
    return response.status(201).send();
  }

  public handleList(request: Request, response: Response): Response {
    const { name } = request.body;

    this.services.create({ name });
    return response.status(201).send();
  }
}

export { CategoriesController };
