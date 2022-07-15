import { React } from 'react';
import CheckBox from './checkBox';
import ClearButton from './clearButton';
import TodoTask from './todoTaskName';

const TabContent = ({ context }) =>
	(context.state.filteredTask.length === 0
		? []
		:	context.state.filteredTask.map((data) =>
			<div key={ data.id }>
				<CheckBox { ...{ ...context, data } }/>
				<TodoTask { ...{ ...context, data } }/>
				<ClearButton { ...{ ...context, taskId: data.id } }/>
				<br/>
			</div>));

export default TabContent;
