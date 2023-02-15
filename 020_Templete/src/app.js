const express = require("express")
const app = express()
const port = 9000;
const path = require("path")
const hbs = require("hbs")


const viewpath = path.join(__dirname, "../templetes/views")
const publicpath = path.join(__dirname, "../public")
app.set("view engine", "hbs")
app.set("views", viewpath)
app.use(express.static(publicpath))

app.get("/", (req, resp) => {
    resp.render("index")
})



app.listen(port, () => {
    console.log("server runing on port : " + port);
})