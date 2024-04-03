import styled from "styled-components";

import ResultTopbar from "../components/ResultPage/ResultTopbar";
import FilterResult from "../components/ResultPage/FilterResult";
import Footer from "../components/common/Footer";
import FloatingBtn from "../components/common/MainPage/FloatingBtn";

const ResultPage = () => {
    //트레킹 코드
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
      <Wrapper>
        <ResultTopbar />
        <FilterResult />
      </Wrapper>
      <Footer />
      <FloatingBtn />
    </>
  );
};

export default ResultPage;

const Wrapper = styled.div`
  padding: 13.5rem 0 15.8rem;
  min-height: 100%;
`;
