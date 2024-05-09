import {
    IFoodRemoved,
    IRemoveFoodController,
    IRemoveFoodRepository,
} from '../../types/foods/foodProtocols';
import { HttpResponse } from '../../types/responseProtocols';
import fs from 'fs';

export class RemoveFoodController implements IRemoveFoodController {
    removeFoodRepository: IRemoveFoodRepository;

    constructor(removeFoodRepository: IRemoveFoodRepository) {
        this.removeFoodRepository = removeFoodRepository;
    }

    async handle(body: IFoodRemoved): Promise<HttpResponse<IFoodRemoved>> {
        try {

            const image = body.image;
            fs.unlink(`src/uploads/${image}`, () => {});

            const food = await this.removeFoodRepository.removeFood(body);

            return {
                statusCode: 200,
                body: food,
            };
            
        } catch (error) {
            console.log(error);
            return {
                statusCode: 500,
                body: 'Something went wrong.',
            };
        }
    }
}
