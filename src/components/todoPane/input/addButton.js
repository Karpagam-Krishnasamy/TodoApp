import { React } from 'react';
import actionKeys from '../../../services/actionKeys';

const AddButton = ({ context }) => {
	const { state: { input }, actions } = context;

	return (
		<button
			disabled={ actionKeys.checkData(input) }
			onClick={ () => {
				actions.addTodoTask(context);
			} }
		>
			Add</button>
	);
};

export default AddButton;
