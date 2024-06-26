import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { ReactComponent as Search } from "../../images/search.svg";
import { ReactComponent as DefaultEmoji } from "../../images/search-lyric-emoji.svg";
import { ReactComponent as NoResultSvg } from "../../images/noContent.svg";

import { GetChartTracks } from "../../apis/openLyrics";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { SpotifyToken, TrackState } from "../../assets/recoil/apiRecoil";

const SearchContent = ({ setSelectOpen, setInputModal, setSearchOpen }) => {
  const [keyword, setKeyword] = useState("");
  const [tracks, setTracks] = useState(null);

  const token = useRecoilValue(SpotifyToken);

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleSearch = () => {
    if (keyword.trim() !== "") {
      GetChartTracks(keyword, token).then((trackData) => {
        setTracks(trackData);
        console.log(trackData);
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

  const setTrackInfo = useSetRecoilState(TrackState);
  const handleSelectTrack = (track) => {
    setTrackInfo({
      id: track.id,
      image: track.album.images[1].url,
      name: track.name,
      artist: track.artists[0].name,
    });
    setSelectOpen(true);
  };

  // 직접가사입력 모달열기
  const handleLyricWriteClick = () => {
    setInputModal(true);
    setSearchOpen(false);
  };

  return (
    <>
      <InputContainer>
        <input
          type="text"
          placeholder="가수명, 제목을 검색해보세요!"
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
                    <span style={{ fontWeight: "700" }}>{track.name}</span>
                    <span>
                      {track.artists.map((artist, index) => (
                        <span key={index}>
                          {artist.name}
                          {index !== track.artists.length - 1 && ", "}
                        </span>
                      ))}
                    </span>
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
            <WriteLyricBtn onClick={handleLyricWriteClick}>
              직접 가사 입력하기
            </WriteLyricBtn>
          </DefaltContainer>
        )
      ) : (
        <DefaltContainer>
          <DefaultEmoji style={{ flexShrink: "0" }} />
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

  input {
    width: 100%;
    height: 4.8rem;
    border: none;
    outline: none;
    border-radius: 0;
    border-bottom: 0.15rem solid var(--black);

    font-family: "FullAppleSDGothicNeo";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;

    &::placeholder {
      color: var(--gray);
    }
  }

  svg {
    flex-shrink: 0;
  }
`;

const ResultNum = styled.div`
  margin: 1.6rem 0;
  color: var(--veryDarkGray);
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.32px;
`;

const ResultContainer = styled.div`
  padding-top: 8px;
  height: calc(90vh - 204.5px);
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ResultBox = styled.div`
  margin: 8px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  cursor: pointer;

  img {
    width: 50px;
    height: 50px;
    border-radius: 8px;
    flex-shrink: 0;
  }

  div {
    width: calc(100% - 66px);
    display: flex;
    flex-direction: column;
    gap: 8px;

    color: var(--black);
    font-family: "FullAppleSDGothicNeo";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%; /* 20.8px */
    letter-spacing: -0.16px;

    span {
      overflow-x: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`;

const DefaltContainer = styled.div`
  padding-top: 13.2rem;
  display: flex;
  flex-direction: column;
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
  flex-shrink: 0;
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
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.4px;
`;
