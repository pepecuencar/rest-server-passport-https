//Leadership
// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var leaderSchema = new Schema({
    name: {
        type: String,
        required: true
            },
    image:{
        type: String,
        required: true
    },
    designation:{
        type: String,
        required: true
    },
    abbr:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

// the schema is use less so far
// we need to create a model using it
var Leadership = mongoose.model('Leader', leaderSchema);

// make this available to our Node applications
module.exports = Leadership;