/* eslint-disable no-mixed-spaces-and-tabs */
import { React } from 'react';

const AddButton = ({ context }) => {
	const { state, actions } = context;

	return <button
		disabled={ (state.input === '') }
		onClick={ () => {
			actions.addTodoTask(context);
			actions.showTabContent({ tabName: state.filter });
		} }
	       >
		Add</button>;
};

export default AddButton;
