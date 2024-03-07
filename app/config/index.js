const config = {
  app: {
    port: process.env.PORT || 3000,
  },
  db: {
    uri:
      process.env.MONGODB_URI ||
      "mongodb+srv://contactbook:zetmins012@cluster0.dkkowcz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  },
};

module.exports = config;
