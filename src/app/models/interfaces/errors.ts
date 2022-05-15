export interface ResponseErrors {
    errors: Error[]
}

export interface ResponseError {
    value: string;
    msg: string;
    param: string;
    location: string;
}
