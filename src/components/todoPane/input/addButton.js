import { React } from 'react';
import updateTodoTask from '../../../services/addTodoTask';

const AddButton = ({ context }) => {
	const { state: { input }, actions } = context;

	return (
		<button
			disabled={ updateTodoTask.checkData(input) }
			onClick={ () => {
				actions.addTodoTask(context);
			} }
		>
			Add</button>
	);
};

export default AddButton;
