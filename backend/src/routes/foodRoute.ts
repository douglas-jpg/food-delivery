import { Router, Request, Response } from 'express';
import { addFoodController } from '../controllers/foodController';
import { upload } from '../config/multer';

export const foodRouter: Router = Router();

foodRouter.post(
    '/post',
    upload.single('image'),
    (req: Request, res: Response) => {
        addFoodController(req, res);

        res.send('Food added successfully');
    }
);
