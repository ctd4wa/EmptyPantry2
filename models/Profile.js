const mongoose = require('mongoose');


// Are there any other fields required for an EmptyPantry schema?
const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    cookingExperience: {
        type: String
    },
    favoriteFoods: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);