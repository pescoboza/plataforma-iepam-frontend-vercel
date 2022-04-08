import { GraphQLClient } from 'graphql-request';
import { getSdk } from './schema';
import { GQL_AUTH_TOKEN } from "@/env/server";
import { NEXT_PUBLIC_GQL_ENDPOINT } from "@/env/client";


/**
 * Serverside admin-authenticated requests.
 */
export const sdk = getSdk(new GraphQLClient(NEXT_PUBLIC_GQL_ENDPOINT, { headers: { Authorization: `Bearer ${GQL_AUTH_TOKEN}` } }));



export * from './schema';
