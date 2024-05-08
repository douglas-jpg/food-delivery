import { foodModel } from '../../models/foodModel';
import { IFood } from '../../types/foods/food';
import { ICreateFoodRepository } from '../../types/foods/foodProtocols';

export class MongoCreateFoodRepository implements ICreateFoodRepository {
    async createFood(params: IFood): Promise<IFood> {
        try {
            const food = new foodModel(params);
            const savedFood = await food.save();
            return savedFood;
        } catch (error) {
            console.error('Error saving food:', error);
            throw error;
        }
    }
}
