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
  axios.get("https://codubee-projects-api.herokuapp.com/animal/getAnimalDescription")
    .then((herokuResponse) => {
      res.status(200).json(herokuResponse.data);
    })
    .catch(function (error) {
      console.log(error);
      res.status(400).json({ error: "Oops! An error occured" });
    });
});

app.post('/addAnimal', function (req, res) {

    console.log(req.body)
    axios.post('https://codubee-projects-api.herokuapp.com/animal/addAnimal', req.body)
    .then(function(heroku_response){
        console.log(heroku_response.data);
        res.status(200).json(heroku_response.data);
    })
    .catch(function (error){
        console.log(error)
        res.status(400).json({error: "An error occured"});
    })

})

// To get all matches from a specific user using their id
app.get('/getMatches', function (req, res) {

    let id = req.query.id
    axios.get('https://codubee-projects-api.herokuapp.com/animal/getmatches?id='+id)
    .then(function (herokuResponse) {
        res.status(200).json(herokuResponse.data)
    })
    .catch(function (error) {
        console.log(error)
        res.status(400).json({error:"An error has occurred"})
    })
})

app.get('/getWeatherDescription', function (req,res) {
  axios.get('https://codubee-projects-api.herokuapp.com/translate/getWeatherDescription')
  .then(function (herokuResponse) {
    res.status(200).json(herokuResponse.data)
  })
  .catch(function (error) {
    console.log(error)
    res.status(400).json({error: "An error occured"})
  })
})

//To Get weather
app.get('/getWeather', function (req,res) {
  axios.get('https://codubee-projects-api.herokuapp.com/translate/getWeather')
  .then(function (herokuResponse) {
    res.status(200).json(herokuResponse.data)
  })
  .catch(function (error) {
    console.log(error)
    res.status(400).json({error: "An error has occured"})
  })
})

app.listen(8080, () => console.log('Listening at locahost:8080'))