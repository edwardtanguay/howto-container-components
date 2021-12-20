import { useState, useEffect } from "react";
import axios from 'axios';
import { FaSpinner } from 'react-icons/fa';

const BookLoader = ({ children }) => {
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
		<>
			{
				books.length === 0 && (
					<FaSpinner className="spinner" />
				)
			}
			{
				books.length > 0 && (
					<h3>Books: [{books.length}]</h3>
				)
			}
		</>
	)
}

export default BookLoader;