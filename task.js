const mongoose = require(`mongoose`)

const Schema = mongoose.Schema

const taskSchema = new Schema({
    task:{
        type: String,
        required: true,
        trim: true

    },

    completed:{
        type: Boolean,
        default: false
    },

    dateCreated:{
        type: Date,
        default: Date.now()
    }

})

taskSchema.virtual(`id`).get(function () {
    return this._id.toHexString()
})

taskSchema.set(`toJSON`, {virtuals: true})

const taskModel = mongoose.model ("Task", taskSchema)
module.exports = taskModel