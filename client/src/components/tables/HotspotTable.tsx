import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { HotspotType } from "../../types";
import moment from "moment";
import { IconButton } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MenuComponent from "../MenuComponent";

type Props = {
  tableHead: Array<string>
  rows: Array<HotspotType>
}

function HotspotTable({tableHead, rows}: Props) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Avoid a layout jump when reaching the last page with empty data.
  const emptydata =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  function getGroupNames(list: Array<object>) {
    const arr = list.map((x: any) => x.groupname)
    return arr.join(', ')
  }
  
  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Paper
      className="paper"
      sx={{ mb: 1, borderRadius: 2, overflow: "hidden" }}
    >
      <TableContainer className="table-container">
        <Table>
          <TableHead className="table-head">
            <TableRow
              sx={{
                background: "linear-gradient(#42424a , #191919)",
              }}
            >
              {
                tableHead.map((x: string, i: number) => {
                  if (i === 0) {
                    return <TableCell key={x} className="table-cell">{x}</TableCell>
                  } else {
                    return <TableCell key={x} className="table-cell" align="right">{x}</TableCell>
                  }
                })
              }
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row: any, index: number) => (
                <TableRow key={index} className="table-row">
                  <TableCell
                    className="table-cell"
                    component="th"
                    key={index}
                    scope="row"
                  >
                    {row.hotspotname}
                  </TableCell>
                  <TableCell className="table-cell" align="right">
                    {row.location.address}
                  </TableCell>
                  <TableCell className="table-cell" align="right">
                    {row.groups.length === 0 ? '--' : getGroupNames(row.groups)}
                  </TableCell>
                  <TableCell className="table-cell" align="right">
                    {moment(row.created).format('D MMM, YYYY')}
                  </TableCell>
                  <TableCell className="table-cell" align="right">
                  <IconButton sx={{p: 0.5}} onClick={handleMenuClick}>
                      <MoreVertIcon sx={{fontSize: 18}} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            {emptydata > 0 && (
              <TableRow
                style={{
                  height: 53 * emptydata,
                }}
              >
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        <MenuComponent open={open} anchorEl={anchorEl} handleClose={handleMenuClose} />
    </Paper>
  );
}

export default React.memo(HotspotTable);
