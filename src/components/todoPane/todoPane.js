import { React } from 'react';
import Header from './header';
import Input from './input';
import ActionButton from './actionButton';
import TodoTab from './todoTab';

const todoPane = ({ context }) =>
	<div className="col-1">
		<Header/><br/><br/>
		<Input context={ context }/>
		<ActionButton context={ context }/>
		<TodoTab context={ context }/>
	</div>;

export default todoPane;
