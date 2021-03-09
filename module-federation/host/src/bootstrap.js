import React from 'react';
import ReactDom from 'react-dom';

import App from './App'


const dom = document.getElementById('root')

console.log(dom)
ReactDom.render(<App />, document.getElementById('root'))