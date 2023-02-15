const mongoose = require("mongoose")

const CartSchema = new mongoose.Schema({
    pid: {
        type: mongoose.Schema.Types.ObjectId
    },
    uid: {
        type: mongoose.Schema.Types.ObjectId
    },
    qty: {
        type: Number
    }
})

module.exports = new mongoose.model("Cart", CartSchema)