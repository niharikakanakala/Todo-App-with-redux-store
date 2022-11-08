import * as React from 'react';
import { screen, within } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Counter from "./src/components/Footer/Counter/Counter";
import Input from "./src/components/Input/Input";
import Header from './src/components/Header/Header';
import Filters from './src/components/Footer/Filters/Filters';
import { renderWithRedux } from "./src/utils/testUtils/renderWithRedux";

describe('Counter', () => {
    test('count amount of undone todos', () => {
      const { store } = renderWithRedux(<Counter />);
      const getState = store.getState;
  
      const CounterEl = screen.getByTestId('counter');
      expect(CounterEl).toBeInTheDocument;
  
      // соответствует ли счетчик кол-ву незавершенных тудушек
      const amountOfUndoneTodos = getState().toDo.reduce((acc, curr) => {
        curr.isDone === false && acc++
        return acc
      }, 0);
      expect(Number(CounterEl.textContent)).toBe(amountOfUndoneTodos);
    })
  })

  describe('Input', () => {
    test('create and add new ToDo', () => {
      const { store } = renderWithRedux(<Input />)
      const getState = store.getState;
      const formEl = screen.getByRole('form');
      const inputEl = screen.getByRole('textbox')
      // проверка рендеринга
      expect(formEl).toBeInTheDocument;
      expect(inputEl).toBeInTheDocument;
      // проверка изначального стейта редакс
      expect(getState().toDo.length).toBe(1)
      expect(getState().toDo[0].value).toBe('initial ToDo')
  
      // печатает название туду в инпуте...
      userEvent.type(inputEl, 'my new test todo');
      expect(inputEl.value).toBe('my new test todo');
  
      // сабмит по Enter и добавление нового туду в список
      userEvent.keyboard('{enter}');
      // проверка нового туду в сторе
      expect(getState().toDo.length).toBe(2);
      expect(getState().toDo[1].value).toBe('my new test todo');
      // обнуление input.value
      expect(inputEl.value).toBe('');
    })
  })
  
  describe('Header', () => {
    test('click on button toggle all todos status', () => {
      const { store } = renderWithRedux(<Header />);
      const getState = store.getState;
  
      const ButtonEl = screen.getByRole('button');
      const FormEl = screen.getByRole('form');
      expect(ButtonEl).toBeInTheDocument;
      expect(FormEl).toBeInTheDocument;
  
      // переключает все тудушки в статус "выполнены"
      userEvent.click(ButtonEl);
      getState().toDo.forEach(el => el.isDone === true);
      // переключает все тудушки в статус "не выполнены"
      userEvent.click(ButtonEl);
      getState().toDo.forEach(el => el.isDone === false);
    })
  
  })

  //Filters
  describe('Filters', () => {
    test('filter todos: show All', () => {
      const { store } = renderWithRedux(<Filters />);
      const getState = store.getState;
      const BtnAll = within(screen.getByTestId('all')).getByRole('button');
      expect(BtnAll).toBeInTheDocument;
  
      // click on the "show all" button
      userEvent.click(BtnAll);
      // checking the filter in the store
      expect(getState().filterToDo.currentStatus).toBe('all');
      // checking the state that all todos are displayed
      getState().toDo.forEach(el => expect(el.isDisplay).toBeTruthy());
      // checking that a styling class has been added to an element
      expect(BtnAll.classList.length).not.toBe(0);
    })
  
    test('filter todos: show Active', () => {
      const { store } = renderWithRedux(<Filters />);
      const getState = store.getState;
      const BtnActive = within(screen.getByTestId('active')).getByRole('button');
      expect(BtnActive).toBeInTheDocument;
  
      // click on the "show only active" button
      userEvent.click(BtnActive);
      // checking the filter in the store
      expect(getState().filterToDo.currentStatus).toBe('active');
      // state check that only active ones are displayed
      getState().toDo.forEach(el => {
        !el.isDone
          ? expect(el.isDisplay).toBeTruthy()
          : expect(el.isDisplay).toBeFalsy();
      });
      // checking that a styling class has been added to an element
      expect(BtnActive.classList.length).not.toBe(0);
    })
  
    test('filter todos: show completed', () => {
      const { store } = renderWithRedux(<Filters />);
      const getState = store.getState;
      const BtnCompleted = within(screen.getByTestId('completed')).getByRole('button');
      expect(BtnCompleted).toBeInTheDocument;
  
      // click on the button "show only completed
      userEvent.click(BtnCompleted);
      // checking the filter in the store
      expect(getState().filterToDo.currentStatus).toBe('completed');
      // checking the state that only completed ones are displayed
      getState().toDo.forEach(el => {
        el.isDone
          ? expect(el.isDisplay).toBeTruthy()                                                                                                                                                   
          : expect(el.isDisplay).toBeFalsy();'-'
      });
      // checking that a styling class has been added to an element
      expect(BtnCompleted.classList.length).not.toBe(0);
    })
    test('filter todos: delete completed', () => {
      const { store } = renderWithRedux(<Filters />);
      const getState = store.getState;
      const BtnDeleteCompleted = within(screen.getByTestId('deleteCompleted')).getByRole('button');
      expect(BtnDeleteCompleted).toBeInTheDocument;
  
      // клик по кнопке "удалить завершенные"
      userEvent.click(BtnDeleteCompleted);
      // проверка, что все завершенные удалены из стора
      getState().toDo.forEach(el => expect(el.isDone).toBeFalsy());
      // проверка, что все элементы отображаются на экране
      getState().toDo.forEach(el => expect(el.isDisplay).toBeTruthy());
    })
  })