import { React } from 'react';
import updateTodoTask from '../../../services/addTodoTask';

const AddButton = ({ context }) => {
	const { state: { input }, actions } = context;

	return (
		<button
			disabled={ updateTodoTask.checkInput(input) }
			onClick={ () => {
				actions.addTodoTask(context);
			} }
		>
			Add</button>
	);
};

export default AddButton;
