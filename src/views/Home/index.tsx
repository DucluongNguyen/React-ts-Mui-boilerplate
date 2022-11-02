import React from "react";
import { useTranslation } from "react-i18next";

import { useGetTodoList } from "hooks/todos/useGetTodoList";
import LoadingScreen from "components/CommonStyles/LoadingScreen";

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  const { data, isLoading } = useGetTodoList();

  const todoList = data?.data || [];

  //! Render
  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div>
      <span>{t("message:hello")}</span>
      List Todo Example
      <hr />
      {todoList.map((todo) => (
        <div key={todo.id}>
          {todo.id} - {todo.title}
        </div>
      ))}
    </div>
  );
};
export default HomePage;
