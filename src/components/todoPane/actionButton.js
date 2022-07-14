import AddButton from './addButton';
import UpdateButton from './updateButton';

const ActionButton = ({ context }) => {
	const { state: { setEdit }} = context;

	return !setEdit ? AddButton({ context }) : UpdateButton({ context });
};

export default ActionButton;
