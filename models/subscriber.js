import mongoose from 'mongoose';

const subscriberSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	subscriberToChannel: {
		type: String,
		required: true,
	},
	subscriberDate: {
		type: Date,
		required: true,
		default: Date.now(),
	},
});

const Subscriber = mongoose.model('Subscriber', subscriberSchema);

export default Subscriber;