import { Pagination as PaginationMui, PaginationProps } from "@mui/material";
import * as React from "react";

interface Props extends PaginationProps {
  onChangePage: () => void;
}
export default function Pagination(props: Props) {
  // !State
  const { count, page, onChangePage } = props;

  // !Function

  // !Return
  return <PaginationMui variant="outlined" shape="rounded" count={count} page={page} onChange={onChangePage} />;
}
