const selectTodo = {
	selectTodo: ({ state: { todoList }, data }) =>
		todoList.map((todo) =>
			(todo.id === data.id
				? {
					...todo,
					isCompleted: !data.isCompleted,
				}
				: todo)),

	selectAllTodo: ({ state: { todoList }, data }) =>
		todoList.map((todo) =>
			({
				...todo,
				isCompleted: !data,
			})),

	isTodoSelected: ({ state: { todoList }}) =>
		todoList.some((todo) => todo.isCompleted === true),
};

export default selectTodo;
