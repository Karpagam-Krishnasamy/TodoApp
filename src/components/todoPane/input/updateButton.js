import { React } from 'react';
import updateTodoTask from '../../../services/addTodoTask';

const UpdateButton = ({ context }) => {
	const { state: { input }, actions } = context;

	return (
		<button
			disabled={ updateTodoTask.checkData(input) }
			onClick={ () => {
				actions.updateTodo(context);
			} }
		>
			Update</button>);
};

export default UpdateButton;
