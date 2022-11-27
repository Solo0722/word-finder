import { Button } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import Searchbar from "../components/Searchbar";
import Collegiate from "../containers/dict";
import Thesaurus from "../containers/thesaurus";

const Dictionary = () => {
  const [searchType, setSearchType] = useState("dictionary");

  return (
    <DictionaryWrapper>
      <Searchbar />
      <Wrapper>
        <TitleWrapper>
          <Button.Group style={{ width: "100%" }}>
            <Button
              type={`${searchType === "dictionary" ? "primary" : "default"}`}
              onClick={() => setSearchType("dictionary")}
            >
              Dictionary
            </Button>
            <Button
              type={`${searchType === "thesaurus" ? "primary" : "default"}`}
              onClick={() => setSearchType("thesaurus")}
            >
              Thesaurus
            </Button>
          </Button.Group>
        </TitleWrapper>
        <BodyWrapper>
          {searchType === "dictionary" ? <Collegiate /> : <Thesaurus />}
        </BodyWrapper>
      </Wrapper>
    </DictionaryWrapper>
  );
};

const DictionaryWrapper = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
  margin: 30px 0;
  border-radius: 7px;
  position: relative;
`;

const TitleWrapper = styled.div`
  width: 100%;
  position: sticky;
  top: 0;

  button {
    width: 50%;
  }
`;

const BodyWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export default Dictionary;
