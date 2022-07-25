const { Builder } = require('selenium-webdriver');
const assert = require('assert');
const Helper = require('../helper');
const { rndString } = require('@laufire/utils/random');
const textLength = 6;
const randomTodo = () => rndString(textLength);
const count = 2;
const driver = new Builder().forBrowser('chrome')
	.build();

driver.get('http://localhost:3002/react-starter');

describe('Toggle All Todo', () => {
	it('Select All is not displayed before adding a todo', async () => {
		assert.strictEqual(await Helper.checkCount(driver, 'selectall'), 0);
	});

	it('Select All is displayed when a todo is added', async () => {
		await Helper.addTodo(driver, randomTodo());
		assert.strictEqual(await Helper.checkCount(driver, 'selectall'), 1);
	});

	it('All todos are selected when Select All checkbox is checked'
		, async () => {
			await Helper.addTodo(driver, randomTodo());
			await Helper.clickButton(driver, 'selectall');
			assert.strictEqual(await Helper.checkedCount(driver), count);
		});
});
