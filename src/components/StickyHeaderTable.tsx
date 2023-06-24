import * as React from "react";
import { Paper } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
interface Column {
  id: "grandprix" | "driver" | "car" | "time";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

type TProps = {
  data: any[];
};

const columns: readonly Column[] = [
  { id: "grandprix", label: "GRAND PRIX", minWidth: 170 },
  { id: "driver", label: "DRIVER", minWidth: 100 },
  {
    id: "car",
    label: "CAR",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "time",
    label: "TIME",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
];

interface Data {
  grandprix: string;
  driver: string;
  car: string;
  time: string;
}

function createData(
  grandprix: string,
  driver: string,
  car: string,
  time: string
): Data {
  return { grandprix, driver, car, time };
}

function createRows(data: any[]) {
  const rows = data.map((item: any) =>
    createData(
      item.Driver.Nationality,
      item.Driver.GivenName,
      item.Constructor.Name,
      item.Time
    )
  );
  return rows;
}
const StickyHeaderTable = ({ data }: TProps) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = React.useState<any[]>([]);
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  React.useEffect(() => {
    const records = createRows(data);
    setRows(records);
  }, [data]);
  console.log("data: ", data);

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table" size="small">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  size="small"
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index: number) => {
                return (
                  <TableRow
                    hover={true}
                    role="checkbox"
                    tabIndex={-1}
                    key={index}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
export default StickyHeaderTable;
