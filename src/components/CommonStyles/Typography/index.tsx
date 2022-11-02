import React from "react";
import { Typography as TypographyMui, TypographyProps } from "@mui/material";

const Typography = (props: TypographyProps) => {
  return <TypographyMui {...props}>{props.children}</TypographyMui>;
};

export default Typography;
