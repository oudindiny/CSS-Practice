import React from "react";
import DropdownClose from "./hooks/DropdownClose";
import styled, { css } from "styled-components";

const DropdownMenu = () => {
  const [myPageIsOpen, myPageRef, myPageHandler] = DropdownClose(false);
  const [borderIsOpen, borderRef, borderHandler] = DropdownClose(false);

  const logoutClickHandler = () => {
    console.log("logout");
  };

  return (
    <Wrapper>
      <DropdownContainer>
        <DropdownButton onClick={myPageHandler} ref={myPageRef}>
          마이페이지
        </DropdownButton>
        <Menu isDropped={myPageIsOpen}>
          <UL>
            <LI>
              <LinkWrapper href="#1-1">메뉴1</LinkWrapper>
            </LI>
          </UL>
          <UL>
            <LI>
              <LinkWrapper href="#1-2">메뉴2</LinkWrapper>
            </LI>
          </UL>
          <UL>
            <LI>
              <LinkWrapper href="#1-3">메뉴3</LinkWrapper>
            </LI>
          </UL>
        </Menu>
      </DropdownContainer>
      <DropdownContainer>
        <DropdownButton onClick={borderHandler} ref={borderRef}>
          게시판
        </DropdownButton>
        <Menu isDropped={borderIsOpen}>
          <UL>
            <LI>
              <LinkWrapper href="#2-1">메뉴1</LinkWrapper>
            </LI>
          </UL>
          <UL>
            <LI>
              <LinkWrapper href="#2-2">메뉴2</LinkWrapper>
            </LI>
          </UL>
          <UL>
            <LI>
              <LinkWrapper href="#2-3">메뉴3</LinkWrapper>
            </LI>
          </UL>
        </Menu>
      </DropdownContainer>
      <Logout onClick={logoutClickHandler}>로그아웃</Logout>
    </Wrapper>
  );
};
export default DropdownMenu;

const Wrapper = styled.div`
  margin: 100px auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  font-size: 19px;
  background: gray;
  width: 500px;
  height: 50px;
  font-weight: bold;
`;

const DropdownContainer = styled.div`
  position: relative;
  text-align: center;
`;

const DropdownButton = styled.div`
  cursor: pointer;
`;

const Menu = styled.div`
  background: gray;
  position: absolute;
  top: 52px;
  left: 50%;
  width: 100px;
  text-align: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  opacity: 0;
  visibility: hidden;
  transform: translate(-50%, -20px);
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  z-index: 9;

  &:after {
    content: "";
    height: 0;
    width: 0;
    position: absolute;
    top: -3px;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 12px solid transparent;
    border-top-width: 0;
    border-bottom-color: gray;
  }
  ${({ isDropped }) =>
    isDropped &&
    css`
      opacity: 1;
      visibility: visible;
      transform: translate(-50%, 0);
      left: 50%;
    `};
`;

const UL = styled.ul`
  & > li {
    margin-bottom: 10px;
  }

  & > li:first-of-type {
    margin-top: 10px;
  }

  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const LI = styled.li``;

const LinkWrapper = styled.a`
  font-size: 16px;
  text-decoration: none;
  color: white;
`;
const Logout = styled.div`
  cursor: pointer;
  font-size: 16px;
  display: block;
  text-decoration: none;
  color: white;
  font-size: 19px;
`;
