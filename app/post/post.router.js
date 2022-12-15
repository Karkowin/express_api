import { Router } from 'express';
import { getPosts } from './post.controller.js';

const router = Router();

router.get('/', getPosts);

router.post('/', (req, res) => {
    res.send('Route pour créer un post');
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.send('Route pour récupérer un post');
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    res.send('Route pour modifier un post');
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.send('Route pour supprimer un post');
});


export {
    router as routeurPost
}