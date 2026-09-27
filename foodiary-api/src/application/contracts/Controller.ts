import { getSchema } from '../../kernel/decorator/schema';

export abstract class Controller<TBody = undefined> {

  protected abstract handle(request: Controller.Request<TBody>): Promise<Controller.Response<TBody>>;

  public execute(request: Controller.Request): Promise<Controller.Response<TBody>> {
    const body = this.validateBody(request.body);

    return this.handle({
      ...request,
      body,
    } as Controller.Request<TBody>);
  }

  private validateBody(body: unknown): TBody {
    const schema = getSchema(this);
    
    if (!schema) {
      return body as TBody;
    }

    return schema.parse(body) as TBody;
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
