import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

import './index.css';

import { ThemeProvider } from 'styled-components';
import * as theme from './config/theme';

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);