import {
  MenuItem,
  Select,
  FormControl,
  SelectChangeEvent,
} from "@mui/material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import styled, { useTheme } from "styled-components";

const FIX_YEARS = ["2020", "2021", "2022", "2023"];

interface IYearFilter {
  handleStartDateChange: (e: SelectChangeEvent<string | null>) => void;
  handleEndDateChange: (e: SelectChangeEvent<string | null>) => void;
  startDate: string | null;
  endDate: string | null;
}

const YearFilter = ({
  handleStartDateChange,
  handleEndDateChange,
  startDate,
  endDate,
}: IYearFilter) => {
  const { colors: colorsTheme } = useTheme();

  return (
    <SYearFilterWrapper>
      <div>
        <FilterAltOutlinedIcon
          sx={{
            width: "1rem",
            color: colorsTheme.greyscale["50"],
          }}
        />
      </div>
      <SElementWrapper>Compare Years:</SElementWrapper>
      <FormControl
        fullWidth
        sx={{ minWidth: "7.5rem", transform: "scale(0.8)" }}
      >
        <Select
          sx={{
            boxShadow: "none",
            ".MuiOutlinedInput-notchedOutline": { border: 0 },
            color: colorsTheme.primary.text,
            backgroundColor: colorsTheme.greyscale["5"],
            fontSize: "1rem",
            height: "2rem",
            ".MuiSelect-select": {
              paddingTop: "6px",
              paddingBottom: "6px",
            },
            ".MuiOutlinedInput-input": {
              padding: "10px",
            },
          }}
          autoWidth
          id="start-date-select"
          value={startDate}
          defaultValue="2020"
          onChange={handleStartDateChange}
        >
          {FIX_YEARS.map((year, i) => (
            <MenuItem key={i} value={year}>
              {year}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <SElementWrapper> to </SElementWrapper>
      <FormControl
        fullWidth
        sx={{ minWidth: "7.5rem", transform: "scale(0.8)" }}
      >
        <Select
          sx={{
            boxShadow: "none",
            ".MuiOutlinedInput-notchedOutline": { border: 0 },
            color: colorsTheme.primary.text,
            backgroundColor: colorsTheme.greyscale["5"],
            fontSize: "1rem",
            height: "2rem",
            ".MuiSelect-select": {
              paddingTop: "6px",
              paddingBottom: "6px",
            },
            ".MuiOutlinedInput-input": {
              padding: "10px",
            },
          }}
          autoWidth
          id="end-date-select"
          value={endDate}
          onChange={handleEndDateChange}
          disabled={!startDate}
        >
          {FIX_YEARS.filter((year) => !startDate || year >= startDate).map(
            (year) => (
              <MenuItem key={year} value={year}>
                {year}
              </MenuItem>
            )
          )}
        </Select>
      </FormControl>
    </SYearFilterWrapper>
  );
};

export default YearFilter;

const SYearFilterWrapper = styled.div`
  max-height: 1.5rem;
  background-color: ${(props) => props.theme.colors.base["base"]};
  padding: 10px 0px 10px 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colors.greyscale["20"]};
`;

const SElementWrapper = styled.div`
  padding: 0rem 0.1rem;
  white-space: nowrap;
`;
