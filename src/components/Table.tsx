import { useTheme } from "styled-components";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styled from "styled-components";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
  budget: number
) {
  return { name, calories, fat, carbs, protein, budget };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 1.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3, 1.0),
  createData("Eclair", 262, 16.0, 24, 6.0, 1.0),
  createData("Cupcake", 305, 3.7, 67, 4.3, 1.0),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 1.0),
  createData("test", 356, 16.0, 49, 3.9, 1.0),
];

export default function MonthTable() {
  const { colors: colorsTheme } = useTheme();

  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a a table">
        <TableHead>
          <TableRow>
            <TableCell align="center">2021</TableCell>
          </TableRow>
          <TableRow>
            <STablecolumn align="center">Value</STablecolumn>
            <STablecolumn align="center">Growth%</STablecolumn>
            <STablecolumn align="center">Gap%</STablecolumn>
            <STablecolumn align="center">Margin </STablecolumn>
            <STablecolumn align="center">Dist.</STablecolumn>
            <STablecolumn align="center">Budget%`</STablecolumn>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => {
            const tmpBgstate = [2, 3].includes(i % 4).toString();
            return (
              <TableRow
                key={row.name}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <STableCell
                  isgreybg={tmpBgstate}
                  size={"20%"}
                  component="th"
                  scope="row"
                  align="center"
                  sx={{
                    color: colorsTheme.primary.text,
                  }}
                >
                  {row.name}
                </STableCell>
                <STableCell
                  sx={{
                    color: colorsTheme.sucess.text,
                  }}
                  isgreybg={tmpBgstate}
                  size={"20%"}
                  align="center"
                >
                  {row.calories}
                </STableCell>
                <STableCell
                  sx={{
                    color: colorsTheme.sucess.text,
                  }}
                  isgreybg={tmpBgstate}
                  size={"20%"}
                  align="center"
                >
                  {row.fat}
                </STableCell>
                <STableCell isgreybg={tmpBgstate} size={"20%"} align="center">
                  {row.carbs}
                </STableCell>
                <STableCell isgreybg={tmpBgstate} size={"20%"} align="center">
                  {row.protein}
                </STableCell>
                <STableCell isgreybg={tmpBgstate} size={"20%"} align="center">
                  {row.budget}
                </STableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const STableCell = styled(TableCell)<{
  size: string;
  isgreybg: string;
}>`
  width: ${(props) => props.size ?? "50%"};
  max-width: ${(props) => props.size ?? "50%"};
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: ${(props) =>
    props.isgreybg === "true"
      ? props.theme.colors.base["baseContrast"]
      : props.theme.colors.base["base"]};
`;

const STablecolumn = styled(TableCell)<{
  size: string;
  isgreybg: string;
}>`
  width: 20%;
  max-width: 20%;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: ${(props) => props.theme.colors.greyscale["20"]};
`;
