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

const subscriber = mongoose.model('subscriber', subscriberSchema);