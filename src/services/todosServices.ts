import axios from "axios";

import { ResponseGenerator } from "interfaces";
import TodoModel from "models/todo.model";
import { GET_TODOS_URL } from "constants/api";

import httpService from "./httpServices";
class TodosService {
  getTodos(): Promise<ResponseGenerator<TodoModel[]>> {
    return httpService.get(GET_TODOS_URL);
  }

  getInfiniteByScroll({ page }: any) {
    return httpService.get(`https://api.github.com/search/repositories?q=topic:react&per_page=40&page=${page}`);
  }

  getClassList(page: Number) {
    return axios.get(`http://103.226.250.81/izone_test/api/class/?page=${page}&page_size=10`, {
      headers: {
        Authorization: "token abe50ba08e4b80ca2366f41de715392ab965b5c3",
      },
    });
  }
}

export default new TodosService();
