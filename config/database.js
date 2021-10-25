module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'dev_live_event_cms'),
        username: env('DATABASE_USERNAME', 'dev'),
        password: env('DATABASE_PASSWORD', 'dev'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
