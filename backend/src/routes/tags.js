import uuidv4 from 'uuid/v4';
import { Router } from 'express';

const router = Router();


router.get('/', async (req, res) => {
    const tags = await req.context.models.Tag.findAll();
    return res.send(tags);
});

router.get('/:tagId', async (req, res) => {
    const tag = await req.context.models.Tag.findByPk(
        req.params.tagId,
    );
    return res.send(tag);
});

router.post('/', async (req, res) => {
    const message = await req.context.models.Tag.create({
        name: req.body.name,
        userId: req.context.me.id,
    });

    return res.send(message);
});

router.patch('/:tagId', async (req, res) => {
    
    const updateTag = await req.context.models.Tag.update({
        name: req.body.name,
        userId: req.context.me.id,
    }, {
        where: {
            id: req.params.tagId,
        }
    });
    
    const tag = await req.context.models.Tag.findByPk(
        req.params.tagId,
    );

    return res.send(tag);
});

router.put('/:tagId', async (req, res) => {
    
    const updateTag = await req.context.models.Tag.update({
        id: req.params.tagId,
        name: req.body.name,
        userId: req.context.me.id,
    }, {
        where: {
            id: req.params.tagId,
        }
    });
    
    const tag = await req.context.models.Tag.findByPk(
        req.params.tagId,
    );

    return res.send(tag);
});

router.delete('/:tagId', async (req, res) => {
    const result = await req.context.models.Tag.destroy({
        where: { id: req.params.tagId },
    });

    return res.send(true);
});

export default router;
