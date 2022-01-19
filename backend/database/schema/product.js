const mongoose = require('mongoose');
const reviewSchema = require('./review');

const productSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    brand:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    review: [reviewSchema],
    rating:{
        type: Number,
        required: true,
        default: 0
    },
    num_reviews:{
        type: Number,
        required: true,
        default: 0
    },
    price:{
        type: Number,
        required: true,
        default: 0
    },
    count_in_stock:{
        type: Number,
        required: true,
        default: 0
    }
},{
    timestamps: true
});

module.exports = productSchema;