import { dedupExchange, fetchExchange } from 'urql';
import { LOCAL_GRAPHQL_URL } from "../constants"

/**
 * Creates an URQL client with configuration options.
 *
 * @param ssrExchange The ssrExchange has two functions. On the server-side it's able to gather all results as they're being fetched, which can then be serialized and sent to the client. On the client-side it's able to use these serialized results to rehydrate and render the application without refetching this data.
 * @returns the URQL client with configuration options.
 */
const createUrqlClient = (ssrExchange: any) => ({
    url: LOCAL_GRAPHQL_URL,
    fetchOptions: {
        credentials: "include" as const,
    },
    exchanges: [
        dedupExchange,
        ssrExchange,
        fetchExchange]
});

export default createUrqlClient;