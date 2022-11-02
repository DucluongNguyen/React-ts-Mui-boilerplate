import { makeStyles } from "@mui/styles";
import classNames from "classnames";
import React from "react";
import { PADDING_SIDE } from "theme";

const useStyles = makeStyles((theme) => ({
  footer: {
    paddingLeft: PADDING_SIDE,
    paddingRight: PADDING_SIDE,
  },
}));

const Footer: React.FC = (props) => {
  // !State
  const classes = useStyles();

  // !Render
  return <div className={classNames("footer", classes.footer)}>This is footer</div>;
};

export default Footer;
