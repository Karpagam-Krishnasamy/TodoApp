import { update, updateAll } from '../lib/store';

const selectTodo = {
	selectTodo: ({ state: { todoList }, data: { id, isCompleted }}) =>
		update(
			todoList, id, { isCompleted: !isCompleted }
		),

	selectAllTodo: ({ state: { todoList }, data }) =>
		updateAll(todoList, { isCompleted: !data }),

	isTodoSelected: ({ state: { todoList }}) =>
		todoList.some((todo) => todo.isCompleted === true),

	isActiveTodoExist: ({ state: { todoList }}) =>
		todoList.some((todo) => todo.isCompleted === false),
};

export default selectTodo;
