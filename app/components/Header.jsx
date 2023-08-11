'use client';
import styled from "styled-components";

const HeaderContainer = styled.header`
  height: 150px;
  border-bottom: 1px solid #b4b4bc;

  display: flex;
  align-items: center;
`;

const HeaderLogo = styled.img`
  border: 1px solid black;
  height: 30px;
  width: 70px;
  cursor: pointer;

  margin: auto;

  /* position: absolute; */
`;

const Links = styled.div`
  /* padding-left: 6%; */
  /* margin: auto; */
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
      <HeaderLogo />
      <Links>
        <NavLink href="/">Home</NavLink>
        <NavLink href="corsets">Corsets</NavLink>
        <NavLink href="/">Something else</NavLink>
      </Links>
    </HeaderContainer>
  )
}
