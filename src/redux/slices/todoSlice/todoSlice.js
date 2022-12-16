import * as React from 'react';
import { createSlice } from "@reduxjs/toolkit";
// constants
import { LSNAME_TODO } from "../../../constants/constants";
// reducers
import { addNewTodoReducer } from "./reducers/addNewTodoReducer";
import { deleteTodoReducer } from "./reducers/deleteTodoReducer";
import { changeStatusReducer } from "./reducers/changeStatusReducer";
import { changeValueReducer } from "./reducers/changeValueReducer";
import { changeEditingModeReducer } from "./reducers/changeEditingModeReducer";
import { displayAllReducer } from "./reducers/displayAllReducer";
import { displayActiveReducer } from "./reducers/displayActiveReducer";
import { displayCompletedReducer } from "./reducers/displaycompletedReducer";

export const toDoSlice = createSlice({
  name: LSNAME_TODO,
  initialState: '',
  reducers: {
    addNewTodo: addNewTodoReducer,
    deleteTodo: deleteTodoReducer,
    changeStatus: changeStatusReducer,
    changeValue: changeValueReducer,
    changeEditingMode: changeEditingModeReducer,
    displayAll: displayAllReducer,
    displayActive: displayActiveReducer,
    displayCompleted: displayCompletedReducer,
  }
})

export const { addNewTodo, deleteTodo, changeStatus, changeValue, changeEditingMode, displayAll, displayActive, displayCompleted } = toDoSlice.actions
export default toDoSlice.reducer