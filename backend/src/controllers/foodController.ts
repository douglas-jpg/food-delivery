import { Request, Response } from 'express';
import { foodModel } from '../models/foodModel';
import { IFood } from '../types/foods/food';
import fs from 'fs';

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

        // MUNDAR: ao inver de colocar uma response retornar o tipo de response e no food routes pe responsavel de mostrar
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

// get food
export const getFoodController = async (req: Request, res: Response) => {
    try {
        const foods: IFood[] = await foodModel.find({});

        if (!foods) {
            res.status(404).json({
                success: false,
                message: 'No foods found',
            });
            return;
        }

        res.status(200).json({
            success: true,
            data: foods,
        });
    } catch (error) {
        console.error('Error getting all foods: ', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
};

export const removeFoodController = async (req: Request, res: Response) => {
    try {
        const food = await foodModel.findById(req.body.id);

        fs.unlink(`uploads/${food.image}`, () => {});

        await foodModel.findByIdAndDelete(req.body.id);

        res.status(200).json({
            success: true,
            message: 'Food Removed',
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
};
