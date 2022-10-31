import React, { createContext, useState } from "react";
import axios from "axios";

export const GlobalContext = createContext();

const BASE_URL = "https://dictionaryapi.com/api/v3/references";

const GlobalProvider = ({ children }) => {
  const [word, setWord] = useState("");
  const [wordMeaning, setWordMeaning] = useState(null);
  const [wordThesaurus, setWordThesaurus] = useState(null);

  const findWordMeaning = async (word) => {
    try {
      const { data } = await axios.get(
        `${BASE_URL}/collegiate/json/${word}?key=${process.env.REACT_APP_MERRIAM_APP_KEY_DICT}`
      );
      setWordMeaning(data);
      console.log(data);
    } catch (error) {
      console.log(error);
      setWordMeaning(null);
    }
  };

  const findWordThesaurus = async (word) => {
    try {
      const { data } = await axios.get(
        `${BASE_URL}/thesaurus/json/${word}?key=${process.env.REACT_APP_MERRIAM_APP_KEY_THES}`
      );
      setWordThesaurus(data);
      console.log(data);
    } catch (error) {
      console.log(error);
      setWordThesaurus(null);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        word,
        setWord,
        findWordThesaurus,
        findWordMeaning,
        wordMeaning,
        wordThesaurus,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
