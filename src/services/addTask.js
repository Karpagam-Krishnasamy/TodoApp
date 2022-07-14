import { rndString } from '@laufire/utils/random';
import config from '../core/config';
const updateTask = {
	addTask: ({ state }) =>
		updateTask[state.buttonName](state),
	Add: ({ input, task }) =>
		[...task,
			{
				id: rndString(config.idLength),
				name: input,
				isCompleted: false,
			}],
	Update: ({ input, task, editId }) =>
		task.map((todo) =>
			(todo.id === editId
				? {
					...todo,
					name: input,
				}
				: todo)),
	editTodoTask: ({ state: { task }, data }) =>
		task.map((todo) =>
			(todo.id === data.id
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
		task.filter((todo) => todo.id !== taskId),
	selectAllTask: ({ state: { task }, data }) =>
		task.map((todo) =>
			({
				...todo,
				isCompleted: !data,
			})),
};

export default updateTask;
