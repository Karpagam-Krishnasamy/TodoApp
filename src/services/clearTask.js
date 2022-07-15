const clearTask = {
	clearTask: ({ state: { todoList }}) =>
		todoList.filter((todo) => todo.isCompleted === false),
	clearButton: ({ state: { todoList }, data: taskId }) =>
		todoList.filter((todo) => todo.id !== taskId),
	removeTask: ({ state: { taskList }, data }) =>
		taskList.filter((task) => task.id !== data),
};

export default clearTask;
