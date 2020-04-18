import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
  res.json({ message: ' Hello GoStack rumo ao Fulltack !' });
});

export default routes;
