import { React } from 'react';

const AddButton = ({ actions, data }) =>
	<button
		onClick={ () => {
			actions.setInput(data.name);
			actions.addTodoTask();
			actions.removeTask(data.id);
		} }
	>+</button>;

export default AddButton;
