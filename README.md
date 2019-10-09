# StarWars Challenge
This application fetches starWars movies from an external API and performs data manipulation on the retrieved data.

## Heroku Link
https://starwars-challenge-app.herokuapp.com

## API Endpoints

#### Get Movie List
`GET` https://starwars-challenge-app.herokuapp.com/api/v1/movies

#### Get Casts per movie
`GET` https://starwars-challenge-app.herokuapp.com/api/v1/movies/:id/casts
##### N.B 
this endpoint accepts `sortParams`, `gender` and `order` as query params.
`sortParams` refers to a parameter to be used to sort data (sortParams can only be one of the following: name,gender or height )
`order` refers if you are sorting in asceding or descending order

#### Post A Comment
`POST` https://starwars-challenge-app.herokuapp.com/api/v1/movies/:id/comments
`id` refers to `movieId`

#### Get Comments per movie
`GET` https://starwars-challenge-app.herokuapp.com/api/v1/movies/:id/comments
`id` refers to `movieId`

## Tools used for Development
`node`, `express`, `babel`, `babel module resolvers`, `request-ip`, `sequelize`, `postgres`, `body-parser`, `heroku`

## API Documentation
Please find the API documentation [here](https://starwarschallenge.docs.apiary.io/)
