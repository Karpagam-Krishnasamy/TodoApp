/* eslint-disable prefer-template */
import { rndString } from '@laufire/utils/random';
import faker from 'faker';
import { add } from '../lib/store';

const formatTask = (text) =>
	text.charAt(0).toUpperCase() + text.substr(1);

const getTask = (id) => ({
	id: rndString(id),
	name: formatTask(faker.hacker.verb()
		+ ' ' + faker.hacker.noun()),
});

const taskGenerator = {
	getTasks: ({ actions, config: { timeDelay, timeOut }}) => {
		const interval = setInterval(() =>
			actions.generateTask()
		, timeDelay);

		setTimeout(() => clearInterval(interval), timeOut);
	},

	addTask: ({ state: { taskList, id }}) =>
		add(taskList, getTask(id)),
};

export default taskGenerator;
