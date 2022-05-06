import { GraphQLClient } from 'graphql-request';
import { getSdk } from './schema';
import { GQL_ENDPOINT, GQL_AUTH_TOKEN } from '@/env/server';

/**
 * Serverside admin-authenticated requests.
 */
export const sdk = getSdk(new GraphQLClient(GQL_ENDPOINT, { headers: { Authorization: `Bearer ${GQL_AUTH_TOKEN}` } }));

export * from './schema';
