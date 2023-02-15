
const fs = require("fs");


const addFile = (data) => {

    const allData = view();

    const duplicate = allData.find(ele => {
        return ele.email == data.email;
    })
   // console.log(duplicate);
    if (duplicate) {
        console.log("email alredy exist");
        return;
    }
    allData.push(data)
    const dt = JSON.stringify(allData)
    fs.writeFile("userdetail.json", dt, () => {
        console.log("file written successfully");
    })
}

const viewFile = () => {
    const data = view()
    console.log(data);
}

const view = () => {

    var dt;
    // fs.readFile("userdetail.json", "utf-8", (err, data) => {
    //     dt = JSON.parse(data);
    // })
    try {
        var data = fs.readFileSync("userdetail.json", "utf-8")
        dt = JSON.parse(data)
        return dt;
    } catch (error) {
        return [];
    }

}

const removeData = (name) => {
    const allData = view();

    const newData = allData.filter(ele => {
        return ele.name != name;
    })

    const dt = JSON.stringify(newData)
    fs.writeFile("userdetail.json", dt, () => {
        console.log("file update successfully");
    })

}


module.exports = { addFile, viewFile, removeData }