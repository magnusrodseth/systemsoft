# Backend Documentation

## Development 💻

### Setting up Strapi ⚙️

Follow documentation to setup Strapi with the [current settings](https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations/databases/mongodb.html#_2-install-strapi-locally-with-mongodb).

Currently, the backend is set up using Strapi and MongoDB as the database provider. The database is running on MongoDB Atlas, which is a free-tier development hosted database cluster in the cloud. To set this up, go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and follow the steps to create an account.

### Starting the backend

1. Make sure a MongoDB atlas account has been created
2. Go into the folder `backend` and run the command `yarn dev`.
3. Go to `http://localhost:1337/admin` and follow the steps to create a user.
4. Once inside, you can now manipulate the data entries found under **Collection types** on the right-hand side menu.

## Production 🌐

The Strapi backend is connected to a [DigitalOcean managed PostgreSQL database](https://www.digitalocean.com/products/managed-databases/).

Strapi allows for different configurations based on the environment the backend runs in. Read through [this documentation](https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html) for more information.

Even when running locally in `NODE_ENV=production`, you will connect to the free MongoDB Atlas database.
