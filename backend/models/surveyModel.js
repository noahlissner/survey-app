const mongoose = require('mongoose');

const surveySchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User',
		},
		questions: {
			type: Array,
			required: true,
		},
		access: {
			type: Array,
			required: false,
		},
	},
	{
		timestamp: true,
	}
);

module.exports = mongoose.model('Survey', surveySchema);
