const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		company: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		players: {
			type: Number,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		educational: {
			type: Boolean,
		},
		puzzle: {
			type: Boolean,
		},
		family: {
			type: Boolean,
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Game', gameSchema)
