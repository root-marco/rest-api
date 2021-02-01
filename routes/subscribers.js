import express from 'express';
import Subscriber from '../models/subscriber.js';

const router = express.Router();

// Getting all
router.get('/', async (req, res) => {

	try {
		const subscribers = await Subscriber.find();
		res.json(subscribers);
	} catch (err) {
		res.status(500).json({
			message: err.message,
		});
	}

});

// Getting One
router.get('/:id', getSubscriber, (req, res) => {

	res.send(res.subscriber.name);

});

// Creating one
router.post('/', async (req, res) => {

	const subscriber = new Subscriber({
		name: req.body.name,
		subscribedToChannel: req.body.subscribedToChannel,
	});

	try {
		const newSubscriber = await subscriber.save();
		res.status(201).json(newSubscriber);
	} catch (err) {
		res.status(400).json({
			message: err.message,
		});
	}

})

// Updating One
router.patch('/', getSubscriber, (req, res) => {

});

// Deleting One
router.delete('/:id', getSubscriber, (req, res) => {

});

// Middleware
async function getSubscriber(req, res, next) {

	let subscriber;

	try {
		subscriber = await Subscriber.findById(req.params.id);
		if (subscriber == null) {
			return res.status(404).json({
				message: 'Cannot find subscriber',
			});
		}
	} catch (err) {
		return res.status(500).json({
			message: err.message,
		});
	}

	res.subscriber = subscriber;

	next();

}


export default router;