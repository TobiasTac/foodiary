import { IController } from "../contracts/Controller";

export class HelloControler implements IController<unknown> {
  async handle(request: IController.Request): Promise<IController.Response<unknown>> {
    return {
      statusCode: 200,
      body: {
        request,
      }
    };
  }
}
