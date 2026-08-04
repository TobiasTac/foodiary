import { IHttpRequest } from "./HttpRequest";
import { IHttpResponse } from "./HttpResponse";

export interface IController<TBody = undefined> {
  handle(params: IHttpRequest): Promise<IHttpResponse<TBody>>
}
