import { React } from 'react';
import AddButton from '../taskPane/addButton';
import RemoveButton from './removeButton';

const TaskList = ({ context }) => {
	const { state: { taskList }} = context;

	return taskList.map((task) =>
		<div key={ task.id }>
			<span>
				{task.name}
			</span>&nbsp;&nbsp;
			<AddButton { ...{ ...context, data: task } }/>
			<RemoveButton { ...{ ...context, data: task } }/><br/><br/>
		</div>);
};

export default TaskList;
