module.exports = {
  // To ensure that your middleware catches all errors including those in other middleware,
  // it needs to be added at the beginning of the stack but after the boom middleware.
  load: {
    before: ["boom", "sentry"],
  },

  settings: {
    cors: {
      origin: [
        "http://localhost:3000",
        "http://localhost:1337",
	"http://46.101.126.212",
	"https://systemsoft.no",
	"https://www.systemsoft.no",
        //    More URLs can be added here later
      ],
    },
    // enable the middleware.
    sentry: {
      enabled: true,
    },
  },
};
