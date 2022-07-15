import { React } from 'react';

const AddButton = ({ actions, data, state: { filter }}) =>
	<button
		onClick={ () => {
			actions.setInput(data.name);
			actions.addTodoTask();
			actions.showTabContent({ tabName: filter });
			actions.removeTask(data.id);
		} }
	>+</button>;

export default AddButton;
