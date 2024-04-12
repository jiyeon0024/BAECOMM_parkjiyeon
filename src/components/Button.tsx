import React from "react";
import styled from "styled-components";

type Props = { children: string; onClick?: any };

const Btn = styled.button`
  background-color: #10b981;
  font-weight: bold;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  border: none;
  color: white;
  width: 100px;
`;

export default function Button({ children, onClick }: Props) {
  return <Btn onClick={onClick}>{children}</Btn>;
}
