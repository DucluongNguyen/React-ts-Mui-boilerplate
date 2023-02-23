import React, { ReactNode, useEffect } from "react";
import { useInView } from "react-intersection-observer";

type Props = {
  children: ReactNode;
  onLoadMore: () => void; //fetchNextPage()
  isFetchingNextPage: boolean;
};

const ScrollInfinition = (props: Props) => {
  // !State
  const { children, onLoadMore, isFetchingNextPage } = props;
  const { ref, inView } = useInView();

  // !Function
  useEffect(() => {
    onLoadMore();
  }, [inView]);

  // !Render
  return (
    <React.Fragment>
      {children}
      <div ref={ref}>{isFetchingNextPage ? "Loading ..." : ""}</div>
    </React.Fragment>
  );
};

export default ScrollInfinition;
