import { Router, Request, Response } from 'express';
import {
    addFoodController,
    getFoodController,
    removeFoodController,
} from '../controllers/foodController';
import { upload } from '../config/multer';

export const foodRouter: Router = Router();

foodRouter.post(
    '/post',
    upload.single('image'),
    (req: Request, res: Response) => {
        addFoodController(req, res);

        // res.send('Food added successfully');
    }
);

foodRouter.get('/get', (req: Request, res: Response) => {
    getFoodController(req, res);
});

foodRouter.delete('/delete', (req: Request, res: Response) => {
    removeFoodController(req, res);
});
