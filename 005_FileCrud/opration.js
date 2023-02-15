
const fs = require("fs")

const addData = (data) => {

    const allData = view();

    const duplicate = allData.find(ele => {
        return ele.name == data.name
    })

    if (duplicate) {
        console.log("Name exist!!");
        return;
    }


    allData.push(data)
    const dt = JSON.stringify(allData)
    fs.writeFile("tasks.json", dt, () => {
        console.log("data written successfully");
    })
}

const viewData = () => {
    const data = view();
    console.log(data);
}

const viewbyname = (name) => {
    const allData = view();

    const data = allData.find(ele => {
        return ele.name == name;
    })

    console.log(data);

}

const view = () => {
    try {
        const data = fs.readFileSync("tasks.json", "utf-8");
        return JSON.parse(data)
    } catch (error) {
        return [];
    }
}

module.exports = { addData, viewData, viewbyname }