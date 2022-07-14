import { React } from 'react';

const TodoTask = ({ actions, data }) =>
	<span
		onClick={ () => actions.setEdit({ id: data.id, name: data.name }) }
	>
		{data.name}</span>;

export default TodoTask;
