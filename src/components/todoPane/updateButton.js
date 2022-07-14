/* eslint-disable no-mixed-spaces-and-tabs */
import { React } from 'react';

const UpdateButton = ({ context }) => {
	const { state, actions } = context;

	return <button
		disabled={ (state.input === '') }
		onClick={ () => {
			actions.updateTodoTask(context);
			actions.showTabContent({ tabName: 'All' });
		} }
	       >
		Update</button>;
};

export default UpdateButton;
