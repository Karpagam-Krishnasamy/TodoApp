const selectTask = {
	selectTask: ({ state: { todoList }, data }) =>
		todoList.map((todo) =>
			(todo.id === data.id
				? {
					...todo,
					isCompleted: data.isCompleted,
				}
				: todo)),
	selectAllTask: ({ state: { todoList }, data }) =>
		todoList.map((todo) =>
			({
				...todo,
				isCompleted: !data,
			})),
};

export default selectTask;
