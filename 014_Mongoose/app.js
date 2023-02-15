const mongoose = require("mongoose")

const dburl = "mongodb://127.0.0.1:27017/7nov";

mongoose.connect(dburl).then(() => {
    console.log("db connected");
}).catch(err => {
    console.log(err);
})


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        enum: ["pen", "fan", "Mouse"],

    },
    price: {
        type: Number,
        min: 4,
        max: 10
    },
    qty: {
        type: Number,
        default: 0
    }
})

const Product = new mongoose.model("Product", productSchema);

const addProduct = async () => {

    // const p1 = new Product({ name: "Remote", price: 500 })
    // p1.save().then(data => {
    //     console.log(data);
    // }).catch(err => {
    //     console.log(err);
    // })

    try {
        const p1 = new Product({ name: "pen", price: 500 })
        const data = await p1.save();
        console.log(data);
    } catch (error) {
        console.log(error);
    }

}

const addManyProduct = () => {

    const p1 = new Product({ name: "Laptop", price: 50000, qty: 10 })
    const p2 = new Product({ name: "TV", price: 15000, qty: 5 })
    const p3 = new Product({ name: "Mouse", price: 200, qty: 4 })
    Product.insertMany([p1, p2, p3]).then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    })

}

const viewProduct = async () => {

    // Product.find().then(data => {
    //     console.log(data);
    // }).catch(err => {
    //     console.log(err);
    // })

    try {
        const data = await Product.find({ name: "TV" });
        console.log(data[0].price);
    } catch (error) {
        console.log(error);
    }
}

const viewFilter = async () => {
    try {
        const data = await Product.findOne({ name: "TV" });
        console.log(data.price);
    } catch (error) {

    }
}

const deleteProduct = async () => {
    try {

        //   const data = await Product.findByIdAndDelete({ _id: "63abc5576d2410129979634b" })

        //const data = await Product.deleteOne({ name: "TV" })

        const data = await Product.deleteMany({ name: "TV" })

        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

const updateProduct = async () => {
    //const p = new Product({ qty: 11 })
    try {
        const data = await Product.findByIdAndUpdate("63abca3e9b2d36a85d173dc3", { qty: 12 });
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

addProduct();
//addManyProduct()
//viewProduct()
//viewFilter()
//deleteProduct()
//updateProduct()