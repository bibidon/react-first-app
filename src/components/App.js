import React from 'react';

import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import ButtonContainer from '../containers/ButtonContainer';

const App = () => (
	<div>
		<AddTodo/>
		<VisibleTodoList/>
		<Footer/>
        <ButtonContainer/>
	</div>
);

export default App;
