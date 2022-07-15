/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-console */
import { React } from 'react';

const AddButton = ({ actions, data }) =>
	<button
		onClick={ () => {
			actions.setInput(data.name);
			actions.addTodoTask();
			actions.showTabContent({ tabName: 'All' });
		} }
	>
		Add</button>;

export default AddButton;
