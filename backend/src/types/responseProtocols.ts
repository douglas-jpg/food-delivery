export interface HttpResponse<T> {
    statusCode: number;
    body: T | string;
}

export interface HttpRequest<B> {
    params?: any,
    header?: any,
    body?: B
    file: Express.Multer.File
}