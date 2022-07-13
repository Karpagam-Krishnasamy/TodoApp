/* eslint-disable no-console */
import { React } from 'react';
import './App.scss';
import TodoPane from './components/todoPane/todoPane';
import TaskPane from './components/taskPane/taskPane';

const App = (context) => <div className="App" role="App">
	<div className="row">
		<TodoPane context={ context }/>
		<TaskPane/>
	</div>
</div>;

export default App;
