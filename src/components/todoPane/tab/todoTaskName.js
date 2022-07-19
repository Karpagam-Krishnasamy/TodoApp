import { React } from 'react';

const TodoTask = ({ actions, data }) =>
	<span
		onClick={ () => actions.setEdit(data) }
	>
		{data.name}</span>;

export default TodoTask;
