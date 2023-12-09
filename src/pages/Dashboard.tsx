import styled from "styled-components";
import { Box } from "@mui/material";

import MonthTable from "../components/Table";

export default function Dashboard() {
  return (
    <SContainer>
      <STableWrapper>
        <Box
          sx={{
            overflowX: "auto",
            display: "flex",
            width: "100%",
            border: "1px solid #ccc",
            "&::-webkit-scrollbar": {
              display: "none",
            },

            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <MonthTable />
            <MonthTable />
          </Box>
        </Box>
      </STableWrapper>
    </SContainer>
  );
}

const SContainer = styled.div`
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
  flex-grow: 1;
  overflow: auto;
`;

const STableWrapper = styled.div`
  padding: 2rem;
`;
