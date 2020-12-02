import React from 'react';
import { addDecorator } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import '../src/styles/index.scss';

addDecorator((story) => <BrowserRouter>{story()}</BrowserRouter>);

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
}
