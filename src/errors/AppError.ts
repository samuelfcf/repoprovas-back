import { HttpStatusCode } from '../utils/enums';

class AppError extends Error {
  public status = HttpStatusCode.INTERNAL_SERVER_ERROR;

  constructor(message: string, status: number) {
    super(message);
    this.name = 'AppError';
    this.status = status ?? this.status;
  }
}

export default AppError;
