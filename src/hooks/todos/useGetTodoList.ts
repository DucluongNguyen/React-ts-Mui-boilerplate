import { useInfiniteQuery, useQuery } from "react-query";

import { getErrorMsg } from "helpers";
import { showError, showSuccess } from "helpers/toast";
import todosServices from "services/todosServices";

export const useGetTodoList = () => {
  return useQuery("get todos", todosServices.getTodos, {
    onError: (error) => showError(getErrorMsg(error)),
  });
};

export const useGetTodoInfinition = () => {
  return useInfiniteQuery(
    "get infinite data",
    async ({ pageParam = 1 }) => await todosServices.getInfiniteByScroll({ page: pageParam }),
    {
      getNextPageParam: (lastPage: any, allPages: any) => {
        return allPages.length + 1;
      },
      onError: (error) => showSuccess(getErrorMsg(error)),
    }
  );
};

export const useGetClass = (page: Number) => {
  return useInfiniteQuery(
    "get class",
    async ({ pageParam = 1 }) => await todosServices.getClassList(pageParam),

    {
      getNextPageParam: (lastPage: any, allPages: any) => {
        return allPages.length + 1 <= lastPage.data.total_pages ? allPages.length + 1 : undefined;
      },
      onError: (error) => showSuccess(getErrorMsg(error)),
    }
  );
};
