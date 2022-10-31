import { Button } from "antd";
import styled from "styled-components";
import Searchbar from "../components/Searchbar";
import WordOfTheDay from "../containers/WordOfTheDay";

const Home = () => {
  return (
    <HomeWrapper>
      <Searchbar />
      <WordOfTheDay />
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 60px);
`;

export default Home;
