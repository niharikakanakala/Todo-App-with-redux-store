import * as React from 'react';
import { manageLocalStorage } from '../../../../utils/manageLocalStorage';
// constants
import { LSNAME_TODO } from '../../../../constants/constants';

export const deleteToDoReducer = (state, action) => {
  const { id, deleteCompleted = false } = action.payload
  
  //complete the reducer to 
  // delete all completed ToDos 
  
  manageLocalStorage(LSNAME_TODO, 'set', updState)
  return updState
}