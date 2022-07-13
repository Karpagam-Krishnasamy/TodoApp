/* eslint-disable no-mixed-spaces-and-tabs */
import { React } from 'react';

const ActionButton = ({ context }) => {
	const { state, actions } = context;

	return <button
		onClick={ () => {
			actions.addTodoTask(context);
			actions.showTabContent({ tabName: 'All' });
		} }
	       >
		{state.buttonName}</button>;
};

export default ActionButton;
