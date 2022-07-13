import { React } from 'react';

const TodoTask = ({ actions, data }) =>
	<span
		onClick={ () => actions.setEdit(data.name) }
	>
		{data.name}</span>;

export default TodoTask;
