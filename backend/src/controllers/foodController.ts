import { Request, Response } from 'express';
import { foodModel } from '../models/foodModel';
import { IFood } from '../types/food';

// add food item
export const addFoodController = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        if (!req.file) {
            res.status(400).json({
                success: false,
                message: 'Image file is required',
            });
            return;
        }
        const { name, description, price, category }: IFood = req.body;
        const image: string = `${req.file.filename}`;

        const food = new foodModel({
            name,
            description,
            price,
            image,
            category,
        });

        await food.save();

        res.status(201).json({
            success: true,
            message: 'Food added successfully',
        });
    } catch (error) {
        console.error('Error adding food:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
};
