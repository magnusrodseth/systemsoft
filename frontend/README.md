# Frontend Documentation

## Running the frontend ⏩

```sh
# Navigate to frontend folder
cd frontend

# Install dependencies
yarn

# Run frontend in development mode
yarn dev
```

Open up your browser and go to `localhost:3000`. Your frontend should now be running!

## URQL as GraphQL client

If you've never heard of URQL, you can read more about it [here](https://formidable.com/open-source/urql/docs/).

This application uses URQL with GraphQL to fetch data from our [Strapi backend](../backend).

The URQL client is defined in [`frontend/utils/createUrqlClient.ts`](./frontend/utils/createUrqlClient.ts). In short, it points to the URL and port where we fetch data from using GraphQL. The client also supports optional server side rendering, which benefits a webpage with quite dynamic content. Read more about server side rendering [here](https://www.freecodecamp.org/news/what-exactly-is-client-side-rendering-and-hows-it-different-from-server-side-rendering-bd5c786b340d/).

Each individual page is "wrapped" with an URQL client like this. Here is an example (**`Index`**) of when server side rendering is unnecessary:

```javascript
// This is the lading page
const Index = () => {
  return <div>All your content goes here...</div>;
};

// Using Urql, we can optionally server-side render specific pages.
// Index page should not be necessary to render server side, as the content will be quite static.
export default withUrqlClient(createUrqlClient, { ssr: false })(Index);
```

Another example would be the **`Clients`** page:

```javascript
const Clients = ({}) => {
  return <div>All your content goes here...</div>;
};

// As the content of the client page may be updated quite frequently,
// we want to server side render this page.
export default withUrqlClient(createUrqlClient, { ssr: true })(Clients);
```

## GraphQL Code Generator

We use [GraphQL Code Generator](https://www.graphql-code-generator.com/docs/getting-started/index) in order to automatically generate TypeScript types from our GraphQL queries and mutations. This can be [combined with URQL](https://www.graphql-code-generator.com/docs/plugins/typescript-urql) for a very pleasant coding experience when fetching data from our backend.

In practise, GraphQL Code Generator allows to use custom hooks to fetch data and potential errors, whilst staying type-safe and allowing your IDE to autocompletion suggestions.

```javascript
const Employees = ({}) => {
  // This hook returns a tuple of the shape [result, executeQuery].
  // Only the result is interesting. Thus, we use an underscore.
  const [result, _] = useEmployeesQuery();

  const { data, fetching, error } = result;

  console.log(fetching, error)

  // Display error message if an error occurred whilst fetching data.
  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      {/* 
        Conditionally render the content of the page based on if we're currently fetching data or have successfully fetched data.
        */}
      {fetching ? (
        <p>Fetching...</p>
      ) : (
        data?.employees?.map((employee) => {
          <p>{employee.name}</p>;
        })
      )}
    </div>
  );
};
```
