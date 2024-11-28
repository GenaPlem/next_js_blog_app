const isDev = process.env.NODE_ENV === "development";
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  env: {
    API_URL: isDev ? process.env.DEV_API_URL : process.env.PROD_API_URL,
    MONGO_DB_USER: process.env.MONGO_DB_USER,
    MONGO_DB_PASSWORD: process.env.MONGO_DB_PASSWORD,
    MONGO_DB_CLUSTER: process.env.MONGO_DB_CLUSTER,
    MONGO_DB_DATABASE: process.env.MONGO_DB_DATABASE,
  },
};
