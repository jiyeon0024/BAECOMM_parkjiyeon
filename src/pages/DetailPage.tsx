import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Logo from "../components/Logo";
import { Icons } from "../components/Icons";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useProductsStore } from "../stores/productsStore";
// type Props = {};

const Container = styled.div`
  max-width: 70%;
  margin: 20px auto;
`;

const GobackBtn = styled.button`
  color: #10b981;
  border: none;
  font-weight: bold;
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  text-decoration: none;
  cursor: pointer;
`;

const DetailBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  justify-content: center;
  background-color: white;
  border-radius: 10px;
  padding: 25px;
  margin-top: 40px;
`;
const Img = styled.img`
  border-radius: 10px 10px 60px 10px;
  height: 500px;
  background-color: lightgray;
  margin-bottom: 15px;
  object-fit: cover;
  object-position: left;
`;

const Brand = styled.h2`
  font-weight: bold;

  background-color: white;
`;

const Title = styled.h2`
  font-weight: normal;
  background-color: white;
`;

const Price = styled.p`
  padding-top: 3px;
  padding-bottom: 20px;
  background-color: white;
  color: #4a4949;
`;

const SlideBtnLeft = styled.button`
  color: green;
  position: absolute;
  transform: translateY(-200%);
  top: 50%;
  left: 1%;
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  box-shadow: rgba(59, 62, 65, 0.2) 0px 8px 24px;
  color: gray;
  font-weight: bold;
  &:hover {
    color: #10b981;
  }
  cursor: pointer;
`;
const SlideBtnRight = styled.button`
  position: absolute;
  cursor: pointer;
  transform: translateY(-200%);
  top: 50%;
  right: 1%;
  &:hover {
    color: #10b981;
  }
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  box-shadow: rgba(59, 62, 65, 0.2) 0px 8px 24px;
  color: gray;
  font-weight: bold;
`;
const Des = styled.p`
  background-color: white;
  color: #4a4949;
`;
const Flex = styled.div`
  display: flex;
  background-color: white;
  align-items: center;
  gap: 10px;
  padding-bottom: 3px;
`;
export const DetailPage = () => {
  const Arrow = Icons["faLongArrowAltLeft"];
  const ArrowLeft = Icons["ioIosArrowBack"];
  const ArrowRight = Icons["ioIosArrowForward"];
  const [page, setPage] = useState(0);

  const [fetchAllData, newData] = useProductsStore((state: any) => [
    state.fetchAllData,
    state.newData,
  ]);
  const id = useParams();
  const Id = id.pid;
  useEffect(() => {
    fetchAllData();
  }, []);

  const next = (lastIndex: number) => {
    if (page + 1 < lastIndex) {
      setPage(page + 1);
    }
  };

  const pre = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  return (
    <div>
      <Container>
        <Logo />
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <GobackBtn>
            <Arrow color="#10b981" size={15} />
            <span>목록으로 돌아가기</span>
          </GobackBtn>
        </Link>
        {newData?.products?.map((i: any, index: number) => {
          if (i.id.toString() === Id) {
            return (
              <DetailBox key={index}>
                <SlideBtnLeft onClick={() => pre()}>
                  <ArrowLeft size={20} />
                </SlideBtnLeft>
                {i.images.map((val: string, index: number) => {
                  if (index === page) {
                    return <Img key={index} src={i.images[index]} />;
                  }
                })}

                <SlideBtnRight onClick={() => next(i.images.length)}>
                  <ArrowRight size={20} />
                </SlideBtnRight>
                <Flex>
                  <Brand>{i.brand}</Brand>
                  <Title>{i.title}</Title>
                </Flex>
                <Price>Price: {i.price}</Price>
                <Des>{i.description}</Des>
              </DetailBox>
            );
          }
        })}
      </Container>
    </div>
  );
};
