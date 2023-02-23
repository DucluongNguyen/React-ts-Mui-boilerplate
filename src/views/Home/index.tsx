import React from "react";
import { useTranslation } from "react-i18next";

import { useGetClass } from "hooks/todos/useGetTodoList";
import commonStyles from "components/CommonStyles";

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  const { data, fetchNextPage, isFetchingNextPage } = useGetClass(1);

  const classList = data?.pages || [];

  //! Render

  return (
    <div>
      <span>{t("message:hello")}</span>
      List Class
      <hr />
      <commonStyles.ScrollInfinition onLoadMore={fetchNextPage} isFetchingNextPage={isFetchingNextPage}>
        {classList.map((el: any, index: number) => {
          return el?.data.results.map(() => {
            return (
              <div
                key={index}
                style={{ width: "100px", height: "200px", background: "red", marginBottom: "10px" }}
              ></div>
            );
          });
        })}
      </commonStyles.ScrollInfinition>
    </div>
  );
};
export default HomePage;
