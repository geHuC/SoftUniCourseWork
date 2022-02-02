const Basic = require('../models/Basic');

const create = async (data) => {
    //check if item already exists
    const patterString =  data.name.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'); //if we have ? in the title
    const pattern = new RegExp(`^${patterString}$`, 'i');
    const pattern = new RegExp(`^${data.name}$`, 'i');
    let item = await Basic.findOne({ name: { $regex: pattern } })
    if (item) {
        throw new Error('Item with that name already exists');
    }
    //create
    return Basic.create(data);
}

const getAll = async (sortParams) => {
    if (!sortParams) {
        return Basic.find({}).lean();
    }
    return Basic.find({}).sort(sortParams).lean();
}

const getOne = async (id) => {
    return Basic.findById(id).lean();
}

const deleteOne = async (id, ownerId) => {
    return Basic.findOneAndDelete({ _id: id, owner: ownerId });
}
const updateOne = async (id, ownerId, data) => {
    const patterString = data.title.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'); //if we have ? in the title
    const pattern = new RegExp(`^${patterString}$`, 'i');
    let item = await Basic.findOne({ name: { $regex: pattern } })
    if (item && item._id != id) {
        //Change error message
        throw new Error('Item with that name already exists');
    }
    // return Basic.findOneAndUpdate({ _id: id, owner: ownerId }, data, { runValidators: true });
    let toUpdate = await Basic.findOne({ _id: id, owner: ownerId });
    if (toUpdate) {
        toUpdate.name = data.name;
        toUpdate.imageUrl = data.imageUrl;
        toUpdate.city = data.city;
        toUpdate.rooms = data.rooms;
        return toUpdate.save();
    } else {
        throw new Error('Database error on updating...');
    }
}

const pushToField = async (id, userId, fieldName) => {
    const item = await Basic.findById(id);
    if(item[fieldName].some(x => x._id == userId)){
        throw new Error('Already booked in this hotel');
    }
    item[fieldName].push(userId);
    return item.save();
}
module.exports = {
    create,
    getAll,
    getOne,
    deleteOne,
    updateOne,
    pushToField
}