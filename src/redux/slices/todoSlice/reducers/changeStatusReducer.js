import * as React from 'react';
import { manageLocalStorage } from '../../../../utils/manageLocalStorage';
// constants
import { LSNAME_TODO } from '../../../../constants/constants';

export const changeStatusReducer = (state, action) => {
  const { id, changeAll = false } = action.payload
  let updState;
  switch (changeAll) {
    case false:
      updState = [...state].map((el) => {
        if (el.id === id) el.isDone = !el.isDone
        return el
      })
      break
    case true:
      
      const checkStatuses = state.every((el) => el.isDone === true)
     
      //Change the status of all to-do's
      // Using if-else condition check whether checkStatuses are true or false i.e., todo's are done or not

      break
    default:
      updState = state
  }

  
  manageLocalStorage(LSNAME_TODO, 'set', updState)
  
}