const express = require("express")
const app = express();
const path = require("path");
const PORT = 9000;


app.get("/", (req, resp) => {
    //resp.send("Home calling")
    // resp.json({
    //     "name": "tops"
    // })
    resp.sendFile(path.join(__dirname, "home.html"))
})

app.get("/about", (req, resp) => {
    //resp.send("About calling")
    resp.sendFile(path.join(__dirname, "about.html"))
})

app.get("/contact", (req, resp) => {
    resp.sendFile(path.join(__dirname, "contact.html"))
})

app.get("/help", (req, resp) => {
    resp.sendFile(path.join(__dirname, "help.html"))
})


app.get("*", (resq, resp) => {
    resp.send("404 not fount")
})

app.listen(PORT, () => {
    console.log("Server running on port" + PORT);
})

//app.listen(PORT)
