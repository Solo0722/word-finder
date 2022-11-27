import React, { useState } from "react";
import moment from "moment";
import styled from "styled-components";
import axios from "axios";
import { useEffect } from "react";

const WordOfTheDay = () => {
  const [wordOfTheDay, setWordOfTheDay] = useState(null);
  const getWordOfTheDay = async () => {
    await axios
      .get(
        `https://api.wordnik.com/v4/words.json/wordOfTheDay?api_key=${process.env.REACT_APP_WORDNIK_APP_KEY}`
      )
      .then(({ data }) => {
        console.log(data);
        setWordOfTheDay(data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getWordOfTheDay();
  }, []);

  return (
    <WordWrapper>
      <TitleWrapper>
        <h1>Word of the Day</h1>
        <p>{moment().format("dddd, Do MMMM YYYY")}</p>
        <h2 style={{ fontStyle: "italic" }}>
          "<span>{wordOfTheDay?.word}</span>"
        </h2>
        <p>{wordOfTheDay?.note}</p>
      </TitleWrapper>
      <BodyWrapper>
        <h3>Definitions</h3>
        <ol>
          {wordOfTheDay?.definitions?.map((def, i) => (
            <li key={i}>
              <p>
                {def.partOfSpeech} - {def.text}
              </p>
            </li>
          ))}
        </ol>
        <br />
        <h3>Examples</h3>
        <ol>
          {wordOfTheDay?.examples?.map((eg, i) => (
            <li key={i}>
              <p>{eg.text}</p>
            </li>
          ))}
        </ol>
      </BodyWrapper>
    </WordWrapper>
  );
};

const WordWrapper = styled.div`
  width: 100%;
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
    color: lavender;
    text-align: center;
  }

  h2 {
    font-size: 25px;
    color: Lavender;
    font-weight: bolder;
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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BodyWrapper = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  h3 {
    color: lavender;
    font-weight: bold;
  }
`;

export default WordOfTheDay;
