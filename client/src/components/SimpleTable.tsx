import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  Hotspot: string,
  Address: number,
  Coordinates: number,
  Groups: number,
  Action: number
) {
  return { Hotspot, Address, Coordinates, Groups, Action };
}

const rows = [
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Donut", 452, 25.0, 51, 4.9),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Honeycomb", 408, 3.2, 87, 6.5),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Jelly Bean", 375, 0.0, 94, 0.0),
  createData("KitKat", 518, 26.0, 65, 7.0),
  createData("Lollipop", 392, 0.2, 98, 0.0),
  createData("Marshmallow", 318, 0, 81, 2.0),
  createData("Nougat", 360, 19.0, 9, 37.0),
  createData("Oreo", 437, 18.0, 63, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Jelly Bean", 375, 0.0, 94, 0.0),
  createData("KitKat", 518, 26.0, 65, 7.0),
  createData("Lollipop", 392, 0.2, 98, 0.0),
  createData("Marshmallow", 318, 0, 81, 2.0),
  createData("Nougat", 360, 19.0, 9, 37.0),
  createData("Oreo", 437, 18.0, 63, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Jelly Bean", 375, 0.0, 94, 0.0),
  createData("KitKat", 518, 26.0, 65, 7.0),
  createData("Lollipop", 392, 0.2, 98, 0.0),
  createData("Marshmallow", 318, 0, 81, 2.0),
  createData("Nougat", 360, 19.0, 9, 37.0),
  createData("Oreo", 437, 18.0, 63, 4.0),
];


function SimpleTable() {
  const [page, setPage] = React.useState(0);
  const [dataPerPage, setdataPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangedataPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setdataPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Avoid a layout jump when reaching the last page with empty data.
  const emptydata =
    page > 0 ? Math.max(0, (1 + page) * dataPerPage - rows.length) : 0;

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
              <TableCell className="table-cell">Hotspot Name</TableCell>
              <TableCell className="table-cell" align="right">
                Address
              </TableCell>
              <TableCell className="table-cell" align="right">
                Coordinates
              </TableCell>
              <TableCell className="table-cell" align="right">
                Groups
              </TableCell>
              <TableCell className="table-cell" align="right">
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * dataPerPage, page * dataPerPage + dataPerPage)
              .map((row: any, index: number) => (
                <TableRow key={index} className="table-row">
                  <TableCell
                    className="table-cell"
                    component="th"
                    key={index}
                    scope="row"
                  >
                    {row.Hotspot}
                  </TableCell>
                  <TableCell className="table-cell" align="right">
                    {row.Address}
                  </TableCell>
                  <TableCell className="table-cell" align="right">
                    {row.Coordinates}
                  </TableCell>
                  <TableCell className="table-cell" align="right">
                    {row.Groups}
                  </TableCell>
                  <TableCell className="table-cell" align="right">
                    {row.Action}
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
      {/* <TablePagination
        dataPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        dataPerPage={dataPerPage}
        page={page}
        onPageChange={handleChangePage}
        ondataPerPageChange={handleChangedataPerPage}
      /> */}
    </Paper>
  );
}

export default React.memo(SimpleTable);
