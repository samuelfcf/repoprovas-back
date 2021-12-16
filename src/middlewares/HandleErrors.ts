import { HttpStatusCode } from '../utils/enums';
import AppError from '../errors/AppError';
import { ErrorRequestHandlerAPI } from '../types/Request';

const HandleErrors: ErrorRequestHandlerAPI = (err, _, res, __) => {
  const defaultData = {
    status: HttpStatusCode.BAD_REQUEST,
    message: ''
  };

  if (Array.isArray(err)) {
    defaultData.message = err[0].message;
  }

  if (err instanceof AppError) {
    defaultData.status = err.status;
    defaultData.message = err.message;
  }

  res.status(defaultData.status).send({
    message: defaultData.message
  });
};

export default HandleErrors;
