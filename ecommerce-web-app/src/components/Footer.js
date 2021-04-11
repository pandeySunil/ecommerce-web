import react from "react";
import footerBanner from "./footerBanner.jpg";
import "./footer.scss";

const Footer = (props) => {
  return (
    <footer
      style={{
        backgroundImage: `url(${footerBanner})`,
      }}
    ></footer>
  );
};

export default Footer;
