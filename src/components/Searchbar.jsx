import React, { useContext, useState } from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { HiOutlineMicrophone } from "react-icons/hi";
import { GlobalContext } from "../context/GlobalContext";
import { message } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

const Searchbar = () => {
  const { word, setWord, findWordThesaurus, findWordMeaning } =
    useContext(GlobalContext);

  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = () => {
    if (location.pathname == "/") {
      navigate("/dictionary");
    }
    if (!word.length || !word) {
      message.error("Invalid word! Try again.");
    } else {
      findWordThesaurus(word);
      findWordMeaning(word);
    }
  };

  return (
    <SearchWrapper>
      <MicWrapper>
        <HiOutlineMicrophone />
      </MicWrapper>
      <InputWrapper
        type="text"
        placeholder="Search..."
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
      <SearchButtonWrapper onClick={handleSearch}>
        <BiSearch />
      </SearchButtonWrapper>
    </SearchWrapper>
  );
};

const SearchWrapper = styled.div`
  width: 100%;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  border-radius: 5px;
  /* box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px; */
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;

  button {
    margin-left: 10px;
  }
`;

const InputWrapper = styled.input`
  width: 80%;
  height: 100%;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-right: 20px;
  padding-left: 10px;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  outline: none;
  transition: all ease-in-out 0.3s;
`;

const MicWrapper = styled.div`
  width: 10%;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  transition: all ease-in-out 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

const SearchButtonWrapper = styled.div`
  width: 10%;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  transition: all ease-in-out 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

export default Searchbar;
