import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4nkznyp0cd401xm8j974bhh/master',
    cache: new InMemoryCache()
})
