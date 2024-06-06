import { useEffect, useState } from "react";
import { tick } from "../../../helpers/tick";
import eyes from "../../../assets/images/giphy.webp";

import "./index.scss";

export default function Loader() {
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(1);
  const toRotate = ["DOM Rendering"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick(
        setDelta,
        text,
        setLoopNum,
        setIsDeleting,
        setIndex,
        toRotate,
        period,
        setText,
        isDeleting,
        loopNum
      );
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  return (
    <div className="loader">
      <div className="loader__spinner">
        <img src={eyes} alt="" />
        <h1>
          {`Wait until`}{" "}
          <span
            className="txt-rotate"
            dataperiod="1000"
            data-rotate='[ "DOM Rendering" ]'
          >
            <span className="wrap">{text}</span>
          </span>
        </h1>
        <div class="middle">
          <div class="bar bar1"></div>
          <div class="bar bar2"></div>
          <div class="bar bar3"></div>
          <div class="bar bar4"></div>
          <div class="bar bar5"></div>
          <div class="bar bar6"></div>
          <div class="bar bar7"></div>
          <div class="bar bar8"></div>
        </div>
      </div>
    </div>
  );
}
