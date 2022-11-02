import { makeStyles } from "@mui/styles";
import React, { ReactNode, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const useStyles = makeStyles((theme) => ({
  detection: {
    // display: "flex",
    // visibility: "hidden",
    // height: "1px",
  },
}));
type Props = {
  children: ReactNode;
  onLoadMore: () => void; //fetchNextPage()
  isFetchingNextPage: boolean;
};

const ScrollInfinition = (props: Props) => {
  // !State
  //   const classes = useStyles();
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
      <div ref={ref}>{isFetchingNextPage ? "Loading more ..." : ""}</div>
    </React.Fragment>
  );
};

export default ScrollInfinition;
