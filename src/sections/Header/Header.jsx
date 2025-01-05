import React from "react";

const Header = () => {
  return (
    <div
      style={{
        height: "70px",
        width: "100%",

        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px",
        fontSize: "25px",
        fontFamily: "'Roboto Mono', 'monospace'",
      }}
    >
      <div style={{ color: "GrayText" }}>portfolio</div>
      <div style={{ display: "flex" }}>
        <a href="#skills" style={{ textDecoration: "none", color: "GrayText" }}>
          Header
        </a>
        <a
          href="#skills"
          style={{
            textDecoration: "none",
            color: "GrayText",
            paddingLeft: "20px",
          }}
        >
          Header
        </a>
        <a
          href="#skills"
          style={{
            textDecoration: "none",
            color: "GrayText",
            paddingLeft: "20px",
          }}
        >
          Header
        </a>
        <a
          href="#skills"
          style={{
            textDecoration: "none",
            color: "GrayText",
            paddingLeft: "20px",
          }}
        >
          Header
        </a>
      </div>
    </div>
  );
};

export default Header;
