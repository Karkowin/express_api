import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.send('Post Router');
});

export {
    router as routeurPost
}