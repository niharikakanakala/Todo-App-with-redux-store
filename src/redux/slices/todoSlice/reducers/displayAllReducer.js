import * as React from 'react';
import { manageLocalStorage } from '../../../../utils/manageLocalStorage';
// constants
import { LSNAME_TODO } from '../../../../constants/constants';

export const displayAllReducer = (state, action) => {

  ////Complete the reducer 
  //write the reducer in const `update`
  //checking the state that all todos are displayed
  
  manageLocalStorage(LSNAME_TODO, 'set', updState)
  
}