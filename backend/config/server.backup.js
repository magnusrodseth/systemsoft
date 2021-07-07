module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  url: 'https://systemsoft.no/api', 
 admin: {
    url: 'https://systemsoft.no/dashboard',
    auth: {
      secret: env("ADMIN_JWT_SECRET"),
    },
  },
});
