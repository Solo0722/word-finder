import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MainNav = () => {
  return (
    <NavWrapper>
      <Link to="/">
        <img src="/dictionary.png" alt="logo" widt={30} height={30} />
      </Link>
    </NavWrapper>
  );
};

const NavWrapper = styled.div`
  height: 60px;
  width: 100%;
  background: #1a2238;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  position: sticky;
  top: 0;
  box-shadow: 0px 20px 50px 0px rgba(0, 0, 0, 0.05);
  z-index: 10;

  ul {
    list-style-type: none;
    color: lavender;
    margin-top: 10px;
  }

  li {
    display: inline-block;
    padding: 7px;
    width: 100px;
    /* border: 1px solid lavender; */
    text-align: center;
    color: lavender;
    cursor: pointer;
    transition: all ease-in-out 0.3s;
  }
  li:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  li:first-child {
    border-left: 1px solid rgba(255, 255, 255, 0.2);
  }
  .actives {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export default MainNav;
