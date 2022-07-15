import { React } from 'react';
import updateTask from '../../../services/addTask';
import CheckBox from './checkBox';
import ClearButton from './clearButton';
import TodoTask from './todoTaskName';

const TabContent = ({ context }) =>
	updateTask.displayTask(context).map((data) =>
		<div key={ data.id }>
			<CheckBox { ...{ ...context, data } }/>
			<TodoTask { ...{ ...context, data } }/>
			<ClearButton { ...{ ...context, taskId: data.id } }/>
			<br/>
		</div>);

export default TabContent;
