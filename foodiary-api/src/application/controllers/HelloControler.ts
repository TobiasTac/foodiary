import { IHttpRequest } from "../contracts/HttpRequest";

export class HelloControler {
  async handle(request: IHttpRequest) {
    return {
      statusCode: 200,
      body: JSON.stringify({
        request,
      }),
    };
  }
}
