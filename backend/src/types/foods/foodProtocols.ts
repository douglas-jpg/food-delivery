import { IFood } from './food';
import { HttpResponse, HttpRequest } from '../responseProtocols';

// interface get
export interface IGetFoodsRepository {
    getFoods(): Promise<IFood[]>;
}
export interface IGetFoodsController {
    handle(): Promise<HttpResponse<IFood[]>>;
}

// interface create
export interface ICreateFoodRepository {
    createFood(params: IFood): Promise<IFood>;
}
export interface ICreateFoodController {
    handle(httpRequest: HttpRequest<IFood>): Promise<HttpResponse<IFood>>;
}

// interface remove

export interface IFoodRemoved extends IFood {
    id: string;
}

export interface IRemoveFoodRepository {
    removeFood(food: IFoodRemoved): Promise<IFoodRemoved>;
}
export interface IRemoveFoodController {
    handle(httpRequest: HttpRequest<IFoodRemoved>): Promise<HttpResponse<IFoodRemoved>>;
}
