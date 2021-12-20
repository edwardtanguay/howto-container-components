import React, { useState, useEffect } from "react";
import axios from 'axios';
import { FaSpinner } from 'react-icons/fa';

export const BooksLoader = ({ children }) => {
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
					<>
						{React.Children.map(children, (child => {
							if (React.isValidElement(child)) {
								return React.cloneElement(child, { books })
							}
						}))}
					</>
				)
			}
		</>
	)
}