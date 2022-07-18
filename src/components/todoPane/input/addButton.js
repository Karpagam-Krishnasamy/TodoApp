import { React } from 'react';

const AddButton = ({ context }) => {
	const { state: { filter, input }, actions } = context;

	return (
		<button
			disabled={ (input === '') }
			onClick={ () => {
				actions.addTodoTask(context);
				actions.showTabContent({ tabName: filter });
			} }
		>
			Add</button>
	);
};

export default AddButton;
