import express from 'express';
import cors from 'cors';

const app = express();
const port = 3003;

app.use(cors());

app.get('/books', (req, res) => {
	setTimeout(() => {
		res.json({
			"books": [
				{
					"title": "Sapiens",
					"author": "Yuval Harari"
				},
				{
					"title": "The German Genius",
					"author": "Peter Watson"
				},
				{
					"title": "Fantasyland",
					"author": "Kurt Anderson"
				}
			]
		});
	}, 1000);
});

app.listen(port, () => console.log(`API listening on port ${port}`));