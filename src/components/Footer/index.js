import React from "react";
import "./Footer.scss";

function Footer() {
  const currYear = new Date().getFullYear();
  return (
    <div className="Footer">
      Designed & developed by{" "}
      <a href="https://github.com/yashpal-97" target="_blank" rel="noreferrer">
        Yashpal Katiyar
      </a>
    </div>
  );
}

export default Footer;
