/* eslint-disable max-lines-per-function */
const { Builder } = require('selenium-webdriver');
const assert = require('assert');
const Helper = require('../helper');
const { rndString } = require('@laufire/utils/random');
const textLength = 6;
const randomTodo = () => rndString(textLength);
const driver = new Builder().forBrowser('chrome')
	.build();

driver.get('http://localhost:3002/react-starter');

describe('Clear Completed Todo', () => {
	it('Clear completed button is not displayed when no todo is selected',
		async () => {
			await Helper.addTodo(driver, randomTodo());
			assert.strictEqual(await Helper
				.checkCount(driver, 'clearCompleted'), 0);
		});

	it('Clear completed button is displayed when a todo is selected',
		async () => {
			await Helper.clickButton(driver, 'checkbox');
			assert.strictEqual(await Helper
				.checkCount(driver, 'clearCompleted'), 1);
		});

	it('Completed todos are cleared when clear completed button is clicked',
		async () => {
			await Helper.addTodo(driver, randomTodo());
			await Helper.clickButton(driver, 'clearCompleted');
			assert.strictEqual(await Helper
				.checkCount(driver, 'checkbox'), 1);
			assert.strictEqual(await Helper
				.isChecked(driver, 'checkbox'), false);
		});
});
