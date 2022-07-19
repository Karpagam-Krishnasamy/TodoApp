import AddButton from './addButton';
import UpdateButton from './updateButton';
import actionKeys from '../../../services/actionKeys';

const ActionButton = ({ context }) => {
	const { state: { editId }} = context;

	return actionKeys.checkData(editId)
		? AddButton({ context })
		: UpdateButton({ context });
};

export default ActionButton;
