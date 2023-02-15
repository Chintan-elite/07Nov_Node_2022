const express = require("express")
const router = express.Router()
const Category = require("../model/Category")
const Product = require("../model/Product")

router.post("/", async (req, resp) => {
    try {
        const prod = new Product(req.body)
        const result = await prod.save();
        resp.send(result)
    } catch (error) {
        resp.send(error)
    }
})

router.get("/", async (req, resp) => {
    try {
        const result = await Product.find();
        resp.send(result)
    } catch (error) {
        resp.send(error)
    }
})

router.get("/:id", async (req, resp) => {
    const _id = req.params.id
    try {
        const result = await Product.findOne({ _id })
        resp.send(result)
    } catch (error) {
        resp.send(error)
    }
})

router.delete("/:id", async (req, resp) => {
    const _id = req.params.id
    try {
        const result = await Product.findByIdAndDelete(_id)
        resp.send(result)
    } catch (error) {
        resp.send(error)
    }
})

router.put("/:id", async (req, resp) => {
    const _id = req.params.id
    try {
        const result = await Product.findByIdAndUpdate(_id, req.body)
        resp.send(result)
    } catch (error) {
        resp.send(error)
    }
})


router.get("/category/:id", async (req, resp) => {
    const _id = req.params.id
    try {
        const result = await Product.find({ catid: _id })
        resp.send(result)
    } catch (error) {
        resp.send(error)
    }
})


module.exports = router