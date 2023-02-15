


function add(a, b, callback) {
    callback(a + b, a * b)
}

function mul(a, b) {
    console.log(a * b);
}

function square(a, callback) {
    callback(a * a);
}

module.exports = { add, mul, square }