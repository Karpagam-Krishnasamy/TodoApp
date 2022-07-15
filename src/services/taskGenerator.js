/* eslint-disable prefer-template */
import { rndString } from '@laufire/utils/random';
import faker from 'faker';

const taskGenerator = {
	getTasks: ({ state: { taskList }, config: { timeDelay, timeOut, id }}) => {
		const interval = setInterval(() =>
			taskGenerator.getTask(taskList, id)
		, timeDelay);

		setTimeout(() => clearInterval(interval), timeOut);
		return taskList;
	},
	getTask: (taskList, id) =>
		taskList.push({ id: rndString(id),
			name: taskGenerator
				.formatTask(faker.hacker.verb() + ' ' + faker.hacker.noun()) }),
	formatTask: (text) =>
		text.charAt(0).toUpperCase() + text.substr(1),
};

export default taskGenerator;
