const nodemailer = require('nodemailer'),
    {EMAIL, PASSWORD} = process.env;

module.exports = {
    email: async(req, res) => {
        try {
            let transporter = nodemailer.createTransport({
                host: 'smtp.mail.yahoo.com',
                // host: 'smtp.gmail.com',
                port: 465,
                //port: 587,
                service: 'yahoo',
                //service: 'gmail',
                secure: false,
                //gmailONLY
                //requireTLS: true,
                auth: {
                    user: EMAIL,
                    pass: PASSWORD
                }
            });

            let info = await transporter.sendMail({
                from: `On Deck Baseball <${EMAIL}`,
                to: 'imatexan13@yahoo.com',
                subject: 'On Deck Baseball Test',
                text: 'Your cage rental has been reserved',
                html: `<div>Cage rental confirmation</div>`,
                attachment: [
                    //{fileName: name+of+file, path: file_path}
                ]
            }, (err, res) => {
                if(err){
                    console.log(err)
                } else {
                    res.status(200).send(info);
                }
            })
        } catch(err){
            res.status(500).send(err);
        }
    }
}