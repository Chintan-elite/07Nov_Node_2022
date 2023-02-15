const express = require("express")
const mongoose = require("mongoose")
const router = express.Router()
const Cart = require("../model/Cart")
const auth = require("../middleware/auth")

router.post("/", auth, async (req, resp) => {


    try {
        const cat = new Cart({
            uid: req.uid,
            pid: req.body.pid,
            qty: req.body.qty
        })
        const result = await cat.save();
        resp.send(result)
    } catch (error) {
        resp.send(error)
    }
})

router.get("/", auth, async (req, resp) => {
    try {


        const result = await Cart.aggregate([{ $lookup: { from: 'products', localField: 'pid', foreignField: '_id', as: 'product' } }, { $lookup: { from: 'users', localField: 'uid', foreignField: '_id', as: 'user' } }]);
        console.log(result);
        resp.send(result)
    } catch (error) {
        resp.send(error)
    }
})

router.get("/:id", async (req, resp) => {
    const _id = req.params.id
    try {
        const result = await Cart.findOne({ _id })
        resp.send(result)
    } catch (error) {
        resp.send(error)
    }
})

router.delete("/:id", async (req, resp) => {
    const _id = req.params.id
    try {
        const result = await Cart.findByIdAndDelete(_id)
        resp.send(result)
    } catch (error) {
        resp.send(error)
    }
})

router.put("/:id", async (req, resp) => {
    const _id = req.params.id
    try {
        const result = await Cart.findByIdAndUpdate(_id, req.body)
        resp.send(result)
    } catch (error) {
        resp.send(error)
    }
})


router.get("/user/:id", auth, async (req, resp) => {
    //const _id = mongoose.Types.ObjectId(req.params.id)
    const _id = mongoose.Types.ObjectId(req.uid)
    console.log(_id)
    try {
        const result = await Cart.aggregate([{ $match: { 'uid': _id } }, { $lookup: { from: 'products', localField: 'pid', foreignField: '_id', as: 'product' } }, { $lookup: { from: 'users', localField: 'uid', foreignField: '_id', as: 'user' } }]);
        resp.send(result)
    } catch (error) {
        resp.send(error)
    }
})

module.exports = router