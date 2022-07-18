const filterTodo = {
	viewTodo: ({ state: { todoList, filter }}) =>
		filterTodo[filter](todoList),
	All: (todoList) => [...todoList],
	Active: (todoList) => todoList.filter((e) => e.isCompleted === false),
	Completed: (todoList) => todoList.filter((e) => e.isCompleted === true),
};

export default filterTodo;
