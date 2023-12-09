import styled from "styled-components";

export default function Footer() {
  return (
    <SFooter>
      <SContainer>
        <FooterText>© Jagota, Inc. All rights reserved.</FooterText>
      </SContainer>
    </SFooter>
  );
}

const SFooter = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: ${(props) => props.theme.colors.base.base};
  text-align: center;
  max-height: 60px;
`;

const SContainer = styled.div`
  max-width: 100%;
  margin: auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FooterText = styled.p`
  text-align: center;
  color: ${(props) => props.theme.colors.text.heading};
  font-size: 1rem;
  line-height: 1.5;
`;
