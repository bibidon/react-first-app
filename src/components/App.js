import React from 'react';

import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import ButtonContainer from '../containers/ButtonContainer';
import ThemeApp from "../context-example/theme-app";

const App = () => (
    <div>
        <AddTodo/>
        <VisibleTodoList/>
        <Footer/>
        <ButtonContainer/>
        <ThemeApp/>
    </div>
);

export default App;
