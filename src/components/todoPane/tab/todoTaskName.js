import { React } from 'react';

const TodoTask = ({ actions, data }) =>
	<span
		name={ data.name }
		onClick={ () => actions.setEdit(data) }
	>
		{data.name}</span>;

export default TodoTask;
