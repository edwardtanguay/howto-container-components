import { useEffect, useState } from 'react';
import './App.scss';
import { FaSpinner } from 'react-icons/fa';
import axios from 'axios';

function App() {
	const [books, setBooks] = useState([]);

	const url = 'http://localhost:3003';

	useEffect(() => {
		(async () => {
			const response = await axios.get(`${url}/books`);
			if (response.statusText === 'OK') {
				setBooks(prev => ([...prev, ...response.data.books]));
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