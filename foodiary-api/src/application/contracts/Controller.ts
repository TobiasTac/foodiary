import { z } from 'zod';

export abstract class Controller<TBody = undefined> {
  protected schema?: z.ZodSchema<TBody>;

  protected abstract handle(request: Controller.Request<TBody>): Promise<Controller.Response<TBody>>;

  public execute(request: Controller.Request): Promise<Controller.Response<TBody>> {
    const body = this.validateBody(request.body);

    return this.handle({
      ...request,
      body,
    } as Controller.Request<TBody>);
  }

  private validateBody(body: unknown): TBody {
    if (!this.schema) {
      return body as TBody;
    }

    return this.schema.parse(body) as TBody;
  }
}

export namespace Controller {
  export type Request<
    TBody = Record<string, unknown>,
    TParams = Record<string, unknown>,
    TQueryParams = Record<string, unknown>,
  > = {
    body: TBody;
    params: TParams;
    queryParams: TQueryParams;
  };

  export type Response<TBody = undefined> = {
    statusCode: number;
    body?: TBody;
  };
}
