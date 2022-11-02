import TodoModel from "models/todo.model";
import { GET_TODOS_URL } from "constants/api";
import { ResponseGenerator } from "interfaces";

import httpService from "./httpServices";

class TodosService {
  getTodos(): Promise<ResponseGenerator<TodoModel[]>> {
    return httpService.get(GET_TODOS_URL);
  }

  getInfiniteByScroll({ page }: any) {
    return httpService.get(`https://api.github.com/search/repositories?q=topic:react&per_page=40&page=${page}`);
  }
}

export default new TodosService();
