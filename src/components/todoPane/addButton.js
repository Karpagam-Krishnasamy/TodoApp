/* eslint-disable no-console */
/* eslint-disable no-mixed-spaces-and-tabs */
import { React } from 'react';

const AddButton = ({ context }) => {
	const { state, actions } = context;

	return <button
		disabled={ (state.input === '') }
		onClick={ () => {
			actions.addTodoTask(context);
			actions.showTabContent({ tabName: 'All' });
			console.log(context);
		} }
	       >
		Add</button>;
};

export default AddButton;