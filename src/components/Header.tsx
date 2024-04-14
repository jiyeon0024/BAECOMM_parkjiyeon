import React from "react";
import Nav from "./Nav";
import styled from "styled-components";
type Props = {};

const HeaderContainer = styled.div`
  height: 150px;
  border-radius: 10px;
  margin-top: 10px;
  color: white;
  font-weight: bold;
  font-size: 30px;
  padding: 10px;
  padding-left: 30px;
  display: flex;
  align-items: center;
  background: linear-gradient(to right, #10b981, #10b981, #4fdb6d);
`;

const Header = (props: Props) => {
  return (
    <div>
      <Nav />
      <HeaderContainer>Enjoy your shopping !</HeaderContainer>
    </div>
  );
};

export default Header;
