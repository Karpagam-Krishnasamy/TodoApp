import { rndString } from '@laufire/utils/random';
import config from '../core/config';
const updateTask = {
	Add: ({ state: { input, todoList }}) =>
		[...todoList,
			{
				id: rndString(config.idLength),
				name: input,
				isCompleted: false,
			}],
	Update: ({ state: { input, todoList, editId }}) =>
		todoList.map((todo) =>
			(todo.id === editId
				? {
					...todo,
					name: input,
				}
				: todo)),
};

export default updateTask;
