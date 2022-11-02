import {
  Dialog as DialogMui,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogProps,
  DialogTitle,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import * as React from "react";

interface Props extends DialogProps {
  isOpen: boolean;
  toggle: () => void;
  title: string;
  content: string | React.ReactNode;
  footer: string | React.ReactNode;
}

export default function Dialog(props: Props) {
  // !State
  const theme = useTheme();
  const { isOpen, toggle, title, content, footer } = props;

  return (
    <div>
      <DialogMui open={isOpen} onClose={toggle} aria-labelledby="responsive-dialog-title">
        <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{content}</DialogContentText>
        </DialogContent>
        <DialogActions>{footer}</DialogActions>
      </DialogMui>
    </div>
  );
}
