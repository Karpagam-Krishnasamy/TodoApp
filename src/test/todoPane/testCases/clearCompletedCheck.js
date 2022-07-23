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
	it('Clear completed button not displayed as expected', async () => {
		await Helper.addTodo(driver, randomTodo());
		assert.strictEqual(await Helper
			.checkCount(driver, 'clearCompleted'), 0);
	});

	it('Successfully displays clear completed button', async () => {
		await Helper.clickButton(driver, 'checkbox');
		assert.strictEqual(await Helper
			.checkCount(driver, 'clearCompleted'), 1);
	});

	it('Successfully clear completed todos', async () => {
		await Helper.addTodo(driver, randomTodo());
		await Helper.clickButton(driver, 'clearCompleted');
		assert.strictEqual(await Helper
			.checkCount(driver, 'checkbox'), 1);
		assert.strictEqual(await Helper
			.isChecked(driver, 'checkbox'), false);
	});
});
