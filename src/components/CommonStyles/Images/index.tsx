import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles(() => ({
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
}));
type Props = {
  src: string;
  alt: string;
};

const Image = (props: Props) => {
  // !State
  const classes = useStyles();
  const { src, alt, ...rest } = props;

  // !Render
  return <img className={classes.img} src={src} alt={alt} {...rest} />;
};

export default Image;
