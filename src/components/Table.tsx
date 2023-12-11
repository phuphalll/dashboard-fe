import { useTheme } from "styled-components";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SwapVertOutlinedIcon from "@mui/icons-material/SwapVertOutlined";
import styled from "styled-components";
import { IYearData } from "../interfaces/sales.interface";
import { isGreaterThanZero } from "../utils/number";

const COLUMN_NAME = ["Value", "Growth%", "Gap%", "Margin", "Dist.", "Budget%`"];
interface IYearTable {
  yearData: IYearData;
  tableWidth: string;
}

export default function YearTable({ yearData, tableWidth }: IYearTable) {
  const { colors: colorsTheme } = useTheme();

  return (
    <TableContainer component={Paper} sx={{ overflowY: "hidden" }}>
      <Table
        sx={{ minWidth: tableWidth, fontSize: "500px" }}
        size="small"
        stickyHeader
      >
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                color: colorsTheme.primary.text,
                display: "flex",
                flexDirection: "row",
                borderBottom: "none",
              }}
              align="center"
            >
              {yearData.year}
              <SwapVertOutlinedIcon
                sx={{
                  width: "12px",
                  color: colorsTheme.greyscale["80"],
                  paddingLeft: "5px",
                }}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            {COLUMN_NAME.map((c, i) => (
              <TableCell
                key={i}
                sx={{
                  width: "20%",
                  maxWidth: "20%",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  color: colorsTheme.greyscale["70"],
                  backgroundColor: colorsTheme.greyscale["20"],
                }}
                align="center"
              >
                {c}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {yearData.data.map((row, i) => {
            const tmpBgstate = [2, 3].includes(i % 4).toString();
            return (
              <TableRow
                key={i}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <STableCell
                  isgreybg={tmpBgstate}
                  component="th"
                  scope="row"
                  align="center"
                  sx={{
                    height: 10,
                    padding: "5px",
                    color: colorsTheme.primary.text,
                  }}
                >
                  {row.value}
                </STableCell>
                <STableCell
                  sx={{
                    height: 10,
                    padding: "5px",
                    color: isGreaterThanZero(row.growth)
                      ? colorsTheme.sucess.text
                      : colorsTheme.error.text,
                  }}
                  isgreybg={tmpBgstate}
                  align="center"
                >
                  {row.growth}
                </STableCell>
                <STableCell
                  sx={{
                    height: 10,
                    padding: "5px",
                    color: isGreaterThanZero(row.gap)
                      ? colorsTheme.sucess.text
                      : colorsTheme.error.text,
                  }}
                  isgreybg={tmpBgstate}
                  align="center"
                >
                  {row.gap}
                </STableCell>
                <STableCell
                  sx={{ height: 10, padding: "5px" }}
                  isgreybg={tmpBgstate}
                  align="center"
                >
                  {row.margin}
                </STableCell>
                <STableCell
                  sx={{ height: 10, padding: "5px" }}
                  isgreybg={tmpBgstate}
                  align="center"
                >
                  {row.dist}
                </STableCell>
                <STableCell
                  sx={{
                    height: 10,
                    paddingBottom: "7px",
                    paddingTop: "7px",
                  }}
                  isgreybg={tmpBgstate}
                  align="center"
                >
                  <SBudgetWrapper
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    {row.budget[0]}
                    <SBadge>{row.budget[1]}</SBadge>
                  </SBudgetWrapper>
                </STableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const SBadge = styled.div`
  width: 40%;
  background-color: #f0f0f0;
  border-radius: 12px; /* Rounded corners */
  padding: 4px 8px; /* Padding inside the badge */
`;

const SBudgetWrapper = styled.div`
  display: "flex";
  align-items: "center";
  justify-content: "space-between";
`;

const STableCell = styled(TableCell)<{
  isgreybg: string;
}>`
  width: 20%;
  max-width: 20%;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: ${(props) =>
    props.isgreybg === "true"
      ? props.theme.colors.base["baseContrast"]
      : props.theme.colors.base["base"]};
`;
