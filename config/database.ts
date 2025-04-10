import path from 'path';

export default ({ env }) => {
  const client = env('DATABASE_CLIENT', 'sqlite');

  const connections = {
    mysql: {
      connection: {
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'strapi'),
        user: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', 'strapi'),
        ssl: env.bool('DATABASE_SSL', false) && {
          key: env('DATABASE_SSL_KEY'),
          cert: env('DATABASE_SSL_CERT'),
          ca: env('DATABASE_SSL_CA'),
          capath: env('DATABASE_SSL_CAPATH'),
          cipher: env('DATABASE_SSL_CIPHER'),
          rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', true),
        },
      },
      pool: {
        min: env.int('DATABASE_POOL_MIN', 2),
        max: env.int('DATABASE_POOL_MAX', 10),
      },
    },
    postgres: {
      connection: {
        // Usa DATABASE_URL si está definida
        connectionString: env('DATABASE_URL', undefined),

        // Respaldo con variables separadas
        host: env('DATABASE_HOST', 'dpg-cvs43gur433s73btmsv0-a.oregon-postgres.render.com'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'designs_projects_mlxv'),
        user: env('DATABASE_USERNAME', 'designs_projects_mlxv_user'),
        password: env('DATABASE_PASSWORD', 'sVXTCwPJIFaxpVB4lqCo0EWmOKSluAm4'),

        // Activa SSL si DATABASE_SSL=true
        ssl: env.bool('DATABASE_SSL', false)
          ? { rejectUnauthorized: false }
          : false,

        schema: env('DATABASE_SCHEMA', 'public'),
      },
      pool: {
        min: env.int('DATABASE_POOL_MIN', 2),
        max: env.int('DATABASE_POOL_MAX', 10),
      },
    },
    sqlite: {
      connection: {
        filename: path.join(
          __dirname,
          '..',
          '..',
          env('DATABASE_FILENAME', '.tmp/data.db')
        ),
      },
      useNullAsDefault: true,
    },
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
    },
  };
};
