'use client';
import styled from "styled-components";

const HeaderContainer = styled.header`
  height: 150px;
  border-bottom: 1px solid #b4b4bc;

  display: flex;
  align-items: center;
`;

const HeaderLogo = styled.a`
  border: 1px solid #b4b4bc;
  height: 50px;
  width: 250px;
  cursor: pointer;
  margin: auto;
`;

const Links = styled.div`
  padding-left: 6%;
  position: absolute;
`;

const NavLink = styled.a`
  color: #000;
  margin: 10px;
  font-weight: 200;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderLogo href="/">
        <img />
      </HeaderLogo>
      <Links>
        <NavLink href="corsets">Corsets</NavLink>
        <NavLink href="order">Order</NavLink>
        <NavLink href="about">About</NavLink>
      </Links>
    </HeaderContainer>
  )
}
