import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { useProductsStore } from "../stores/productsStore";
import { Link } from "react-router-dom";

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

const Background = styled.div`
  background-color: white;
`;

const ProductCard = (data: Props) => {
  const [searched] = useProductsStore((state: any) => [state.searched]);
  const restoreScroll = () => {
    if (searched) {
      sessionStorage.setItem("scrollPos", window.scrollY.toString());
    }
  };

  return (
    <CardContainer>
      <Img src={data?.data?.thumbnail} />
      <Flex>
        <Brand>{data.data.brand}</Brand>
        <Title>{data?.data?.title}</Title>
      </Flex>

      <Price>Price: {data.data.price}</Price>
      <Background>
        <Link to={`/pages/detailPage/${data.data.id}`} onClick={restoreScroll}>
          <Button>상세페이지 </Button>
        </Link>
      </Background>
    </CardContainer>
  );
};

export default ProductCard;
