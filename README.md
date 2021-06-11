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

Follow documentation to setup Strapi with the current settings:
https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations/databases/mongodb.html#_2-install-strapi-locally-with-mongodb

Currently the backend is set up using Strapi and MongoDB as the database-provider. The database is running on MongoDB Atlas, which is a free-tier development hosted database cluster in the cloud. To set this up, go to https://www.mongodb.com/cloud/atlas and follow the steps to create an account.

### Steps to starting the backend

1. Make sure a MongoDB atlas account has been created
2. Go into the folder `backend` and run the command `yarn develop`.
3. Go to `http://localhost:1337/admin` and follow the steps to create a user.
4. Once inside, you can now manipulate the data entries found under **Collection types** on the right-hand side menu.
