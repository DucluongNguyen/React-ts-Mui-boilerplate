import { makeStyles } from "@mui/styles";
import { ReactNode } from "react";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: ({ style }: any) => {
      if (style.direction) {
        return style.direction;
      }
      return "row";
    },
    gap: ({ style }: any) => {
      if (style.gap) {
        return style.gap;
      }
      return 8;
    },
    width: "100%",
    justifyContent: ({ style }: any) => {
      if (style.justifyContent) {
        return style.justifyContent;
      }
      return "center";
    },
    alignItems: ({ style }: any) => {
      if (style.alignItems) {
        return style.alignItems;
      }
      return "center";
    },
  },
}));

interface StackProps extends React.FC {
  gap?: string;
  direction?: string;
  justifyContent?: string;
  alignItems?: string;
  className?: string;
  children: ReactNode;
}

const Stack = (props: StackProps) => {
  const classes = useStyles({ style: props });
  return <div className={classes.container}>{props.children}</div>;
};

export default Stack;
