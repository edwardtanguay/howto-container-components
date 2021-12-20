import './App.scss';
import { BooksLoader } from './components/BooksLoader';
import { BooksSectionTitle } from './components/BooksSectionTitle';

function App() {

	return (
		<div className="App">
			<BooksLoader>
				<BooksSectionTitle />
			</BooksLoader>
		</div>
	)
}
export default App;