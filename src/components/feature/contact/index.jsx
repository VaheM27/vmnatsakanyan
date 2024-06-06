import { useEffect, useState } from "react";
import { tick } from "../../../helpers/tick";
import Spline from "@splinetool/react-spline";

import "./index.scss";

export default function Contact() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Frontend Developer"];
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
    <section>
      <div className="container">
        <div className="exo">
          <div className="title">
            <h1>
              {`Hi! I'm Vahe`}{" "}
              <span
                className="txt-rotate"
                dataperiod="1000"
                data-rotate='[ "Frontend Developer" ]'
              >
                <span className="wrap">{text}</span>
              </span>
            </h1>
            <p>
              A skilled <span>Frontend React.js Developer</span> with more than{" "}
              <span>3 years</span> of experience developing user-friendly and
              responsive web applications. Proficient in <span>React.js</span>,{" "}
              <span>Redux</span>, <span>TypeScript</span>, and{" "}
              <span>Next.js</span>, with a strong understanding of Web
              Development principles and best practices. Passionate about
              staying up-to-date with the latest technologies and industry
              trends to deliver high-quality solutions that meet client
              requirements.
            </p>
          </div>
          <Spline scene="https://prod.spline.design/S1aEBhaszdb0K7tn/scene.splinecode" />
          {/* <Spline scene="https://prod.spline.design/mj7mr04MOuA9YUpz/scene.splinecode" /> */}
        </div>
      </div>
    </section>
  );
}
