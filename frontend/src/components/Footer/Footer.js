import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright © {year}</p>
      <img
        src="https://github.githubassets.com/images/modules/site/icons/footer/github-mark.svg"
        width="20"
        height="20"
        class="d-block"
        loading="lazy"
        decoding="async"
        alt="GitHub mark"
      ></img>
    </footer>
  );
}
