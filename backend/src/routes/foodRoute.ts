import { Router, Request, Response } from 'express';
import { upload } from '../config/multer';

// Controller
import { GetFoodController } from '../controllers/food/getFoods';
import { CreateFoodController } from '../controllers/food/createFood';
import { RemoveFoodController } from '../controllers/food/removeFood';

// Mongo Repositorys
import { MongoGetFoodsRepository } from '../Repositorys/getFoods/mongoGetFood';
import { MongoCreateFoodRepository } from '../Repositorys/createFoods/mongoCreateFood';
import { MongoRemoveFoodRepository } from '../Repositorys/removeFoods/mongoRemoveFood';

export const foodRouter: Router = Router();

foodRouter.get('/get', async (req: Request, res: Response) => {
    const mongoGetFoodsRepository = new MongoGetFoodsRepository();

    const getFoodController = new GetFoodController(mongoGetFoodsRepository);

    const { statusCode, body } = await getFoodController.handle();

    res.send(body).status(statusCode);
});

foodRouter.post(
    '/post',
    upload.single('image'),
    async (req: Request, res: Response) => {
        const mongoCreateFoodRepository = new MongoCreateFoodRepository();

        const createFoodController = new CreateFoodController(
            mongoCreateFoodRepository
        );

        const file = req.file as Express.Multer.File;

        const { statusCode, body } = await createFoodController.handle({
            body: req.body,
            file,
        });

        res.send(body).status(statusCode);
    }
);

foodRouter.delete('/remove', async (req: Request, res: Response) => {
    const mongoRemoveFoodRepository = new MongoRemoveFoodRepository();

    const removeFoodController = new RemoveFoodController(
        mongoRemoveFoodRepository
    );

    const { body, statusCode } = await removeFoodController.handle(req.body);

    res.send(body).status(statusCode);
});
