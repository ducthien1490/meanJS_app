'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Book Schema
 */
var BookSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Book name',
		trim: true
	},
  description: {
    type: String,
    default: '',
    required: 'Please fill the description of book',
    trim: true
  },
  author: {
    type: String,
    default: '',
    required: 'Please enter the authors of the book',
    trim: true
  },
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Book', BookSchema);
