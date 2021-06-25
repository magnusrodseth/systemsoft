module.exports = ({ env }) => ({
  responses: {
    privateAttributes: ["__v", "createdAt", "updatedAt", "published_at"],
  },
  rest: {
    defaultLimit: 100,
    maxLimit: 250,
  },
});
