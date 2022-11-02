import { makeStyles } from "@mui/styles";
import React, { ReactNode } from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    padding: 8,
  },
}));

type Props = {
  children: ReactNode;
};

const Container = (props: Props) => {
  // !State
  const classes = useStyles();

  // !Render
  return <div className={classes.container}>{props.children}</div>;
};

export default Container;
