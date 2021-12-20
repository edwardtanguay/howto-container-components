export const BooksSectionContent = ({ books }) => {
	return books.map((book, i) => {
		return (
			<div key={i} className="book">
				<span className="title">{book.title}</span>
				<span className="authorLine">by {book.author}</span>
			</div>
		)
	})
}