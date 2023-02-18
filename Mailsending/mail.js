const nodemailer = require("nodemailer")




var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: 'chintan.tops@gmail.com',
        pass: 'ogckofyqvjqattcf'
    }
});

var msg = {
    from: "chintan.tops@gmail.com",
    to: "chintan.tops@gmail.com",
    subject: "Test",
    html: "<h1><a href='www.facebook.com'>Facebook</a></h1>"
}

transporter.sendMail(msg, (err, success) => {
    if (err) {
        console.log(err);
        return
    }
    console.log(success);
})