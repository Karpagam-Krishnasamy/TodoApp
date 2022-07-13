import updateTask from '../services/addTask';

const setInput = ({ data }) => ({
	input: data,
});

const addTodoTask = (context) => ({
	task: updateTask.addTask(context),
	input: '',
	buttonName: 'Add',
});

const showTabContent = (context) => ({
	filteredTask: updateTask.showTask(context),
});

const toggleTodo = (context) => ({
	task: updateTask.editTodoTask(context),
});

const selectAll = (context) => ({
	task: updateTask.selectAllTask(context),
	toggleAll: !context.state.toggleAll,
});

const clearCompleted = (context) => ({
	task: updateTask.clearTask(context),
});

const closeButton = (context) => ({
	task: updateTask.cancelButton(context),
});

const setEdit = ({ data }) => ({
	buttonName: 'Update',
	input: data,
	editText: data,
});

const actions = {
	setInput,
	clearCompleted,
	addTodoTask,
	selectAll,
	showTabContent,
	toggleTodo,
	closeButton,
	setEdit,
};

export default actions;
