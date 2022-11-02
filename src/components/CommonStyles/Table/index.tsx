import * as React from "react";
import { styled } from "@mui/material/styles";
import { Table as TableMui, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

interface Props {
  header: any[];
  body: any[];
}
export default function Table(props: Props) {
  const { header, body } = props;
  return (
    <TableContainer component={Paper}>
      <TableMui sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {header.map((el) => (
              <StyledTableCell align="right">{el}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {body.map((el) => (
            <StyledTableRow key={el.id}>
              {Object.values(el).map((cell: any) => (
                <StyledTableCell align="right">{cell}</StyledTableCell>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </TableMui>
    </TableContainer>
  );
}
