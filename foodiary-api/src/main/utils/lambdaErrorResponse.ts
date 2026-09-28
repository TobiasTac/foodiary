import { ErrorCode } from '../../application/errors/ErrorCode';

interface ILambdaHttpResponseParams {
  statusCode: number;
  code: ErrorCode;
  message: any;
}

export function lambdaErrorResponse({
  code, 
  message, 
  statusCode,
}: ILambdaHttpResponseParams) {
  return {
    statusCode,
    body: JSON.stringify({
      error: {
        code,
        message,
      },
    }),
  };
}
