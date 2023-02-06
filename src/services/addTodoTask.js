import { rndString } from '@laufire/utils/random';
import { add, update } from '../lib/store';

const getTodo = ({ input, idLength }) => ({
	id: rndString(idLength),
	name: input,
	isCompleted: false,
});

const updateTodoTask = {
	Add: ({ state: { input, todoList }, config: { idLength }}) =>
		add(todoList, getTodo({ input, idLength })),

	Update: ({ state: { input, todoList, editId }}) =>
		update(
			todoList, editId, { name: input }
		),

};

export default updateTodoTask;
