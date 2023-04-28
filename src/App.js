import logo from './logo.svg';
import './App.css';
import { Component, useRef, useState } from 'react';
import Counter from './Counter';

/** Correct way of rendering components using React */
const App = (props) => {
	const [text, setText] = useState('');
	const updateText = (e) => {
		// console.log(e.target.value);
		setText(e.target.value);
		console.log('text =', text);
	};
	// let text = '';

	return (
		<>
			<label htmlFor='textIn'>Enter Text</label>
			<input type='text' placeholder='Texty Text' onChange={updateText} />
			<h1>{props.id}</h1>
			<h3>{text}</h3>

			{/* <Counter /> */}
		</>
	);
};

/** Another kind of function declaration */
// const App = function () {
// 	return (
// 		<>
// 			<h3>Functional Component-II</h3>
// 		</>
// 	);
// };

/** Un- React way of making things work */
// function App() {
//   // Un-React way of changing state
// 	const updateText = () => {
// 		var input = document.getElementById('textIn').value;
// 		console.log(input);

// 		document.getElementById('outText').innerText = input;
// 	};

// 	return (
// 		<>
// 			<label htmlFor='textIn'>Enter Text</label>
// 			<input
// 				type='text'
// 				id='textIn'
// 				placeholder='Texty Text'
// 				onChange={updateText}
// 			/>
// 			<h3 id='outText'></h3>
// 		</>
// 	);
// }

/** Class Based Component */
// export default class App extends Component {
//   constructor()

// 	render() {
// 		return (
// 			<>
// 				<h2>Class Component</h2>
// 			</>
// 		);
// 	}
// }

export default App;
