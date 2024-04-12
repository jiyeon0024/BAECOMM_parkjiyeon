import React from "react";
import styled from "styled-components";
import Button from "./Button";

type Props = { data: any };

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  min-height: 400px;
  background-color: white;
  border-radius: 20px;
  &:hover {
    color: #1b57cf;
  }
`;

const Img = styled.img`
  border-radius: 10px 10px 60px 10px;
  height: 300px;
  background-color: lightgray;
  margin-bottom: 10px;
  object-fit: cover;
  object-position: left;
`;

const Brand = styled.p`
  font-weight: bold;
  font-size: large;
  background-color: white;
`;

const Title = styled.p`
  /* color: gray; */
  font-weight: normal;
  background-color: white;
`;

const Price = styled.p`
  color: gray;
  padding-top: 3px;
  padding-bottom: 10px;
  background-color: white;
  font-weight: bold;
`;

const Flex = styled.div`
  display: flex;
  background-color: white;
  align-items: center;
  gap: 10px;
`;

const ProductCard = (data: Props) => {
  // console.log(data);
  return (
    <CardContainer>
      <Img src={data.data.thumbnail} />
      <Flex>
        <Brand>{data.data.brand}</Brand>
        <Title>{data.data.title}</Title>
      </Flex>

      <Price>Price: {data.data.price}</Price>

      <Button>Buy Now</Button>
    </CardContainer>
  );
};

export default ProductCard;
