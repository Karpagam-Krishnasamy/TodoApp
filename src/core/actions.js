import updateTodoTask from '../services/addTodoTask';
import clearTodo from '../services/clearTodoTask';
import selectTodo from '../services/selectTodo';
import taskGenerator from '../services/taskGenerator';

const setInput = ({ data }) => ({
	input: data,
});

const clearInput = () => ({
	input: '',
});

const addTodoTask = (context) => ({
	todoList: updateTodoTask.Add(context),
	input: '',
});

const updateTodo = (context) => ({
	todoList: updateTodoTask.Update(context),
	input: '',
	editId: '',
});

const setEdit = ({ data }) => ({
	input: data.name,
	editId: data.id,
});

const toggleTodo = (context) => ({
	todoList: selectTodo.selectTodo(context),
});

const selectAll = (context) => ({
	todoList: selectTodo.selectAllTodo(context),
});

const clearCompleted = (context) => ({
	todoList: clearTodo.clearCompletedTodo(context),
});

const clearButton = (context) => ({
	todoList: clearTodo.clearTodo(context),
});

const removeTask = (context) => ({
	taskList: clearTodo.removeTask(context),
});

const generateTask = (context) => ({
	taskList: taskGenerator.addTask(context),
});

const setFilter = ({ data }) => ({
	filter: data,
});

const actions = {
	removeTask,
	setInput,
	clearInput,
	clearCompleted,
	addTodoTask,
	updateTodo,
	setFilter,
	selectAll,
	toggleTodo,
	clearButton,
	setEdit,
	generateTask,
};

export default actions;
