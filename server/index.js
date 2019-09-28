import http from 'http';
import app from '<server>/app';

const port = process.env.PORT || 3000;
app.set('port', port);
http.createServer(app)
  .listen(port)
  .on('listening', () => console.log(`listening on port:${port}`));
