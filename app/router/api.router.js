import { Router } from 'express';
import { routeurPost } from '../post/post.router.js';
import { routeurUser } from '../user/user.router.js';

const router = Router();

router.use('/post', routeurPost);
router.use('/user', routeurUser);

export {
    router as routerApi
}