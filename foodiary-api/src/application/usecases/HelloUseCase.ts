import { Injectable } from '@kernel/decorator/injectable';

@Injectable()
export class HelloUseCase {
  async execute(input: HelloUseCase.Input): Promise<HelloUseCase.Output> {
    return {
      helloUseCase: input.email,
    };
  }
}

export namespace HelloUseCase {
  export type Input = {
    email: string;
  }

  export type Output = {
    helloUseCase: string;
  }
}
