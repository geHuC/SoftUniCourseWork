const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is a reqired field'],
    },
    city: {
        type: String,
        required: [true, 'City is a reqired field']
    },
    imageUrl: {
        type: String,
        required: [true, 'ImageUrl is a reqired field']
    },
    rooms: {
        type: Number,
        required: [true, 'Free rooms is a reqired field'],
        min: [1, 'Cannot have less than 1 room'],
        max: [100, 'Cannot have more than 100 rooms']
    },
    clients: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: []
    }],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    freeRooms: {
        type: Number
    }
});

schema.pre('save', function(next){
    this.freeRooms = this.rooms - this.clients.length;
    next();
});

// schema.pre('findOneAndUpdate', function(next){
//     console.log('called');
//     console.log(this);
//     let data = this.getUpdate();
//     console.log(data);
//     data.freeRooms = data.rooms - data.clients.length;
//     next();
// });

const Basic = mongoose.model('Basic', schema);

module.exports = Basic;