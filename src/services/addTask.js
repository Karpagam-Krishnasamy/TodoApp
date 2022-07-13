/* eslint-disable eqeqeq */
/* eslint-disable no-console */
/* eslint-disable no-undef */
const updateTask = {
	addTask: ({ state }) =>
		updateTask[state.buttonName](state),
	Add: ({ input, task }) =>
		[...task,
			{
				name: input,
				isCompleted: false,
			}],
	Update: ({ input, task, editText }) =>
		task.map((todo) =>
			(todo.name === editText
				? {
					...todo,
					name: input,
				}
				: todo)),
	editTodoTask: ({ state: { task }, data }) =>
		task.map((todo) =>
			(todo.name === data.name
				? {
					...todo,
					isCompleted: data.isCompleted,
				}
				: todo)),
	showTask: ({ state: { task }, data: { tabName }}) =>
		updateTask[tabName](task),
	All: (task) => [...task],
	Active: (task) => task.filter((e) => e.isCompleted === false),
	Completed: (task) => task.filter((e) => e.isCompleted === true),
	clearTask: ({ state: { task }}) =>
		task.filter((todo) => todo.isCompleted === false),
	cancelButton: ({ state: { task }, data: taskId }) =>
		task.filter((todo) => todo.name !== taskId),
	selectAllTask: ({ state: { task }, data }) =>
		task.map((todo) =>
			({
				...todo,
				isCompleted: !data,
			})),
};

export default updateTask;
