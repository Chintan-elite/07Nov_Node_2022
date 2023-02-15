const express = require("express")
const app = express();
const path = require("path")
const hbs = require("hbs")
const dotenv = require("dotenv")
dotenv.config();
const PORT = process.env.PORT;
const viewPath = path.join(__dirname, "../templetes/views")
const partialPath = path.join(__dirname, "../templetes/partials")
const publicPath = path.join(__dirname, "../public")

app.set("view engine", "hbs")
app.set("views", viewPath)
hbs.registerPartials(partialPath)
app.use(express.static(publicPath))


app.get("/", (req, resp) => {
    resp.render("home", { uname: "vaibhav" })
})

app.get("/contact", (req, resp) => {

    const adr = ["surat", "gujarat", "India"];
    resp.render("contact", { address: adr })
})

app.get("/about", (req, resp) => {
    resp.render("about")
})

app.get("/help", (req, resp) => {
    resp.render("help")
})

app.get("/report", (req, resp) => {
    resp.render("reports")
})

app.get("/weather", (req, resp) => {
    resp.render("weather")
})



app.listen(PORT, (req, resp) => {
    console.log("Server is running on port : " + PORT);
})