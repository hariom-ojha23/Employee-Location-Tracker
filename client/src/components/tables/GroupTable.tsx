import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import moment from "moment";
import { GroupType } from "../../types";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton } from "@mui/material";
import MenuComponent from "../MenuComponent";

type Props = {
  rows: Array<GroupType>
  tableHead: Array<string>
}

const GroupTable = ({rows, tableHead}: Props) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
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

  const emptydata =
  page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  function getHotspotNames(list: Array<object>) {
    const arr = list.map((x: any) => x.hotspotname)
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
                    {row.groupname}
                  </TableCell>
                  <TableCell className="table-cell" align="right">
                    {
                      row.admins.length === 0 ? '--' : row.admins.join(', ')
                    }
                  </TableCell>
                  <TableCell className="table-cell" align="right">
                    {
                      row.hotspots.length === 0 ? '--' : getHotspotNames(row.hotspots)
                    }
                  </TableCell>
                  <TableCell className="table-cell" align="right">
                  {
                    row.schedule.starttime && row.schedule.endtime ? 
                    `${moment(row.schedule.starttime).format('hh:mm a')} - ${moment(row.schedule.endtime).format('hh:mm a')}`
                    : '--'
                  }
                  </TableCell>
                  <TableCell className="table-cell" align="right">
                    {moment(row.created).format('Do MMM, YYYY')}
                  </TableCell>
                  <TableCell className="table-cell" align="right">
                    {moment(row.updated).format('Do MMM, YYYY')}
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
  )
}

export default React.memo(GroupTable)