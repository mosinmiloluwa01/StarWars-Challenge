import express from 'express';
import indexRouter from './v1';

const router = express.Router();

router.use('/api/v1', indexRouter);
router.get('/', (req, res) => {
  res.status(200).send(`<h1>Welcome To StarWars Challenge</h1>
    <p>StarWars - A web application that fetches starwars movies from an external API.</p>
    <h4>Please use PostMan and navigate to <code>/api/v1</code> to use the app</h4>
    <h4>Also, if you would like to create comments for any movie, please make a <code>POST</code> request to <code>/api/v1/movies/:id/comments</code>, <code>id</code> refers to one of the following IDs</h4>
    <ul>
    <li>1 => A New Hope</li>
    <li>2 => Attack of the Clones</li>
    <li>3 => The Phantom Menace</li>
    <li>4 => Revenge of the Sith</li>
    <li>5 => Return of the Jedi</li>
    <li>6 => The Empire Strikes Back</li>
    </ul>
    <p>For any more info, please click
     <a href='https://github.com/mosinmiloluwa01/StarWars-Challenge'> here </a>
     to visit the repo.</P>
      <h4>Thanks  &#x1F600;</h4>`);
});

export default router;
