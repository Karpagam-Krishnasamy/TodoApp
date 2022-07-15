import { React } from 'react';

const AddButton = ({ actions, data, state }) =>
	<button
		onClick={ () => {
			actions.setInput(data.name);
			actions.addTodoTask();
			actions.showTabContent({ tabName: state.filter });
			actions.removeTask(data.id);
		} }
	>+</button>;

export default AddButton;
