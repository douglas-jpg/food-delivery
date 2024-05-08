import { foodModel } from '../../models/foodModel';
import { IFoodRemoved, IRemoveFoodRepository } from '../../types/foods/foodProtocols';

export class MongoRemoveFoodRepository implements IRemoveFoodRepository {
    async removeFood(food: IFoodRemoved) {
        try {
            const removedFood = await foodModel.findById(food._id);
            await foodModel.findByIdAndDelete();
            return removedFood;
        } catch (error) {
            console.error('Error remove food:', error);
            throw error;
        }
    }
}
