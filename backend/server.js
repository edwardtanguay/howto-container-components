import express from 'express';
import cors from 'cors';

const app = express();
const port = 3003;

app.use(cors());

app.get('/books', (req, res) => {
	res.json({
		"books": [
			{
				"title": "Sapiens",
				"author": "Yuval Harari"
			},
			{
				"title": "The German Genius",
				"author": "Peter Watshon"
			},
			{
				"title": "Fantasyland",
				"author": "Kurt Anderson"
			}
		]
	});
});

app.listen(port, () => console.log(`API listening on port ${port}`));