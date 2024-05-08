import { IFood } from '../../types/foods/food';
import {
    ICreateFoodController,
    ICreateFoodRepository,
} from '../../types/foods/foodProtocols';
import { HttpRequest, HttpResponse } from '../../types/responseProtocols';

export class CreateFoodController implements ICreateFoodController {
    createFoodRepository: ICreateFoodRepository;

    constructor(createFoodRepository: ICreateFoodRepository) {
        this.createFoodRepository = createFoodRepository;
    }

    async handle(
        httpRequest: HttpRequest<IFood>
    ): Promise<HttpResponse<IFood>> {
        try {
            if (!httpRequest.body) {
                return {
                    statusCode: 400,
                    body: 'Please specify body',
                };
            }

            const { body, file } = httpRequest;

            const { name, description, price, category }: IFood = body;
            const image: string = `${file.filename}`;

            const newFood = {
                name,
                description,
                price,
                category,
                image,
            };

            const food = await this.createFoodRepository.createFood(newFood);

            return {
                statusCode: 201,
                body: food,
            };
        } catch (error) {
            console.log(error)
            return {
                statusCode: 500,
                body: 'Something went wrong.',
            };
        }
    }
}
