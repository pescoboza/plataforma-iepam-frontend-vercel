import { GraphQLClient } from 'graphql-request';
import { getSdk } from './schema';
import { NEXT_PUBLIC_GQL_ENDPOINT, GQL_AUTH_TOKEN } from "@/config"

/**
 * Serverside admin-authenticated requests.
 */
export const sdk = getSdk(new GraphQLClient(NEXT_PUBLIC_GQL_ENDPOINT, { headers: { Authorization: `Bearer ${GQL_AUTH_TOKEN}` } }));



export * from './schema';
