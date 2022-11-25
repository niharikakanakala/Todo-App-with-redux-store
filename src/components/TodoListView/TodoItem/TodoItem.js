import React from 'react';

import styles from './ToDoItem.css';
import classNames from 'classnames/bind';

import { useDispatch } from 'react-redux';
import { changeStatus, deleteToDo, changeValue, changeEditingMode } from '../../../redux/slices/todoSlice/todoSlice';

import { EDIT_INPUT_ID, SUMBIT_KEYCODE } from '../../../constants/constants';

const cn = classNames.bind(styles);

function ToDoItem({ toDo }) {
  const { id, value, isDisplay } = toDo
  const dispatch = useDispatch()

  const handleCheckBox = () => dispatch(changeStatus({ id }))
  const handleDelete = () => dispatch(deleteToDo({ id }))
  const handleDoubleClick = () => dispatch(changeEditingMode({ id }))
  const handleChangeValue = (e) => {
   
    if (e.keyCode === SUMBIT_KEYCODE && e.target.value !== '') {
      dispatch(changeValue({
        id,
        newValue: e.target.value
      }))
      
      dispatch(changeEditingMode({ id }))
    }
  }

  return (
    <li
      className={cn('todoItem', { editing: toDo.isEditing })}
      style={{ display: isDisplay ? 'block' : 'none' }}
    >
      <input
        className={cn('itemCheckBox')}
        type="checkbox"
        onChange={handleCheckBox}
        checked={toDo.isDone}
        data-testid="checkbox"
      />
      <label
        className={cn('labelContent')}
        value={value}
        onDoubleClick={handleDoubleClick}
        data-testid="label"
      >
        {value}
      </label>
      <input className={cn('edit')}
        id={EDIT_INPUT_ID}
        type="text"
        defaultValue={value}
        onKeyUp={handleChangeValue}
      />
      <button
        className='remove'
        onClick={handleDelete}
        data-testid="removeBtn"
      />
    </li>
  )
}

export default ToDoItem;