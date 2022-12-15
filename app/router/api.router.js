import { Router } from 'express';
import { routeurPost } from '../post/post_router.js';

const router = Router();

router.use('/post', routeurPost);

export {
    router as routerApi
}