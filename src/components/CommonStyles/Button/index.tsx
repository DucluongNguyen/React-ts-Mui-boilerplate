import { Button as ButtonMui, ButtonProps } from "@mui/material";
import * as React from "react";

export interface IButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export default function Button(props: IButtonProps) {
  // !State
  const { children, ...rest } = props;

  // !Render
  return <ButtonMui {...rest}>{children}</ButtonMui>;
}
