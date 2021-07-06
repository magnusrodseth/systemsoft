module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  url: 'http://46.101.126.212/api', 
 admin: {
    url: 'http://46.101.126.212/dashboard',
    auth: {
      secret: env("ADMIN_JWT_SECRET"),
    },
  },
});
