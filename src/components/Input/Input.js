
import React, { createRef, useState } from 'react';
// redux
import { useDispatch } from 'react-redux';
import { addNewToDo } from '../../redux/slices/toDoSlice/toDoSlice';
// constants
import { INPUT_PLACEHOLDER } from '../../constants/constants';
import styled from 'styled-components';

const Form_Sty = styled.form `
    width: 100%;  
`;
const New_Todo = styled.input `
    margin: 0;
    width: 100%;
    color: #DDA0DD;
    font-size: 24px;
    border: 0;
    outline: none;
    box-sizing: border-box;
    padding: 16px 16px 16px 60px;
`;

function Input() {
  const dispatch = useDispatch()

  const inputRef = createRef(null)
  const [inputVal, setInputVal] = useState('')

  return (
    <Form_Sty name="form" noValidate autoComplete="off"
      onSubmit={(e) => {
        e.preventDefault()
        const newToDoPayload = inputRef.current.value
          
          //Complete the onSubmit function
          //check initial state redux
          // update store in case of not empty input
       
          //Prints the title that is entered as input..
          //After submitting, it should add as a new to-do to the list
          
          // clear input after that


      }}
    >
      <New_Todo
        placeholder={INPUT_PLACEHOLDER}
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        ref={inputRef}
      />
    </Form_Sty>
  )
}

export default Input;