'use client';
import styled from "styled-components";
import DropDownMenu from "./DropDownMenu";

const HeaderContainer = styled.header`
  height: 150px;
  border-bottom: 1px solid #b4b4bc;
  padding: 0% 6%;
  display: flex;
  align-items: center;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    background-image: url('/images/background/binding.png');
    background-size: 100vw;
    background-repeat: no-repeat;
    opacity: 0.8;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
`;

const HeaderLogo = styled.a`
  cursor: pointer;
  margin: auto;
`;

const Slogan = styled.p`
  text-align: center;
  color: #808080;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Logo = styled.img`
  height: 90px;
  margin-bottom: 5px;
`;

const Links = styled.div`
  position: absolute;

  @media (max-width: 1040px) {
    display: none;
  }
`;

const DropDownDiv = styled.div`
  display: none;

  @media (max-width: 1040px) {
    display: flex;
  }
`;

const NavLink = styled.a`
  color: #000;
  margin: 10px;
  font-weight: 200;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    /* drop down for
      available
      new
      
     */
  }
`;

const SaleButton = styled.a`
  font-weight: bold;
  color: red;
  position: absolute;
  right: 6%;
  margin: 10px;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <DropDownDiv>
        <DropDownMenu />
      </DropDownDiv>
      <HeaderLogo href="/">
        <LogoContainer>
          <Logo src='/sewing-logo.png' />
        </LogoContainer>
        <div>
          <Slogan>Stitched with Passion, Worn with Artistry</Slogan>
        </div>
      </HeaderLogo>
      <Links>
        <NavLink href="/corsets">Corsets</NavLink>
        <NavLink href="/skirts">Skirts</NavLink>
        <NavLink href="/order">Order</NavLink>
        <NavLink href="/about">About</NavLink>
      </Links>
      {/* <SaleButton href="/">SALE!</SaleButton> */}
    </HeaderContainer>
  )
}
