import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { ReactComponent as Search } from "../../images/search.svg";
import { ReactComponent as DefaultEmoji } from "../../images/search-lyric-emoji.svg";
import { ReactComponent as NoResultSvg } from "../../images/noContent.svg";

import { GetChartTracks } from "../../apis/openLyrics";

const SearchContent = ({ setSelectOpen, setSelectedTrack }) => {
  const [keyword, setKeyword] = useState("");
  const [tracks, setTracks] = useState(null);

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleSearch = () => {
    if (keyword.trim() !== "") {
      GetChartTracks(keyword).then((trackData) => {
        setTracks(trackData);
      });
    } else {
      setTracks(null);
    }
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      handleSearch();
    }, 300);
    return () => clearTimeout(debounce);
  }, [keyword]);

  const handleSelectTrack = (track) => {
    setSelectedTrack({
      id: track.id,
      image: track.album.images[1].url,
      name: track.name,
      artist: track.artists[0].name,
    });
    setSelectOpen(true);
  };

  return (
    <>
      <InputContainer>
        <input
          type="text"
          placeholder="가수명이나 제목을 검색해보세요!"
          value={keyword}
          onChange={handleChange}
        />
        <Search onClick={handleSearch} />
      </InputContainer>
      {tracks ? (
        tracks.length !== 0 ? (
          <>
            <ResultNum>{tracks.length}개의 노래를 찾았어요!</ResultNum>
            <ResultContainer>
              {tracks.map((track) => (
                <ResultBox
                  key={track.id}
                  onClick={() => handleSelectTrack(track)}
                >
                  <img src={track.album.images[1].url} alt="album cover img" />
                  <div>
                    <span>{track.name}</span>
                    <span>{track.artists[0].name}</span>
                  </div>
                </ResultBox>
              ))}
            </ResultContainer>
          </>
        ) : (
          <DefaltContainer>
            <NoResultEmoji />
            <div>
              검색결과가 없어요.
              <br />
              사용자님이 직접 가사를 입력해 보시는 건 어때요?
            </div>
            <WriteLyricBtn>직접 가사 입력하기</WriteLyricBtn>
          </DefaltContainer>
        )
      ) : (
        <DefaltContainer>
          <DefaultEmoji />
          <div>
            등록하고 싶은 가사를 <br />
            간편하게 검색해보세요!
          </div>
        </DefaltContainer>
      )}
    </>
  );
};

export default SearchContent;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  gap: 0.8rem;
  margin: 2.4rem 0;

  input {
    width: 100%;
    height: 4.8rem;
    border: none;
    outline: none;
    border-bottom: 0.15rem solid var(--black);
    transition: border-bottom-color 0.3s ease;

    font-size: 16px;
    font-style: normal;
    font-weight: 500;

    &:focus,
    &:not(:placeholder-shown) {
      border-bottom-color: var(--pointPink);
    }

    &::placeholder {
      color: var(--gray);
    }
  }
`;

const ResultNum = styled.div`
  color: var(--veryDarkGray);
`;

const ResultContainer = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
`;

const ResultBox = styled.div`
  margin: 6px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 8px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
`;

const DefaltContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
  height: calc(100% - 182px);

  color: var(--darkGray);
  font-size: 1.6rem;
  text-align: center;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.032rem;
`;

const NoResultEmoji = styled(NoResultSvg)`
  width: 10.5rem;
  height: 10.5rem;
`;

const WriteLyricBtn = styled.div`
  margin-top: 3.6rem;
  padding: 1.8rem 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--gray);
  border-radius: 16px;
  cursor: pointer;

  color: var(--veryDarkGray);
  font-size: 2rem;
  font-weight: 600;
`;
