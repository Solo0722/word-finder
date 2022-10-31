import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../context/GlobalContext";

const Thesaurus = () => {
  const { wordThesaurus } = useContext(GlobalContext);

  return (
    <>
      {!wordThesaurus || !wordThesaurus.length ? (
        <div>
          <p>No results!</p>
          <p>Search word to find it's thesaurus.</p>
        </div>
      ) : (
        <ThesaurusWrapper>Collegiate</ThesaurusWrapper>
      )}
    </>
  );
};

const ThesaurusWrapper = styled.div`
  width: 100%;
`;

export default Thesaurus;
