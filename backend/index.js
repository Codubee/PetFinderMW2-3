const express = require("express");
const app = express();
const axios = require("axios");
app.use(express.json());

/*
    I will leave this here as an example that you can use
    when building your APIs. I suggest that you try to understand
    what each line is doing. Reach out if you have any questions.
*/
app.get("/exampleApi", function (req, res) {
  axios
    .get("https://api.agify.io?name=Mike")
    .then(function (response) {
      // handle success and send back a 200 response with the data
      console.log(response.data);
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      /* 
            It is good practice to handle the error and send back the 
            error message that was received from the API call
        */
      console.log(error);
      res.status(400).json({ error: "An error occurred" });
    });
});

app.get("/getAnimalDescription", function (req, res) {
  axios
    .get(
      "https://codubee-projects-api.herokuapp.com/animal/getAnimalDescription"
    )
    .then((herokuResponse) => {
      console.log(herokuResponse.data);
      res.status(200).json(herokuResponse.data);
    })
    .catch(function (error) {
      console.log(error);
      res.status(400).json({ error: "Oops! An error occured" });
    });
});

app.post('/addAnimal', function (req, res) {

    console.log(req.body)

    const body = {
        id : req.body.id,
        record : {
            name : req.body.name,
            type : req.body.type,
            sex  : req.body.sex,
            shelter_name : req.body.shelter_name,
            adoption_url : req.body.adoption_url,
            image : req.body.image
        }
    }
    axios.post('https://codubee-projects-api.herokuapp.com/animal/addAnimal', body)
    .then(function(heroku_response){
        console.log(heroku_response.data);
        res.status(200).json(heroku_response.data);
    })
    .catch(function (error){
        console.log(error)
        res.status(400).json({error: "An error occured"});
    })

})

app.listen(8080, () => console.log("Listening at locahost:8080"));
