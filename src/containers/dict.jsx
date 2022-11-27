import { Button } from "antd";
import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../context/GlobalContext";
import { FcSpeaker } from "react-icons/fc";

const Collegiate = () => {
  const { wordMeaning } = useContext(GlobalContext);

  const playPronunciation = (group) => {
    let audioId = group?.hwi?.prs && group?.hwi?.prs[0].sound.audio;
    let subdirectory;
    if (audioId?.slice(0, 3) === "bix") {
      subdirectory = "bix";
    } else if (audioId?.slice(0, 2) === "gg") {
      subdirectory = "gg";
    } else if (typeof audioId[0] == "number") {
      subdirectory = "number";
    } else {
      subdirectory = audioId[0];
    }

    let audioURL = `https://media.merriam-webster.com/audio/prons/en/us/mp3/${subdirectory}/${audioId}.mp3`;

    new Audio(audioURL).play();
  };

  return (
    <>
      {!wordMeaning || !wordMeaning?.length ? (
        <CollegiateWrapper>
          <p>No results!</p>
          <p>Search word to find it's meaning.</p>
        </CollegiateWrapper>
      ) : (
        <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          {wordMeaning &&
            wordMeaning.map((group) => (
              <CollegiateWrapper>
                <PrimaryWrapper>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <h1>{group?.hwi?.hw}</h1>
                    <Button
                      icon={<FcSpeaker />}
                      type="default"
                      ghost
                      onClick={() => playPronunciation(group)}
                    />
                  </div>
                  <p>
                    <span>{group?.fl}</span>{" "}
                    <span>\{group?.hwi?.prs && group?.hwi?.prs[0].mw}\</span>
                  </p>
                  <ShortDefinitionWrapper style={{ textAlign: "left" }}>
                    {group?.shortdef?.map((def) => (
                      <li>{def}</li>
                    ))}
                  </ShortDefinitionWrapper>
                </PrimaryWrapper>
                <WordOriginWrapper>
                  <h3>Related words</h3>
                  {group?.meta?.stems.map((w) => (
                    <span>{w},&nbsp;</span>
                  ))}
                </WordOriginWrapper>
                <WordOriginWrapper>
                  <h3>Origin</h3>
                  <div>
                    <p>{group?.et && group?.et[0][1]}</p>
                    <p>First known use: {group?.date}</p>
                  </div>
                </WordOriginWrapper>
              </CollegiateWrapper>
            ))}
        </div>
      )}
    </>
  );
};

const CollegiateWrapper = styled.div`
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
const WordOriginWrapper = styled.div`
  margin: 10px 0;
  h3 {
    font-weight: bolder;
  }
`;

export default Collegiate;
