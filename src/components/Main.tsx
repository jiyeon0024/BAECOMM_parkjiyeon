import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import styled from "styled-components";
import { useProductsStore } from "../stores/productsStore";
import Button from "./Button";
type Props = {};

const MainContainer = styled.div`
  display: grid;
  margin: 30px auto;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 50px;
  align-items: center;
  justify-content: center;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const Main = (props: Props) => {
  const [fetchData, copyData, limit, setLimit] = useProductsStore(
    (state: any) => [
      state.fetchData,
      state.copyData,
      state.limit,
      state.setLimit,
    ]
  );
  useEffect(() => {
    fetchData({ limit });
  }, [limit]);

  console.log(copyData);

  const handleLimit = () => {
    if (limit !== copyData.total) {
      setLimit(limit + 10);
    }
  };
  console.log(limit);
  return (
    <>
      <MainContainer>
        {copyData?.products?.map((data: string, index: number) => {
          return <ProductCard data={data} key={index} />;
        })}
      </MainContainer>
      {limit !== copyData.total ? (
        <Center>
          <Button onClick={() => handleLimit()}>View More</Button>
        </Center>
      ) : null}
    </>
  );
};

export default Main;
