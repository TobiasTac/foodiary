import { PreTokenGenerationV2TriggerEvent } from 'aws-lambda';

export async function handler(event: PreTokenGenerationV2TriggerEvent) {
  const internalId = event.request.userAttributes['custom:internalId'];

  if (!internalId) {
    throw new Error(`User "${event.userName}" has no custom:internalId attribute.`);
  }

  event.response = {
    claimsAndScopeOverrideDetails: {
      accessTokenGeneration: {
        claimsToAddOrOverride: {
          internalId,
        },
      },
    },
  };

  return event;
}
