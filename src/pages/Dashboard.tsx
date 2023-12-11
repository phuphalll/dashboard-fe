import { useState } from "react";
import styled, { useTheme } from "styled-components";
import { Box, SelectChangeEvent } from "@mui/material";

import Table from "../components/Table";
import { useGetSales } from "../customHooks/useSalesReport";
import { IYearData } from "../interfaces/sales.interface";
import YearFilter from "../components/YearFilter";

export default function Dashboard() {
  const { colors: colorsTheme } = useTheme();
  const [startDate, setStartDate] = useState<string>("2020");
  const [endDate, setEndDate] = useState<string>("2023");

  const handleStartDateChange = (event: SelectChangeEvent<string | null>) => {
    const val: string = event.target.value ?? "";
    setStartDate(val);
    // Reset end date if it's earlier than the new start date
    if (endDate && endDate < val) {
      setEndDate("");
    }
  };

  const handleEndDateChange = (event: SelectChangeEvent<string | null>) => {
    setEndDate(event.target.value as string);
  };

  const {
    isFetching,
    data: rawSalesReport = [],
    isError,
    isSuccess,
    refetch,
  } = useGetSales({ startDate: startDate, endDate: endDate });

  return (
    <SContainer>
      <SFiltterWrapper>
        <YearFilter
          handleStartDateChange={handleStartDateChange}
          handleEndDateChange={handleEndDateChange}
          startDate={startDate}
          endDate={endDate}
        />
      </SFiltterWrapper>
      <STableWrapper>
        <Box
          sx={{
            minHeight: "320px",
            // maxHeight: "720px",
            overflowX: "auto",
            display: "flex",
            width: "100%",
            border: `1px solid ${colorsTheme.greyscale["20"]}`,
            "&::-webkit-scrollbar": {
              display: "none",
            },

            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <Box sx={{ display: "flex" }}>
            {rawSalesReport.map((yearReport: IYearData, i) => (
              <Table
                yearData={yearReport}
                key={i}
                tableWidth={`${90 / rawSalesReport.length}vw`}
              />
            ))}
          </Box>
        </Box>
      </STableWrapper>
    </SContainer>
  );
}

const SContainer = styled.div`
  max-width: 90vw;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
  flex-grow: 1;
  overflow: auto;
  height: 100%;
`;

const STableWrapper = styled.div`
  padding: 2rem;
  /* overflow: auto;
  height: 100%; */
`;

const SFiltterWrapper = styled.div`
  justify-content: flex-end;
  display: flex;
  padding: 1rem 2rem 0rem;
`;
