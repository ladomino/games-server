const mongoose = require('mongoose')

const {Schema, model} = mongoose

const gameSchema = new Schema(
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
			required: true,
		},
		puzzle: {
			type: Boolean,
			required: true,
		},
		family: {
			type: Boolean,
			required: true,
		},
		owner: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Game', gameSchema)
