import React, { useState, useEffect } from "react";
import styled from "styled-components";

//api
import { GetChartTracks } from "../apis/openLyrics";

const TestPage = () => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const handleClick = async () => {
      const trackData = await GetChartTracks("밤양갱");
      setTracks(trackData);
    };

    handleClick();
  }, []);

  return (
    <>
      <Wrapper>
        <Title>무엇을 노래하나요?</Title>
        {tracks.map((track) => (
          <Result key={track.id}>
            <div>
              <img src={track.album.images[1].url} alt="album cover img" />
            </div>
            <div>
              <p>{track.name}</p>
              <p>{track.artists[0].name}</p>
            </div>
          </Result>
        ))}
      </Wrapper>
    </>
  );
};

export default TestPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5.8rem 0 16.8rem;
  gap: 10px;
`;

const Title = styled.div`
  margin-top: 12.3rem;

  color: var(--black);

  font-size: 3.2rem;
  font-style: normal;
  font-weight: 900;
  line-height: 105%;
  letter-spacing: -0.096rem;
`;

const Result = styled.div`
  display: flex;
  flex-direction: row;

  div > img {
    width: 50px;
    height: 50px;
  }
`;
