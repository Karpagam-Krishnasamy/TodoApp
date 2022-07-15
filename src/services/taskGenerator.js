/* eslint-disable prefer-template */
/* eslint-disable no-magic-numbers */
import { rndString } from '@laufire/utils/random';
import faker from 'faker';
import config from '../core/config';

const taskGenerator = {
	getTasks: ({ state: { taskList }}) => {
		const i = setInterval(() =>
			taskGenerator.getRnd(taskList)
		, 100);

		setTimeout(() => clearInterval(i), 1000);
		return taskList;
	},
	getRnd: (taskList) =>
		taskList.push({ id: rndString(config.idLength),
			name: taskGenerator
				.formatTask(faker.hacker.verb() + ' ' + faker.hacker.noun()) }),
	formatTask: (text) =>
		text.charAt(0).toUpperCase() + text.substr(1),
};

export default taskGenerator;
