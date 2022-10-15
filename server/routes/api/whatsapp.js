const express = require('express');
const router = express.Router();
const axios = require("axios");
// Imports dependencies and set up http server
const request = require("request");
const { Readable } = require("stream");
  const cloudinary = require("cloudinary").v2;

router.post("/webhook", async (req, res) => {
    // Parse the request body from the POST
    let body = req.body;
  
    // Check the Incoming webhook message
   // console.log(JSON.stringify(req.body, null, 2));
  
    // info on WhatsApp text message payload: https://developers.facebook.com/docs/whatsapp/cloud-api/webhooks/payload-examples#text-messages
    if (req.body.object) {
      if (
        req.body.entry &&
        req.body.entry[0].changes &&
        req.body.entry[0].changes[0] &&
        req.body.entry[0].changes[0].value.messages &&
        req.body.entry[0].changes[0].value.messages[0]
      ) {
        let phone_number_id =
          req.body.entry[0].changes[0].value.metadata.phone_number_id;
        let from = req.body.entry[0].changes[0].value.messages[0].from; // extract the phone number from the webhook payload
        let msg_body = req.body.entry[0].changes[0].value.messages[0] // extract the message text from the webhook payload
         let imgid = msg_body.image.id;
        console.log(msg_body, imgid);
        
          let respu = await axios({
            method: "GET",
            url: "https://graph.facebook.com/v12.0/"+imgid,
            headers: { "Authorization" : "Bearer " + "EAAJeOPXHxxABAFlyEbJjMebww4RXN3knTQBhSbRIAT2Rn9MAOZAesmstwL7xRFILtjo3jIlj8Cw2Xt8ZBJCvZA8imoHO3uLKAgF44h8yvbcRHZAYXZCsq5dRpn7nIQSF2b7t7vrV9qkc0sB60j2mZAuja7nIufODwyUZBYr68X6tZAka6tIhZCfh7XCkZA3NNZAoDWMrpr6wYSpAAZDZD"}
          }).then(async data=>{
            //console.log(data);
              await axios({
              method: "GET",
              url: data.data.url,
              headers: { "Authorization" : "Bearer " + "EAAJeOPXHxxABAFlyEbJjMebww4RXN3knTQBhSbRIAT2Rn9MAOZAesmstwL7xRFILtjo3jIlj8Cw2Xt8ZBJCvZA8imoHO3uLKAgF44h8yvbcRHZAYXZCsq5dRpn7nIQSF2b7t7vrV9qkc0sB60j2mZAuja7nIufODwyUZBYr68X6tZAka6tIhZCfh7XCkZA3NNZAoDWMrpr6wYSpAAZDZD"}, 
            },{
                responseType: 'arraybuffer'
              }).then(async resData=>{
                const outputFilename = 'file.jpg'
                await fs.writeFileSync(outputFilename, resData.data);
                let res = await uploadFronBuffer(outputFilename);
                console.log(res);
            }).catch(()=>{
  
            });
            
          }).catch(()=>{
            
          });
      
      }
      res.sendStatus(200);
    } else {
      
      // Return a '404 Not Found' if event is not from a WhatsApp API
      res.sendStatus(404);
    }
  });

router.get("/webhook", (req, res) => {
    /**
     * UPDATE YOUR VERIFY TOKEN
     *This will be the Verify Token value when you set up webhook
    **/
    const verify_token = process.env.VERIFY_TOKEN;
  
    // Parse params from the webhook verification request
    let mode = req.query["hub.mode"];
    let token = req.query["hub.verify_token"];
    let challenge = req.query["hub.challenge"];
  
    // Check if a token and mode were sent
    if (mode && token) {
      // Check the mode and token sent are correct
      if (mode === "subscribe" && token === verify_token) {
        // Respond with 200 OK and challenge token from the request
        console.log("WEBHOOK_VERIFIED");
        res.status(200).send(challenge);
      } else {
        // Responds with '403 Forbidden' if verify tokens do not match
        res.sendStatus(403);
      }
    }
  });
  
  const bufferToStream = (buffer) => {
    const readable = new Readable({
      read() {
        this.push(buffer);
        this.push(null);
      },
    });
    return readable;
  }
  
  
  const uploadFronBuffer = (image) => {
    return new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: "DEV" },
        (err, result) => {
          if (result) {
            console.log("uploading" + result);
            
            resolve(result);
          } else {
            reject(err);
           }
        }
      );
  
      bufferToStream(image.buffer).pipe(stream)
    });
  }

module.exports = router;
