import { Router } from 'express';
import { routeurPost } from '../post/post.router.js';

const router = Router();

router.use('/post', routeurPost);

export {
    router as routerApi
}