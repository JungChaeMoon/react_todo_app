import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoTemplate from "./TodoTemplate";
import TodoInsert from "./TodoInsert";

const App = () => {
  return <TodoTemplate><TodoInsert /></TodoTemplate>
}

export default App;
