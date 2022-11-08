import React from 'react';
import styled from 'styled-components';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { deleteToDo } from '../../../redux/slices/toDoSlice/toDoSlice';
import { displayAll, displayActive, displayCompleted } from '../../../redux/slices/toDoSlice/toDoSlice';
import { setFilterStatus } from '../../../redux/slices/filterSlice/filterSlice';
// constants
import {
  FILTERSTATUS_ALL, FILTERSTATUS_ACTIVE, FILTERSTATUS_COMPLETED,
  BUTTON_FILTER_ALL, BUTTON_FILTER_ACTIVE, BUTTON_FILTER_COMPLETED, BUTTON_FILTER_CLEARALL,
  LSNAME_FILTER
} from '../../../constants/constants';

const UnorderedList = styled.ul `
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const ListItem = styled.li `
  cursor: pointer;
  :last-child {
    margin-left: 70px;
  }
  .selected {
    border-color: rgba(175, 47, 47, 0.2);
  }
`;

const FilterButton = styled.button `
    color: inherit;
    margin: 6px;
    padding: 3px 7px;
    text-decoration: none;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.3s;
    background-color: #D8BFD8;
        
    &:hover {
        color: white;
        background-color: #4B0082;
      }
`
function Button({ id, type = 'button', text, handleClick }) {
  return (
    <FilterButton
      id={id}
      type={type}
      onClick={handleClick}
    >
      {text}
    </FilterButton>
  )
}

function Filters() {
  const dispatch = useDispatch()
  const filterStatus = useSelector(state => state[LSNAME_FILTER].currentStatus)

  const handleDisplayAll = () => {
    dispatch(displayAll())
    dispatch(setFilterStatus(FILTERSTATUS_ALL))
  }
  const handleDisplayActive = () => {
    dispatch(displayActive())
    dispatch(setFilterStatus(FILTERSTATUS_ACTIVE))
  }
  const handleDisplayCompleted = () => {
    dispatch(displayCompleted())
    dispatch(setFilterStatus(FILTERSTATUS_COMPLETED))
  }
  const handleDeleteAll = () => dispatch(deleteToDo({ deleteCompleted: true }))

  return (
    <UnorderedList>
      <ListItem data-testid='all'>
        <Button 
          text={BUTTON_FILTER_ALL}
          isSelected={filterStatus === FILTERSTATUS_ALL}
          handleClick={handleDisplayAll}

        />
      </ListItem>
      <ListItem data-testid='active'>
        <Button
          text={BUTTON_FILTER_ACTIVE}
          isSelected={filterStatus === FILTERSTATUS_ACTIVE}
          handleClick={handleDisplayActive}
        />
      </ListItem>
      <ListItem data-testid='completed'>
        <Button
          text={BUTTON_FILTER_COMPLETED}
          isSelected={filterStatus === FILTERSTATUS_COMPLETED}
          handleClick={handleDisplayCompleted}
        />
      </ListItem>
      <ListItem data-testid='deleteCompleted'>
        <Button
          text={BUTTON_FILTER_CLEARALL}
          handleClick={handleDeleteAll}
        />
      </ListItem>
    </UnorderedList>
  )
}

export default Filters;










