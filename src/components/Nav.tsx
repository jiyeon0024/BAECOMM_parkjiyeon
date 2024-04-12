import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Header from "./Header";

type Props = {};

const Nav = (props: Props) => {
  const Nav = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    color: #10b981;
  `;

  const Input = styled.input`
    border: 1.5px solid #9ca3af;
    border-radius: 10px;
    padding: 8px;
    width: 300px;
  `;

  const NavContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 13px;
  `;

  return (
    <Nav>
      <h1>BAECOMM</h1>
      <NavContainer>
        <Input type="text" />
        <Button>Search</Button>
      </NavContainer>
    </Nav>
  );
};

export default Nav;
