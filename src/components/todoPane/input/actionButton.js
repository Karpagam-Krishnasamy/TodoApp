import AddButton from './addButton';
import UpdateButton from './updateButton';

const ActionButton = ({ context }) => {
	const { state: { editId }} = context;

	return editId === '' ? AddButton({ context }) : UpdateButton({ context });
};

export default ActionButton;
