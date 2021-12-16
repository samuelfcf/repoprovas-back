interface DefaultErrorResponse {
  data: any;
  message: string;
  status: number;
}

interface DefaultSuccessResponse
  extends Omit<DefaultErrorResponse, 'status' | 'message'> {
  message?: string;
  status?: number;
}

export { DefaultSuccessResponse, DefaultErrorResponse };
