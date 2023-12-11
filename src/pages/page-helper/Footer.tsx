import styled, { useTheme } from "styled-components";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function Footer() {
  const { colors: colorsTheme } = useTheme();

  return (
    <SFooter>
      <Box
        component="footer"
        sx={{
          height: "60px",
          width: "100%",
          backgroundColor: colorsTheme.base.baseContrast,
          padding: "1rem 0",
          borderTop: `1px solid ${colorsTheme.base.base}`,
        }}
      >
        <Container sx={{ display: "flex", justifyContent: "flex-end" }}>
          <SContentWrapper>
            <SFooterContent>
              <div>Target</div> <div style={{ paddingTop: "6px" }}>420</div>
            </SFooterContent>
            <SFooterContent>
              <div>Margin</div> <div style={{ paddingTop: "6px" }}>23%</div>
            </SFooterContent>
            <SFooterContent>
              <div>Cost.</div> <div style={{ paddingTop: "6px" }}>54%</div>
            </SFooterContent>
            <SFooterContent>
              <div>Budget</div> <div style={{ paddingTop: "6px" }}>34%</div>
            </SFooterContent>
          </SContentWrapper>
        </Container>
      </Box>
    </SFooter>
  );
}
const SContentWrapper = styled.div`
  margin-right: 1rem;
  display: flex;
  flex-direction: row;
  gap: 1.5rem;

  &:last-child {
    margin-right: 0;
  }
`;

const SFooterContent = styled.div``;

const SFooter = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: ${(props) => props.theme.colors.base.base};
  text-align: center;
  max-height: 60px;
`;
