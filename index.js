const express = require('express');
const request = require('request');
const app = express();


let port = 5002;
let clientID = '6d69b87591344bb5940344b285c6655e';
let clientSecret = 'd586d664b6e8470f888eada9cf47499c';



app.listen(port,()=>{});

app.all('/getFoodAccessToken',(req,res,next)=>{
    console.log("device requesting token");
    next();
})

app.get('/getFoodAccessToken',(req,res)=>{

    const options = {
        method: 'POST',
        url: 'https://oauth.fatsecret.com/connect/token',
        method : 'POST',
        auth : {
            user : clientID,
            password: clientSecret

        },
        headers: { 'content-type': 'application/json'},
        form: {
            'grant_type': 'client_credentials',
            'scope' : 'basic'
        },
        json: true
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        res.send(body);
	console.log('key genarated: ' + body.access_token);
    });


});
