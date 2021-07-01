module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: env("CONNECTOR"),
      settings: {
        client: env("CLIENT"),
        host: env("DATABASE_HOST"),
        port: env.int("DATABASE_PORT"),
        database: env("DATABASE_NAME"),
        username: env("DATABASE_USERNAME"),
        password: env("DATABASE_PASSWORD"),
        schema: env("DATABASE_SCHEMA", "public"),
        ssl: {
          rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false),
        },
      },
      options: {
        authenticationDatabase: env("AUTHENTICATION_DATABASE", null),
        ssl: env.bool("DATABASE_SSL", true),
      },
    },
  },
});
