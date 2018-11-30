const request = require('request');

class textspeechController{

    static speak(req,res){
        console.log(process.env.TOKENRSS)
        const options = {
            url: 'http://api.voicerss.org/',
            method: "post",
            json: true,
            qs:{
                key: process.env.TOKENRSS,
                hl: req.body.lang,
                src: req.body.text,
                b64: true
            }
          };
             
          request(options, function(error, response, body) {
            // res.status(response.statusCode).json({error,response,body})
            if (!error) {
                  res.status(response.statusCode).json({body})
              } else {
                  res.status(response.statusCode).json({error})
              }
            });
    }
}

module.exports = textspeechController