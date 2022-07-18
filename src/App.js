/* eslint-disable no-console */
import { React, useEffect } from 'react';
import './App.scss';
import TodoPane from './components/todoPane/todoPane';
import TaskPane from './components/taskPane/taskPane';
import taskGenerator from './services/taskGenerator';

const App = (context) => {
	console.log(context);

	useEffect(() => taskGenerator.getTasks(context), []);
	return <div className="App" role="App">
		<div className="row">
			<TodoPane context={ context }/>
			<TaskPane context={ context }/>
		</div>
	</div>;
};

export default App;
