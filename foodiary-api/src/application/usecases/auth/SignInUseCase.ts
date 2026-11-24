import { NotAuthorizedException, UserNotFoundException } from '@aws-sdk/client-cognito-identity-provider';
import { InvalidCredentials } from '@application/errors/application/InvalidCredentials';
import { AuthGateway } from '@infra/gateways/AuthGateway';
import { Injectable } from '@kernel/decorator/Injectable';

@Injectable()
export class SignInUseCase {
  constructor(
    private readonly authGateway: AuthGateway,
  ) {}

  async execute({
    email,
    password,
  }: SignInUseCase.Input): Promise<SignInUseCase.Output> {
    try {
      const {
        accessToken,
        refreshToken,
      } = await this.authGateway.signIn({ email, password });

      return {
        accessToken,
        refreshToken,
      };
    } catch (error) {
      if (error instanceof NotAuthorizedException || error instanceof UserNotFoundException) {
        throw new InvalidCredentials();
      }

      throw error;
    }
  }
}

export namespace SignInUseCase {
  export type Input = {
    email: string;
    password: string;
  }

  export type Output = {
    accessToken: string;
    refreshToken: string;
  }
}
