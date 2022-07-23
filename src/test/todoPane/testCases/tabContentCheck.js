const { Builder } = require('selenium-webdriver');
const assert = require('assert');
const Helper = require('../helper');
const { rndString } = require('@laufire/utils/random');
const textLength = 6;
const cnt = 2;
const randomTodo = () => rndString(textLength);
const driver = new Builder().forBrowser('chrome')
	.build();

driver.get('http://localhost:3002/react-starter');

describe('Tab Contents Check', () => {
	it('Successfully displays all todos', async () => {
		await Helper.addTodo(driver, randomTodo());
		await Helper.addTodo(driver, randomTodo());
		assert.strictEqual(await Helper.checkCount(driver, 'tabcontent'), cnt);
	});

	it('Successfully displays active todos', async () => {
		await Helper.clickButton(driver, 'Active');
		assert.strictEqual(await Helper.checkCount(driver, 'tabcontent'), cnt);
	});

	it('Successfully displays completed todos', async () => {
		await Helper.clickButton(driver, 'Completed');
		assert.strictEqual(await Helper.checkCount(driver, 'tabcontent'), 0);
		await Helper.clickButton(driver, 'All');
		await Helper.clickButton(driver, 'checkbox');
		await Helper.clickButton(driver, 'Completed');
		assert.strictEqual(await Helper.checkCount(driver, 'tabcontent'), 1);
	});
});
