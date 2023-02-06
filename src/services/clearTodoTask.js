import { remove } from '../lib/store';

const clearTask = {
	clearCompletedTodo: ({ state: { todoList }}) =>
		remove(todoList, { isCompleted: true }),

	clearTodo: ({ state: { todoList }, data }) =>
		remove(todoList, { id: data }),

	removeTask: ({ state: { taskList }, data }) =>
		remove(taskList, { id: data }),

};

export default clearTask;
