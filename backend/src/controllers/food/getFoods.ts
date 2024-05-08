import {
    IGetFoodsController,
    IGetFoodsRepository,
} from '../../types/foods/foodProtocols';

export class GetFoodController implements IGetFoodsController {
    getFoodsRepository: IGetFoodsRepository;

    constructor(getFoodsRepository: IGetFoodsRepository) {
        this.getFoodsRepository = getFoodsRepository;
    }

    async handle() {
        try {
            const foods = await this.getFoodsRepository.getFoods();

            return {
                statusCode: 200,
                body: foods,
            };
        } catch (error) {
            return {
                statusCode: 500,
                body: 'Something went wrong.',
            };
        }
    }
}
