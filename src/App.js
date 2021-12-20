import './App.scss';
import { BooksLoader } from './components/BooksLoader';
import { BooksSectionTitle } from './components/BooksSectionTitle';
import { BooksSectionContent } from './components/BooksSectionContent';

function App() {

	return (
		<div className="App">
			<BooksLoader>
				<BooksSectionTitle />
				<BooksSectionContent />
			</BooksLoader>
		</div>
	)
}
export default App;