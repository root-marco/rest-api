import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
	res.send('<h1>HELLO</h1>');
});

router.get('/:id', (req, res) => {
	res.send(req.params.id);
});

router.post('/', (req, res) => {
	
});

router.post('/', (req, res) => {
	
});

router.delete('/:id', (req, res) => {
	
});

export default router;