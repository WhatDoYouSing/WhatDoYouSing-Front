import React, { useState, useEffect } from "react";
import styled from "styled-components";

//components
import RecCarousel from "../components/RecommendPage/RecCarousel";
import Topbar from "../components/common/MainPage/Topbar";

import { ReactComponent as Reload } from "../images/reload.svg";

const RecommendPage = () => {
  useEffect(() => {
    (function (w, d, a) {
      w.__beusablerumclient__ = {
        load: function (src) {
          var b = d.createElement("script");
          b.src = src;
          b.async = true;
          b.type = "text/javascript";
          d.getElementsByTagName("head")[0].appendChild(b);
        },
      };
      w.__beusablerumclient__.load(a + "?url=" + encodeURIComponent(d.URL));
    })(window, document, "//rum.beusable.net/load/b230311e131233u903");
  }, []);

  return (
    <>
      <Topbar />
      <Wrapper>
        <ScrollContainer>
          <RecCarousel />
        </ScrollContainer>
        <Reload style={{ marginBottom: "7.6rem" }} />
      </Wrapper>
    </>
  );
};

export default RecommendPage;

const Wrapper = styled.div`
  margin: 5rem 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 4rem;
`;

const ScrollContainer = styled.div`
  padding: 9rem 0 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;
