
//var firstName = "Tops";
//var lastName = "Tech";

//diff betwen undefied and null
// var myValue = null;
// var myData;

// console.log(typeof (myValue));
// console.log(typeof (myData));

//oprators : 

// console.log(4 + 4);
// console.log(4 + "data");
// console.log(4 + "4");
// console.log(5 - "data");
// console.log(7 - "5");
// console.log(5 ** 8);

//diffrenc ebetween ==, ===
// var a = 2;
// var b = "2";

// console.log(a == b); // value
// console.log(a === b); //datatype

//turnary
// var a = 100;
// var b = 2000;
// var c = 600;

// var result = (a > b) ? (a > c) ? a : c : (b > c) ? b : c
// console.log(result);


//statements 

// if (a > b) {
//     if (a > c) {
//         console.log("a is greater");
//     }
//     else {
//         console.log("c is greater");
//     }
// }
// else {
//     if (b > c) {
//         console.log("b is greater");
//     }
//     else {
//         console.log("c is greater");
//     }
// }


// if (a > b && a > c) {
//     console.log("a is greater");
// }
// else if (b > c && b > a) {
//     console.log("b is greater");
// }
// else if (c > a && c > b) {
//     console.log("c is greater");
// }


// var choice = 5;

// switch (choice) {
//     case 1:
//         console.log("Gujarati");
//         break;
//     case 2:
//         console.log("Hindi");
//         break;
//     case 3:
//         console.log("English");
//         break;
//     default:
//         console.log("invalid choice");
//         break;
// }

// for (var i = 1; i <= 10; i++) {
//     console.log(i);
// }

//function

function add(a, b) {
    var c = a + b;
    console.log("addition is : " + c);
}

//add(10, 20)
//add(50, 60);
//add(5)

function square(a) {
    return a * a;
}

// var r = square(5)
// console.log(r);
// console.log(square(10));

var mul = (a, b) => {
    // console.log("multiplication of " + a + " and " + b + " is " + (a * b));
    console.log(`multiplication of ${a} and ${b} is ${a * b}`);
}

//mul(10, 20)

//let,var, const

// var fname = "tech";
// let lname = "tops";

// console.log(fname);
// console.log(lname);

// function mydata() {
//     //var fname = "tech";
//     //let lname = "tops";
//     if (true) {
//         var fname = "tech";
//         let lname = "tops";
//     }
//     console.log(fname);
//     console.log(lname);
// }

//mydata()

//var a = [10, 20, 30, 40, 50, 50];

//console.log(a.length);
//console.log(a[2]);
//console.log(a.reverse());
//console.log(a.pop());
//console.log(a.pop());
//a.push(100);
//a.push(200);
//a.shift()
//a.shift();
//console.log(a.length);
// a.unshift(500);
// console.log(a);

// var sum = 0;
// var max = a[0];
// for (var i = 0; i < a.length; i++) {
//     //console.log(a[i]);
//     sum = sum + a[i];

//     if (a[i] > max) {
//         max = a[i];
//     }
// }

// console.log("addition is : " + sum);
// console.log("avg is : " + (sum / a.length));
// console.log("max is : " + max);
//var sub = ["node", "java", "react", 30, 74.55, 'a'];
//console.log(sub);



var str = "sun rises in East";

// console.log(str.length);
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log(str.slice(4, 9));
// console.log(str.replace("sun", "moon"));
//console.log(str.replaceAll("sun", "moon"));
//console.log(str.charAt(5));
// console.log(str.indexOf("s"));
// console.log(str.lastIndexOf("s"));
// console.log(str.endsWith("suns"));
// console.log(str.startsWith("sun"));
//console.log(str.trim());
// console.log(str.trimStart().concat("abcd"));
// console.log(str.trimEnd().concat("abcd"));

//var s = str.split(" ")

// for (var i = s.length - 1; i >= 0; i--) {
//     console.log(s[i]);
// }

// var temp = s[0];
// s[0] = s[s.length - 1];
// s[s.length - 1] = temp;

// for (var i = 0; i < s.length; i++) {
//     console.log(s[i]);
// }


//obj

// var obj1 = {
//     name: "Jinal",
//     email: "jinal@gmail.com",
//     phno: 98653626
// }

// var obj2 = {
//     name: "Hemali",
//     email: "hemali@gmail.com",
//     phno: 89635241
// }

// // console.log(obj1);
// // console.log(obj1.name);

// var ar = [obj1, obj2];
// console.log(ar);


// var a;
// class Demo {

//     constructor(x) {
//         a = x;
//         console.log("cons calling...");
//     }
//     display() {

//         console.log("display method calling : " + a);
//     }
//     static sample() {
//         console.log("Sample calling");
//     }
// }

// var myDemo = new Demo(10);
// myDemo.display();
// myDemo.sample();

// var myDemo1 = new Demo(20);
// myDemo1.display()


// Demo.sample()


// const mydate = new Date();
// console.log(mydate);
// console.log(mydate.getDate());
// console.log(mydate.getDay());
// console.log(mydate.getFullYear());
