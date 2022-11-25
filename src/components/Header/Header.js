import React from 'react';

import Input from '../Input/Input';
// redux
import { useDispatch } from 'react-redux';
import { changeStatus } from '../../redux/slices/todoSlice/todoSlice';
// constants
import { HEADER_TEXT } from '../../constants/constants';
import styled from 'styled-components';

const Header_Sty = styled.header `
     display: flex;
    border-bottom: 1px solid #ededed;
`;

const H1_Sty = styled.h1 `
    position: absolute;
    top: -155px;
    width: 100%;
    font-size: 100px;
    font-weight: 100;
    text-align: center;
    text-transform: capitalize;
    color: #4B0082;
`;

const Btn = styled.button `
    color: #8A2BE2;
    margin: 3px;
    padding: 9px 17px;
    text-decoration: none;
    border: 1px solid transparent;
    border-radius: 10px;
    cursor: pointer;
    border-color: rgba(175, 47, 47, 0.2);
    font-size: 22px;
    background-color: #D8BFD8;
    &:hover {
        color: white;
        background-color: #4B0082;
      }
 `;
const Button = ({ id, type = "button", text, handleClick }) => {
    return (
        <Btn
            id={id}
            type={type}
            onClick={handleClick}
            >
            ❯
        {text}
        </Btn>
    )
}

const Header = () => {
  const dispatch = useDispatch()

  function handleToggleAllBtn() {
    dispatch(changeStatus({ changeAll: true }))
  }

  return (
    <Header_Sty data-testid='header'>
      <H1_Sty>{HEADER_TEXT}</H1_Sty>
      <Button
        style="
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60px;
        border-color: #e5e8e6;"
    
        handleClick={handleToggleAllBtn}
      />
      <Input />
    </Header_Sty>
  )
}

export default Header;