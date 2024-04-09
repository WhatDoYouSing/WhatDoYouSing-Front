import { styled } from "styled-components";
import EmotionChip from "../common/EmotionChip";

import { useRecoilValue } from "recoil";
import { emotionListAtom, profileListAtom } from "../../assets/recoil/recoil";

const LyricWithWriter = ({ lyricContent }) => {
  const emotions = useRecoilValue(emotionListAtom);
  const profiles = useRecoilValue(profileListAtom);

  console.log(lyricContent);
  // 프로필 이미지 설정
  const profileIndex = lyricContent?.author_profile
    ? lyricContent.author_profile - 1
    : 0;
  const profileImageSrc = profiles[profileIndex].none_filled;

  const emotionBoolean =
    lyricContent.sings_emotion + 1 ? lyricContent.sings_emotion + 1 : false;

  return (
    <Wrapper>
      <ProfileWrapper>
        <ProfileContainer>
          <img src={profileImageSrc} alt="profileimg" />
        </ProfileContainer>
        {emotionBoolean && (
          <EmotionChip
            size="small"
            text={emotions[lyricContent.sings_emotion].text}
            src={emotions[lyricContent.sings_emotion].src}
          />
        )}
      </ProfileWrapper>
      <TitleLyrics>{lyricContent.lyrics}</TitleLyrics>
      <LyricsComment>{lyricContent.content}</LyricsComment>
      <Writer>by. {lyricContent.author_nickname}</Writer>
    </Wrapper>
  );
};

export default LyricWithWriter;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  padding-top: 1.6rem;
  padding-bottom: 2rem;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: var(--lightGray);

  img {
    width: 21px;
    height: 21px;
  }
`;

const TitleLyrics = styled.div`
  display: flex;
  margin-bottom: 1.6rem;

  color: var(--Black, #262121);

  font-size: 4rem;
  font-style: normal;
  font-weight: 900;
  line-height: 105%;
  letter-spacing: -0.12rem;
`;

const LyricsComment = styled.div`
  display: flex;
  width: 74%;
  margin-bottom: 2rem;

  overflow: hidden;
  color: var(--Black, #262121);
  text-overflow: ellipsis;

  font-size: 1.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.98px;
`;
const Writer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
`;
