
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: 'allenfarias30@gmail.com',
        pass: '16dpr0887l'
        
    }
});


let mailOptions = {
    from: 'allenfarias30@mail.com',
    to: 'allenfarias29@gmail.com',
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
