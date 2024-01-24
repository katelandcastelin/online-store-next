'use client';
import styled from "styled-components";
import DropDownMenu from "./DropDownMenu";

const HeaderContainer = styled.header`
  height: 150px;
  padding: 0% 6%;
  display: flex;
  align-items: center;
  position: relative;
  box-shadow: 0 4px 2px -2px gray;
`;

const HeaderLogo = styled.a`
  cursor: pointer;
  margin: auto;
`;

const Slogan = styled.p`
  text-align: center;
  color: #808080;

  &:hover {
    box-shadow: 0 4px 12px -2px gray;
  }
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
  color: #ffffff;
  margin: 10px;
  font-weight: 200;
  text-decoration: none;

  &:hover {
    box-shadow: 0 4px 12px -2px gray;
  }
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 6%;
  margin: 10px;

  a {
    margin-left: 30px;
  }

  img {
    height: 25px;
    width: 25px;
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <DropDownDiv>
        <DropDownMenu />
      </DropDownDiv>
      <HeaderLogo href="/">
        <LogoContainer>
          <Logo src='/brightvoid-logo.png'/>
        </LogoContainer>
        <div>
          <Slogan>Step into the void</Slogan>
        </div>
      </HeaderLogo>
      <Links>
        <NavLink href="/corsets">Corsets</NavLink>
        <NavLink href="/skirts">Skirts</NavLink>
        <NavLink href="/order">Order</NavLink>
        <NavLink href="/about">About</NavLink>
      </Links>
      <RightContainer>
        <a href="/log-in">
          <img src="/images/artworks/cardboard/anon.png" />
        </a>
        <a href="/wishlist">
          <img src="/heart.png" />
        </a>
        <a href="/cart">
          <img src="/cart.png" />
        </a>
      </RightContainer>
    </HeaderContainer>
  )
}
