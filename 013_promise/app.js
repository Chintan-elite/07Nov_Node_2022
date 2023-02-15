// //const std = require("./data")

// // const getStudent = () => {
// //     std.allStudent(3, (data) => {
// //         console.log(data);
// //         std.info(data, (result) => {
// //             console.log(result);
// //         })
// //     })
// // }


// // std.allStudent(2).then(data => {
// //     console.log(data);
// //     return std.info(data)
// // }).then(result => {
// //     console.log(result);
// // }).catch(err => {
// //     console.log(err);
// // })


// const getdata = async () => {

//     try {
//         const data = await std.allStudent(2);
//         console.log(data);
//         const result = await std.info(data);
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }




// getdata()
// //getStudent();

//*****************************weather app***************** */

const weather = require("./weather")
const geocode = require("./geocode")

// geocode.getGeoCode("surat,gujarat").then(data => {
//     return weather.getWeather(data.lat, data.lng)
// }).then(result => {
//     console.log(result);
// }).catch(err => {
//     console.log(err);
// })

const myweather = async () => {
    try {
        const data = await geocode.getGeoCode("surat,gujarat");
        const result = await weather.getWeather(data.lat, data.lng);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

myweather()