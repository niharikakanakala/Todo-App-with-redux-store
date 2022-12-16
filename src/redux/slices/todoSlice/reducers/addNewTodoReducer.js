import * as React from 'react';
import { manageLocalStorage } from '../../../../utils/manageLocalStorage';
// constants
import { LSNAME_TODO, DATA_PRESET } from '../../../../constants/constants';

export const addNewTodoReducer = (state, action) => {

  const updState = [...state, DATA_PRESET(action.payload)]

  manageLocalStorage(LSNAME_TODO, 'set', updState)
  return updState
}