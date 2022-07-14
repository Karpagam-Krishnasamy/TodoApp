const filterTask = {
	viewTask: ({ state: { todoList }, data: { tabName }}) =>
		filterTask[tabName](todoList),
	All: (todoList) => [...todoList],
	Active: (todoList) => todoList.filter((e) => e.isCompleted === false),
	Completed: (todoList) => todoList.filter((e) => e.isCompleted === true),
};

export default filterTask;
