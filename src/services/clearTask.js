const clearTask = {
	clearTask: ({ state: { todoList }}) =>
		todoList.filter((todo) => todo.isCompleted === false),
	clearButton: ({ state: { todoList }, data: taskId }) =>
		todoList.filter((todo) => todo.id !== taskId),
};

export default clearTask;
