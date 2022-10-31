import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { footerLinks } from "../utils/data";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinksWrapper>
        {footerLinks.map((lk, i) => (
          <Button
            icon={lk.icon}
            type="text"
            key={i}
            href={lk.url}
            target="_blank"
          />
        ))}
      </LinksWrapper>
      <cite>Developed and designed by OAS © 2022</cite>
      <Link to="/">
        <img src="/dictionary.png" alt="logo" widt={30} height={30} />
      </Link>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  width: 100%;
  height: 200px;
  background-color: #1a2238;
  color: lavender;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    margin: 10px 0;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 0;

  button,
  a {
    margin: 0 10px;
  }
`;

export default Footer;
