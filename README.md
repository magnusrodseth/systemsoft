# SystemSoft AS

## Description ✏️

The official SystemSoft AS website. Currently a work in progress, as of summer 2021.

## Developer Information 🙋🏼‍♂️

Developed by Magnus Rødseth and Julian Grande, summer 2021.

## Tech Stack 🛠

- Next.js
- Strapi
- Tailwind CSS
- MongoDB

## Strapi Backend Setup 🕹

Follow documentation to setup Strapi with the [current settings](https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations/databases/mongodb.html#_2-install-strapi-locally-with-mongodb).

Currently the backend is set up using Strapi and MongoDB as the database-provider. The database is running on MongoDB Atlas, which is a free-tier development hosted database cluster in the cloud. To set this up, go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and follow the steps to create an account.

### Steps to starting the backend

1. Make sure a MongoDB atlas account has been created
2. Go into the folder `backend` and run the command `yarn develop`.
3. Go to `http://localhost:1337/admin` and follow the steps to create a user.
4. Once inside, you can now manipulate the data entries found under **Collection types** on the right-hand side menu.

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

This application uses URQL with GraphQL to fetch data from our [Strapi backend](./backend).

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
