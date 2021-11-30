module.exports = ({ env }) => {
  const redisConfig = process.env.REDIS_URL
    ? process.env.REDIS_URL
    : {
        port: 6379, // Redis port
        host: "127.0.0.1", // Redis host
        password: "sOmE_sEcUrE_pAsS",
      };
  return {
    settings: {
      cache: {
        enabled: true,
        type: "redis",
        models: ["session", "speaker"],
        redisConfig,
      },
    },
  };
};
