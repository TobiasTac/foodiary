import { APIGatewayProxyEventV2 } from 'aws-lambda';

import { HelloControler } from "../../application/controllers/HelloControler";
import { lambdaBodyParser } from '../utils/lambdaBodyParser';

const controller = new HelloControler();

export async function handler(event: APIGatewayProxyEventV2) {
  const body = lambdaBodyParser(event.body);
  const params = event.pathParameters ?? {};
  const queryParams = event.queryStringParameters ?? {};

  return controller.handle({
    body,
    params,
    queryParams,
  });
}
