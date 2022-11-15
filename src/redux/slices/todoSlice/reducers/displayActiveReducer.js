import * as React from 'react';
import { manageLocalStorage } from '../../../../utils/manageLocalStorage';
// constants
import { LSNAME_TODO } from '../../../../constants/constants';

export const displayActiveReducer = (state, action) => {


  //Complete the reducer 
  //write the reducer in const `update`
  //Check the state that only completed ones are displayed



  manageLocalStorage(LSNAME_TODO, 'set', updState)
  
}