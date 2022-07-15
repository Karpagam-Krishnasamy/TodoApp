/* eslint-disable no-mixed-spaces-and-tabs */
import { React } from 'react';

const UpdateButton = ({ context }) => {
	const { state: { filter, input }, actions } = context;

	return <button
		disabled={ (input === '') }
		onClick={ () => {
			actions.updateTodoTask(context);
			actions.showTabContent({ tabName: filter });
		} }
	       >
		Update</button>;
};

export default UpdateButton;
