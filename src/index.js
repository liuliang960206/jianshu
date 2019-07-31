import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './style';
import App from './App';
import './style'
import './statics/iconfont/iconfont'

ReactDOM.render(
    <>
        <GlobalStyle />
        <App />
    </>
    , document.getElementById('root')
);
