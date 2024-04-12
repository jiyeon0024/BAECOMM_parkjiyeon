import styled from "styled-components";
import Main from "./components/Main";
import Header from "./components/Header";

function App() {
  const Contatiner = styled.div`
    margin: 20px auto 100px;
    width: 70%;
  `;
  return (
    <Contatiner>
      <Header />
      <Main />
    </Contatiner>
  );
}

export default App;
