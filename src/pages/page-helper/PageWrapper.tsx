import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

interface IPageWrapper {
  children: React.ReactNode;
}

export default function PageWrapper({ children }: IPageWrapper) {
  return (
    <>
      <Header />
      <SBodyWrapper>{children}</SBodyWrapper>
      <Footer />
    </>
  );
}
const SBodyWrapper = styled.div`
  height: calc(100vh - 53px - 53px);
  background-color: ${(props) => props.theme.colors.base.baseContrast};
`;
