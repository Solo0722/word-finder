import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../context/GlobalContext";

const Thesaurus = () => {
  const { wordThesaurus } = useContext(GlobalContext);

  return (
    <>
      {!wordThesaurus || !wordThesaurus.length ? (
        <ThesaurusWrapper>
          <p>No results!</p>
          <p>Search word to find it's thesaurus.</p>
        </ThesaurusWrapper>
      ) : (
        <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          {wordThesaurus &&
            wordThesaurus.map((group) => (
              <ThesaurusWrapper>
                <PrimaryWrapper>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <h1>{group?.hwi?.hw}</h1>
                  </div>
                  <p>
                    <span>{group?.fl}</span>{" "}
                  </p>
                  <ShortDefinitionWrapper style={{ textAlign: "left" }}>
                    {group?.shortdef?.map((def) => (
                      <li>{def}</li>
                    ))}
                  </ShortDefinitionWrapper>
                </PrimaryWrapper>
                <SecondaryWrapper>
                  <h3>Related words: </h3>
                  <div>
                    {group?.meta?.stems.map((w) => (
                      <span>{w},&nbsp;</span>
                    ))}
                  </div>
                </SecondaryWrapper>
                <SecondaryWrapper>
                  <h3>Synonyms: </h3>
                  <div>
                    {group?.meta?.syns &&
                      group?.meta?.syns.map((gr) =>
                        gr.map((g) => <span>{g},&nbsp;</span>)
                      )}
                  </div>
                </SecondaryWrapper>
                <SecondaryWrapper>
                  <h3>Antonyms: </h3>
                  <div>
                    {group?.meta?.syns &&
                      group?.meta?.ants.map((gr) =>
                        gr.map((g) => <span>{g},&nbsp;</span>)
                      )}
                  </div>
                </SecondaryWrapper>
              </ThesaurusWrapper>
            ))}
        </div>
      )}
    </>
  );
};

const ThesaurusWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  text-align: left;
  padding: 20px;

  h1 {
    font-weight: bolder;
  }
`;

const PrimaryWrapper = styled.div`
  width: 100%;

  button {
    margin-left: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p {
    font-style: italic;
  }
`;

const ShortDefinitionWrapper = styled.div`
  margin: 10px 0;
`;
const SecondaryWrapper = styled.div`
  margin: 10px 0;
  width: 100%;
  word-wrap: break-word;
  h3 {
    font-weight: bolder;
  }
`;

export default Thesaurus;
