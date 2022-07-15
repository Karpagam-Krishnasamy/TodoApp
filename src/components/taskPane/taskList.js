import { React } from 'react';
import AddButton from '../taskPane/addButton';

const TaskList = ({ context }) =>
	context.state.taskList.map((task) =>
		<div key={ task.id }>
			<span>
				{task.name}
			</span>
			<AddButton { ...{ ...context, data: task } }/><br/>
		</div>);

export default TaskList;
