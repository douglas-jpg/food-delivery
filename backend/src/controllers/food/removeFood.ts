import {
    IFoodRemoved,
    IRemoveFoodController,
    IRemoveFoodRepository,
} from '../../types/foods/foodProtocols';
import { HttpRequest, HttpResponse } from '../../types/responseProtocols';
import fs from 'fs';

export class RemoveFoodController implements IRemoveFoodController {
    removeFoodRepository: IRemoveFoodRepository;

    constructor(removeFoodRepository: IRemoveFoodRepository) {
        this.removeFoodRepository = removeFoodRepository;
    }
    async handle(
        body
    ): Promise<HttpResponse<IFoodRemoved>> {
        try {
            // if(!httpRequest.body) {
            //     return {
            //         statusCode: 400,
            //         body: 'Please specify body',
            //     };
            // }
            // console.log(httpRequest.body)

            // const { image } = httpRequest.body;

            const image = body.image

            console.log(body)

            fs.unlink(`uploads/${image}`, () => {});


            const food = await this.removeFoodRepository.removeFood(body);

            return {
                statusCode: 200,
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
