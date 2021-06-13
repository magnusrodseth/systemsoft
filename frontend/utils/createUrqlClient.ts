import { createClient } from 'urql';

const client = createClient({
    url: 'http://localhost:1337/graphql',
});

export default client;