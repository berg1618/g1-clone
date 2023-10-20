require('dotenv').config()
fetch(`https://newsapi.org/v2/everything?q=anime&from=2023-09-20&sortBy=publishedAt&apiKey=${process.env.API_KEY}`)
    .then(function (response) {
        console.log(response.json());
    })
    .catch(function (error) {
        console.log(
            "There has been a problem with your fetch operation: " + error.message,
        );
    });



