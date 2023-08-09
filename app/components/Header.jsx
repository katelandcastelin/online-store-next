'use client';
import styled from "styled-components";

const HeaderContainer = styled.header`
  /* background-color: #BCB4B9; */
  /* background-color: #b4b4b9; */
  /* background-color: #d6d9d9; */
  background-color: #b4b4bc;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavLink = styled.a`
  color: #e3e3e3;
  margin: 10px;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <NavLink href="/">Home</NavLink>
      <NavLink href="corsets">Corsets</NavLink>
      <NavLink href="/">Something else</NavLink>
    </HeaderContainer>
  )
}
