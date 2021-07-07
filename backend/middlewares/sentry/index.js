const Sentry = require("@sentry/node");
const dotenv = require("dotenv");
dotenv.config();

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: strapi.config.environment,
});

module.exports = (strapi) => {
  return {
    initialize() {
      strapi.app.use(async (ctx, next) => {
        try {
          await next();
        } catch (error) {
          Sentry.captureException(error);
          throw error;
        }
      });
    },
  };
};
