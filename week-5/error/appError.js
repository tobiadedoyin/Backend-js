const BaseError = require("./baseError");
const httpStatusCode = require("./httpStatusCode");

export class BadRequestError extends BaseError {
    constructor (name, statusCode = httpStatusCode.BAD_REQUEST, description = "Bad request", isOperational= true){
        super(name, statusCode, isOperational, description)
    }
}