import { Response } from 'express';
import {
  DefaultErrorResponse,
  DefaultSuccessResponse
} from '../types/Response';
import { HttpStatusCode } from '../utils/enums';

class HelperResponse {
  public static success = (res: Response, data: DefaultSuccessResponse) => {
    return res.status(data.status || HttpStatusCode.SUCCESS).send({
      ...data
    });
  };

  public static failed = (res: Response, catchError: DefaultErrorResponse) => {
    const status =
      catchError.status < 1000
        ? catchError.status
        : HttpStatusCode.INTERNAL_SERVER_ERROR;

    return res.status(status).send({
      message: catchError.message
    });
  };
}

export default HelperResponse;
