const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const helmet = require('helmet');
const app = express();
const swaggerUi = require('swagger-ui-express'), swaggerDocument = require('./swagger.json');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument)
);


app.post('/users/authenticate',(req, res) => {
    let userName = req.body.user;
    let password = req.body.password;

    // if(userName.match(/^[^\s@<>]+@[^\s@]+\.[^\s@<>]+$/) && (password.length >= 6 && password.length <= 20))
    // {
        if(userName === 'MTN_user' && password === 'MTN281#^@*')
        {
            res.status(200).send({
                id: 1,
                username: "MTN_user",
                firstName: "MTN",
                lastName: "User"
            });
        }
        else
        {
            res.status(500).send('Incorrect Username or Password');
        }
    // }
    // else
    // {
    //
    // }


});

app.listen(3000,() => {
    console.log("Started on PORT 3000");
})