import { useEffect, useState } from 'react';
import './App.scss';

function App() {
	const [books, setBooks] = useState([]);

	const url = 'http://localhost:3003';

	useEffect(() => {
		(async () => {
			const response = await fetch(`${url}/books`);
			if (response.ok) {
				const data = await response.json();
				setBooks(prev => ([ ...prev, ...data.books ]));
			}
		})();
	}, []);
	return (
		<div className="App">
			Books: [{books.length}]
		</div>
	);
}

export default App;