const express = require('express')
const app = express()
const axios = require('axios');
app.use(express.json());


/*
    I will leave this here as an example that you can use
    when building your APIs. I suggest that you try to understand
    what each line is doing. Reach out if you have any questions.
*/
app.get('/exampleApi', function (req, res) {

    axios.get('https://api.agify.io?name=Mike')
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
        console.log(error)
        res.status(400).json({error:"An error occurred"});
    })
})

// To get all matches from a specific user using their id
app.get('/getMatches', function (req, res) {

    console.log(req.query)
    let id = req.query.id;
    axios.get('https://codubee-projects-api.herokuapp.com/animal/getmatches?id='+id)
    .then(function (herokuResponse) {
        console.log(herokuResponse.data)
        res.status(200).json(herokuResponse.data)
    })
    .catch(function (error) {
        console.log(error)
        res.status(400).json({error:"An error has occurred"})
    })
})


app.listen(8080, () => console.log('Listening at locahost:8080'))
