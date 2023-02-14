import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import SaveAndExitButton from './SaveAndExitButton';
import ClearStorage from './ClearStorage';

const Buttons = (context) =>
	<Fragment>
		<SaveAndExitButton { ...context }/>
		<ClearStorage/>
	</Fragment>;

export default Buttons;
