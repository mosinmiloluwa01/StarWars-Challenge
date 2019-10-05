# StarWars Challenge
This application fetches starWars movies from an external API and performs data manipulation on the retrieved data.

## Heroku Link
https://starwars-challenge-app.herokuapp.com

## API Endpoints

#### Get Movie List
`GET` https://starwars-challenge-app.herokuapp.com/api/v1/movies

#### Get Casts per movie
`GET` https://starwars-challenge-app.herokuapp.com/api/v1/casts/2/:gender?sortParams=name
`sortParams` can also be gender or height

#### Post A Comment
`POST` https://starwars-challenge-app.herokuapp.com/api/v1/comments/:id
`id` refers to `movieId`

#### Get Comments per movie
`GET` https://starwars-challenge-app.herokuapp.com/api/v1/comments/:id
`id` refers to `movieId`

## Tools used for Development
`node`, `express`, `babel`, `babel module resolvers`, `request-ip`, `sequelize`, `postgres`, `body-parser`, `heroku`

## API Documentation
Please find the API documentation [here](https://starwarschallenge.docs.apiary.io/)
