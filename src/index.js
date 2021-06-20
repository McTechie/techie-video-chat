import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { SocketContextProvider } from './contexts/SocketContext';

ReactDOM.render(
    <SocketContextProvider>
        <App />
    </SocketContextProvider>,
    document.getElementById('root')
);