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
// The number of Header minus footer
const SBodyWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.base.baseContrast};
`;
