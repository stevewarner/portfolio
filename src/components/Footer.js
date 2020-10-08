import React from "react";

const Footer = class extends React.Component {
  render() {
    return (
      <footer
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "2em",
        }}
      >
        <a
          className="navbar-item"
          href="https://github.com/stevewarner"
          target="_blank"
          rel="noopener noreferrer"
        >
          @stevenwarner
        </a>
      </footer>
    );
  }
};

export default Footer;
