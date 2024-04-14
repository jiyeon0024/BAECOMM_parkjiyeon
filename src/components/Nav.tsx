import styled from "styled-components";
import Button from "./Button";
import { useProductsStore } from "../stores/productsStore";
import Logo from "./Logo";

const StyledNav = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: start;

    gap: 10px;
  }
  @media only screen and (max-width: 770px) {
    display: flex;
    flex-direction: column;
    align-items: start;

    gap: 10px;
  }
`;

const Input = styled.input`
  border: 1.5px solid #9ca3af;
  border-radius: 10px;
  padding: 8px;
  width: 100%;
`;

const NavContainer = styled.div`
  display: flex;
  width: 1005;
  align-items: center;
  gap: 25px;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
  @media only screen and (max-width: 770px) {
    width: 100%;
  }
`;

const Box = styled.div`
  position: relative;
  width: 100%;
`;

type Props = {};

const Nav = (props: Props) => {
  const [fetchSearchedData, checkSearch, setValue, value] = useProductsStore(
    (state: any) => [
      state.fetchSearchedData,

      state.checkSearch,
      state.setValue,
      state.value,
    ]
  );

  const handleSubmit = () => {
    fetchSearchedData(value);
    checkSearch(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };
  return (
    <StyledNav>
      <Logo />
      <NavContainer>
        <Box>
          <Input
            type="text"
            name="search"
            id="search"
            onChange={(e) => {
              return setValue(e.target.value);
            }}
            value={value}
            onKeyDown={handleKeyDown}
            placeholder="상품을 검색하세요"
          />{" "}
        </Box>

        <Button
          onClick={() => {
            handleSubmit();
          }}
        >
          검색
        </Button>
      </NavContainer>
    </StyledNav>
  );
};

export default Nav;
