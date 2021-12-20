import { useEffect, useState } from 'react';
import './App.scss';
import { FaSpinner } from 'react-icons/fa';

function App() {
	const [books, setBooks] = useState([]);

	const url = 'http://localhost:3003';

	useEffect(() => {
		(async () => {
			const response = await fetch(`${url}/books`);
			if (response.ok) {
				const data = await response.json();
				setBooks(prev => ([...prev, ...data.books]));
			}
		})();
	}, []);
	return (
		<div className="App">
			{books.length === 0 && (
				<FaSpinner className="spinner" />
			)}
			{books.length > 0 && (
				<h3>Books: [{books.length}]</h3>
			)}
		</div>
	)
}
export default App;