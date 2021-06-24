module.exports = ({ env }) => ({
  responses: {
    privateAttributes: ["__v", "_id", "createdAt", "updatedAt", "published_at"],
  },
  rest: {
    defaultLimit: 100,
    maxLimit: 250,
  },
});
