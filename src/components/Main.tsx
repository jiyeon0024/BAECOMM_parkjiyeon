import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import styled from "styled-components";
import { useProductsStore } from "../stores/productsStore";
import { Icons } from "./Icons";
type Props = {};

const MainContainer = styled.div`
  display: grid;
  margin: 30px auto;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 50px;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 480px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  @media only screen and (max-width: 770px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  gap: 5px;
  padding: 10px;
`;

const ViewMore = styled.button`
  color: #10b981;
  cursor: pointer;
  font-weight: bold;
  border: none;
  font-size: large;
`;
const Rotate = styled.div`
  transform: rotate(-90deg);
`;

const Main = (props: Props) => {
  const Arrow = Icons["ioIosArrowBack"];
  const [
    fetchData,
    copyData,
    limit,
    setLimit,
    searched,
    fetchSearchedData,
    value,

    searchedLeng,
  ] = useProductsStore((state: any) => [
    state.fetchData,
    state.copyData,
    state.limit,
    state.setLimit,
    state.searched,
    state.fetchSearchedData,
    state.value,

    state.searchedLeng,
  ]);

  useEffect(() => {
    if (!searched) {
      fetchData({ limit });
      sessionStorage.removeItem("scrollPos");
    } else {
      fetchSearchedData(value);
    }
  }, [limit]);

  const handleLimit = () => {
    if (limit !== copyData.total) {
      setLimit(limit + 10);
    }
  };

  const scrollPos = sessionStorage.getItem("scrollPos");
  if (scrollPos) {
    window.scrollTo(0, Number(scrollPos));
  }

  return (
    <>
      <MainContainer>
        {copyData?.products?.map((data: string, index: number) => {
          return <ProductCard data={data} key={index} />;
        })}
      </MainContainer>
      {limit !== copyData.total && !searched ? (
        <Center>
          <ViewMore onClick={() => handleLimit()}>
            <span> View More</span>
          </ViewMore>
          <Rotate>
            <Arrow color=" #10b981" size={25} style={{ fontWeight: "bold" }} />
          </Rotate>
        </Center>
      ) : null}
      {searched && copyData.limit !== searchedLeng ? (
        <Center>
          <ViewMore onClick={() => handleLimit()}>
            <span> View More</span>
          </ViewMore>
          <Rotate>
            <Arrow color=" #10b981" size={25} style={{ fontWeight: "bold" }} />
          </Rotate>
        </Center>
      ) : null}
    </>
  );
};

export default Main;
