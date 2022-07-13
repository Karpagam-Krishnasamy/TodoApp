/* eslint-disable no-console */
import { React } from 'react';
import CheckBox from './checkBox';
import CloseButton from './closeButton';
import TodoTask from './todoTaskName';

const TabContent = ({ context }) =>
	(context.state.filteredTask.length === 0
		? []
		:	context.state.filteredTask.map((data) =>
			<div key={ data.name }>
				<CheckBox { ...{ ...context, data } }/>
				<TodoTask { ...{ ...context, data } }/>
				<CloseButton { ...{ ...context, taskId: data.name } }/>
				<br/>
			</div>));

export default TabContent;
