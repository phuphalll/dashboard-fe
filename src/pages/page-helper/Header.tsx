import styled from "styled-components";
import hamburger from "../../assets/icons/hamburger.png";

export default function Header() {
  return (
    <SHeaderContainer>
      <SNav>
        <SLineWrapper>
          <SHamburgerImage src={hamburger} alt="logo" />
        </SLineWrapper>
        <SMenuItem> Target Setup </SMenuItem>
      </SNav>
    </SHeaderContainer>
  );
}

const SHeaderContainer = styled.div`
  position: relative;
  max-height: 60px;
`;

const SNav = styled.nav`
  position: relative;
  flex-direction: row;
  padding: 1rem 1rem;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${(props) => props.theme.colors.base.base};
  gap: 0.5rem;
`;

const SLineWrapper = styled.div`
  position: relative;
`;

const SHamburgerImage = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 10px;
`;

const SMenuItem = styled.div`
  position: relative;
  top: -5px;
  flex-grow: 1;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.text.heading};
`;
