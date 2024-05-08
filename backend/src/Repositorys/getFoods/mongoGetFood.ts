import { foodModel } from '../../models/foodModel';
import { IFood } from '../../types/foods/food';
import { IGetFoodsRepository } from '../../types/foods/foodProtocols';

export class MongoGetFoodsRepository implements IGetFoodsRepository {
    async getFoods(): Promise<IFood[]> {
        const foods: IFood[] = await foodModel.find({});
        return foods;
    }
}
//  o repository permite que eu posso se comunicar com outro bd
// export class PostgresGetFoodsRepository implements IGetFoodsRepository {
//     getFoods(): Promise<IFood[]> {}
// }