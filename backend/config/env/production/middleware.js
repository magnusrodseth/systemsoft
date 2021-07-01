module.exports = {
  settings: {
    cors: {
      origin: [
        "http://localhost:3000",
        "http://localhost:1337",
        "http://127.0.0.1:3000",
        "http://127.0.0.1:1337",
        "http://0.0.0.0:3000",
        "http://0.0.0.0:1337",
        "http://frontend:3000",
        "http://backend:1337",
        "http://backend:1337/graphql",
        //    More URLs can be added here later
      ],
    },
  },
};
