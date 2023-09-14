const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListSchema = new Schema({
    title: String,
    task: String,
    status: {
        type: Boolean,
        default: false
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    time: {
        type: Date,
        default: Date.now
    },
    dueDate: {
        type: String,
    },
});

const Lists = mongoose.model('Lists', ListSchema);
// const firstList = new Lists({
//     title: "First Task",
//     task: "Continue your work",
//     status: true,
//     author:"6502c9ba6e4dcf39e23596f1",
//     dueDate: new Date('2023-09-30')
// });
// firstList.save();

module.exports = Lists;