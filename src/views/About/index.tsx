/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import { useGetTodoInfinition } from "hooks/todos/useGetTodoList";
import commonStyles from "components/CommonStyles";

type Props = {};

const About = () => {
  // !State
  const { data, fetchNextPage, isFetchingNextPage } = useGetTodoInfinition();

  //   useEffect(() => {
  //     //* Clear cache data
  //     return () => {
  //       remove();
  //     };
  //   }, [remove]);

  // !Render
  return (
    <commonStyles.ScrollInfinition onLoadMore={fetchNextPage} isFetchingNextPage={isFetchingNextPage}>
      {(data?.pages || []).map((page, index) => (
        <div key={index}>
          {page.data.items.map((el: any) => (
            <p key={el.id}>{el.name}</p>
          ))}
        </div>
      ))}
    </commonStyles.ScrollInfinition>
  );
};

export default About;
