import { React } from 'react';
import actionKeys from '../../../services/actionKeys';

const UpdateButton = ({ context }) => {
	const { state: { input }, actions } = context;

	return (
		<button
			disabled={ actionKeys.checkData(input) }
			onClick={ () => {
				actions.updateTodo(context);
			} }
		>
			Update</button>);
};

export default UpdateButton;
