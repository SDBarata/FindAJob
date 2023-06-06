import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div>
        <p>Copyright © {year} Samuel Barata</p>
      </div>
      <div className="footer-icons">
        <img
          src="https://github.githubassets.com/images/modules/site/icons/footer/github-mark.svg"
          width="18"
          height="18"
          className="d-block"
          alt="GitHub mark"
        ></img>
        <img
          src="https://github.githubassets.com/images/modules/site/icons/footer/facebook.svg"
          width="18"
          height="18"
          className="d-block"
          alt="Facebook icon"
        ></img>
        <img
          src="https://github.githubassets.com/images/modules/site/icons/footer/linkedin.svg"
          width="18"
          height="18"
          className="d-block"
          alt="Linkedin icon"
        ></img>
      </div>
    </footer>
  );
}
