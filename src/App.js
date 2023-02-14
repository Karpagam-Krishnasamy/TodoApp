import { React, useEffect } from 'react';
import './App.scss';
import TodoPane from './components/todoPane/todoPane';
import TaskPane from './components/taskPane/taskPane';
import taskGenerator from './services/taskGenerator';
import Buttons from './components/Buttons';

const App = (context) => {
	useEffect(() => taskGenerator.getTasks(context), []);

	return <div className="App" role="App">
		<Buttons { ...context }/>
		<div className="row">
			<TodoPane context={ context }/>
			<TaskPane context={ context }/>
		</div>
	</div>;
};

export default App;
