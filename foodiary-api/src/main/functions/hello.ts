import { HelloControler } from "../../application/controllers/HelloControler";
import { lambdaHttpAdapter } from '../adapters/lambdaHttpAdapter';

const controller = new HelloControler();

export const handler = lambdaHttpAdapter(controller);
