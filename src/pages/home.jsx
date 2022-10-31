import { Button } from "antd";
import moment from "moment";
import React from "react";
import { FcSpeaker } from "react-icons/fc";
import styled from "styled-components";

const Home = () => {
  return (
    <HomeWrapper>
      <h1>Word of the Day</h1>
      <p>{moment().format("dddd, Do MMMM YYYY")}</p>
      <WordWrapper>
        <h2>
          "<span>remarkable</span>"
        </h2>
        <p>adjective</p>
        <Button icon={<FcSpeaker />} type="default" ghost />
        <a href="">Get the definitions, examples,synomyms and antonyms </a>
      </WordWrapper>
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 60px);

  h1 {
    border-bottom: 3px solid #1a2238;
  }
`;

const WordWrapper = styled.div`
  width: 100%;
  height: 300px;
  min-height: 300px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  margin: 20px 0;
  border-radius: 7px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5) 20%,
      rgba(0, 0, 0, 0.5) 80%
    ),
    url("/lib2.jpg");
  color: lavender;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

  h2 {
    font-size: 25px;
    color: Lavender;
    font-weight: bolder;
  }

  p {
    font-style: italic;
  }

  button {
    margin: 10px 0;
  }

  a {
    text-decoration: underline;
    color: lavender;
  }
`;

export default Home;
