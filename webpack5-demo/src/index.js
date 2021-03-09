import React from 'react'
import ReactDom from 'react-dom'
import png from './assets/logo.jpg'
import jpg from './assets/logo.png'
import txt from './assets/logo.txt'
import ico from './assets/logo.ico'

// import data from "data:text/javascript,export default 'title'"
// import a from './a.js'
import('./a.js')

console.log(png, jpg, txt, ico)


ReactDom.render(<h1>hello</h1>, document.getElementById('root'))

console.log(111)