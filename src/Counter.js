import { useState } from 'react';

const Counter = () => {
	const [num, setNum] = useState(0);

	return (
		<>
			<button
				type='button'
				onClick={() => {
					setNum(num + 1);
				}}>
				+
			</button>
			<input disabled value={num} />
			<button
				type='button'
				onClick={() => {
					setNum(num - 1);
				}}>
				-
			</button>
		</>
	);
};

export default Counter;
