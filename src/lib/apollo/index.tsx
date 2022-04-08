import type { FC, ReactNode } from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, ApolloLink, HttpLink } from '@apollo/client';
import { persistCache, LocalStorageWrapper } from 'apollo3-cache-persist';
import { NEXT_PUBLIC_GQL_ENDPOINT } from '@/lib/env/client';

const cache = new InMemoryCache();

const link = new ApolloLink((operation, forward) => {
    // const token = jwt.getToken();

    // let headers: any = null;
    // if (token) {
    //     const { headers: prevHeaders } = operation.getContext();
    //     headers = { ...prevHeaders, Authorization: `Bearer ${token}` };
    //     operation.setContext({ headers });
    // } else {
    //     headers = operation.getContext().headers;
    // }

    // console.debug({ headers, operation, ctx: operation.getContext() });
    return forward(operation);
}).concat(new HttpLink({ uri: NEXT_PUBLIC_GQL_ENDPOINT }));

if (typeof window !== 'undefined')
    persistCache({
        cache,
        storage: new LocalStorageWrapper(localStorage),
    });

const client = new ApolloClient({
    cache,
    link,
    headers: {},
});

export const ApolloPersistentProvider: FC<{children?: ReactNode}> = ({children}) => (
    <ApolloProvider client={client}>{children}</ApolloProvider>
);
