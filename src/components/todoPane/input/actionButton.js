import AddButton from './addButton';
import UpdateButton from './updateButton';
import updateTodoTask from '../../../services/addTodoTask';

const ActionButton = ({ context }) => {
	const { state: { editId }} = context;

	return updateTodoTask.checkData(editId)
		? AddButton({ context })
		: UpdateButton({ context });
};

export default ActionButton;
