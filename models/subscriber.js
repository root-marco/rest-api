import mongoose from 'mongoose';

const subscriberSchema = new mongoose.Schema({
	name: {
		type: String,
		required,
	},
	subscriberToChannel: {
		type: String,
		required,
	},
	subscriberDate: {
		type: Date,
		required: true,
		default: Date.now(),
	},
});

const Subscriber = mongoose.model('Subscriber', subscriberSchema);

export default Subscriber;