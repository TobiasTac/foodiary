import { IHttpRequest } from "../contracts/HttpRequest";
import { IHttpResponse } from "../contracts/HttpResponse";

export class HelloControler {
  async handle(request: IHttpRequest): Promise<IHttpResponse<unknown>> {
    return {
      statusCode: 200,
      body: {
        request,
      }
    };
  }
}
