
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        //email goes here
        user: '',
        //password goes here
        pass: ''
        
    }
});


let mailOptions = {
    from: '',
    to: '',
    subject: 'YOU GOT MAIL!!! LMAO',
    text: 'bruh moment'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }

});
