import { rndString } from '@laufire/utils/random';
const updateTodoTask = {
	Add: ({ state: { input, todoList }, config: { idLength }}) =>
		[...todoList,
			{
				id: rndString(idLength),
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

export default updateTodoTask;
