import { useEffect, useState } from "react";
import logo from "../../../assets/images/new_logo.png";
import navIcon1 from "../../../assets/images/nav-icon1.svg";

import "./index.scss";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  return (
    <nav>
      <div className="container">
        <div className={scrolled ? "scrolled mainContent" : "mainContent"}>
          <img src={logo} alt="" />
          <ul>
            <li>
              <a href="#" onClick={() => onUpdateActiveLink("about")}>
                About Me
              </a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li className="social-icon">
              <a
                href="https://www.linkedin.com/in/vahe-mnatsakanyan-665157202/"
                target="_blank"
              >
                <img src={navIcon1} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
