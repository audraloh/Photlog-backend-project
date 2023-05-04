//second schema for posting photos
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const photoSchema = new Schema; ({
    caption: {
        type: String,
    },
    
    date: {
        type: Number,
    },

})


module.exports = mongoose.model("photo", photoSchema);