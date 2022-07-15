import { React, useEffect } from 'react';
import './App.scss';
import TodoPane from './components/todoPane/todoPane';
import TaskPane from './components/taskPane/taskPane';

const App = (context) => {
	const { actions } = context;

	useEffect(() => actions.generateTask(context), []);
	return <div className="App" role="App">
		<div className="row">
			<TodoPane context={ context }/>
			<TaskPane context={ context }/>
		</div>
	</div>;
};

export default App;
