import React from "react";
import Button from "../../components/button";
import useWindowSize from "../../hooks/useWindowSize";
import { elastic as Menu } from "react-burger-menu";
import hamburgerButton from "../../assets/images/icons/bm-burger-bars.png";
import crossIcon from "../../assets/images/icons/close.gif";

const styles = {
  bmBurgerButton: {
    background: "#F9F4EE",
    padding: "12px 12px"
  },
  bmBurgerBars: {
    background:
      "linear-gradient(90deg, rgba(33, 212, 253, 0.3) 0%, rgba(183, 33, 255, 0.3) 100%)",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenu: {
    background: "#FFFFFF",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#FFFFFF",
    display: "none",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
  },
  bmItem: {
    display: "flex",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
    left: 0,
    top: 0
  },
};

const Header = () => {
  const windowSize = useWindowSize();
  const isWideScreen = windowSize.width >= 992;
  return (
    (() => {
      if (isWideScreen) {
        return (
          <div className="header flex flex-row justify-between items-center">
            <ul className="inline-flex">
              <li><a href="#about">About</a></li>
              <li><a href="#news">News</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#ourteam">Our Team</a></li>
              <li><a href="#make-enquiry">Make Enquiry</a></li>
            </ul>
            <Button />
          </div>
        );
      } else {
        return (
          <div className="burger-menu flex flex-row justify-between items-center">
            <Button />
            <Menu
              styles={styles}
              right
              customBurgerIcon={<img src={hamburgerButton} alt="Hamburger Button" />}
              customCrossIcon={<img src={crossIcon} alt="Close" />}
            >
              <div className="flex flex-col justify-between items-start">
                <ul>
                  <li><a href="#about">About</a></li>
                  <li><a href="#news">News</a></li>
                  <li><a href="#services">Services</a></li>
                  <li><a href="#ourteam">Our Team</a></li>
                  <li><a href="#make-enquiry">Make Enquiry</a></li>
                </ul>
              </div>
            </Menu>
          </div>                  
        );
      }
    })()
  );
};

export default Header;
