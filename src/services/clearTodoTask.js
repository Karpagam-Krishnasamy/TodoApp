const clearTask = {
	clearCompletedTodo: ({ state: { todoList }}) =>
		todoList.filter((todo) => todo.isCompleted === false),
	clearTodo: ({ state: { todoList }, data: taskId }) =>
		todoList.filter((todo) => todo.id !== taskId),
	removeTask: ({ state: { taskList }, data }) =>
		taskList.filter((task) => task.id !== data),
};

export default clearTask;
