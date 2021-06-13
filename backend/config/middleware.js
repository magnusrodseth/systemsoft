// const { LOCALHOST_PORT_3000 } = require("../constants");

module.exports = {
  settings: {
    cors: {
      origin: [
        "http://localhost:3000",
        "http://localhost:1337",
        //    More URLs can be added here later
      ],
    },
  },
};
