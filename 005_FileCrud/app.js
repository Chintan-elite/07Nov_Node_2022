
const yargs = require("yargs")
const file = require("./opration")

yargs.command({
    command: "add",
    builder: {
        name: {
            type: String
        },
        task: {
            type: String
        }
    },
    handler: function (argv) {
        const tasks = {
            name: argv.name,
            task: argv.task
        }
        file.addData(tasks)
    }
})

yargs.command({
    command: "view",
    handler: function () {
        file.viewData();
    }
})

yargs.command({
    command: "viewbyname",
    builder: {
        name: {
            type: String
        }
    },
    handler: function (argv) {
        file.viewbyname(argv.name);
    }
})



yargs.argv