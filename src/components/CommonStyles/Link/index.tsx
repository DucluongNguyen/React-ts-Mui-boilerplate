import { makeStyles } from "@mui/styles";
import * as React from "react";
import { Link as LinkRouter } from "react-router-dom";

export interface IAppProps {
  to: string;
  children: React.ReactNode;
}

const useStyles = makeStyles((theme) => ({
  root: {
    textDecoration: "none",
    color: "inherit",
  },
}));

export default function Link({ to, children }: IAppProps) {
  // !State

  const classes = useStyles();

  // !Render
  return (
    <LinkRouter className={classes.root} to={to}>
      {children}
    </LinkRouter>
  );
}
