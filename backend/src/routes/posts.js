import uuidv4 from 'uuid/v4';
import { Router } from 'express';

const router = Router();


router.get('/', async (req, res) => {
    const posts = await req.context.models.Post.findAll();
    return res.send(posts);
});

router.get('/:postId', async (req, res) => {
    const post = await req.context.models.Post.findByPk(
        req.params.postId,
    );
    return res.send(post);
});

router.post('/', async (req, res) => {
    const message = await req.context.models.Post.create({
        title: req.body.title,
        content: req.body.content,
        userId: req.context.me.id,
    });

    return res.send(message);
});

router.patch('/:postId', async (req, res) => {
    
    const updatePost = await req.context.models.Post.update({
        title: req.body.title,
        content: req.body.content,
        userId: req.context.me.id,
    }, {
        where: {
            id: req.params.postId,
        }
    });
    
    const post = await req.context.models.Post.findByPk(
        req.params.postId,
    );

    return res.send(post);
});

router.delete('/:postId', async (req, res) => {
    const result = await req.context.models.Post.destroy({
        where: { id: req.params.postId },
    });

    return res.send(true);
});

export default router;
