import React from "react";
import moment from "moment";
import { FcSpeaker } from "react-icons/fc";
import { Button } from "antd";
import styled from "styled-components";

const WordOfTheDay = () => {
  return (
    <WordWrapper>
      <TitleWrapper>
        <h1>Word of the Day</h1>
        <p>{moment().format("dddd, Do MMMM YYYY")}</p>
      </TitleWrapper>
      <BodyWrapper>
        <h2>
          "<span>remarkable</span>"
        </h2>
        <p>adjective</p>
        <Button icon={<FcSpeaker />} type="default" ghost />
        <a href="">Get the definitions, examples,synomyms and antonyms </a>
      </BodyWrapper>
    </WordWrapper>
  );
};

const WordWrapper = styled.div`
  width: 100%;
  height: 400px;
  min-height: 400px;
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
  position: relative;

  h1 {
    border-bottom: 3px solid #1a2238;
    color: lavender;
  }

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

const TitleWrapper = styled.div`
  position: absolute;
  top: 10px;
`;

const BodyWrapper = styled.div`
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export default WordOfTheDay;
