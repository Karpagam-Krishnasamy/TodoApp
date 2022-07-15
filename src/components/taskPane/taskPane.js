import { React } from 'react';
import Header from './header';
import TaskList from './taskList';

const taskPane = ({ context }) =>
	<div className="col-2">
		<Header/>
		<h3>Task</h3>
		<TaskList context={ context }/>
	</div>;

export default taskPane;
