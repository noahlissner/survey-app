const mongoose = require('mongoose');

const surveySchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User',
		},
		questions: [
			{
				surveyType: String,
				name: String,
				question: String,
				id: String,
				options: [{ id: String, text: String }],
			},
		],
		access: {
			type: Array,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('Survey', surveySchema);
