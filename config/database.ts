import path from 'path';

export default ({ env }) => {
  // El cliente lo defines en tu .env con DATABASE_CLIENT=postgres
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
          key: env('DATABASE_SSL_KEY', undefined),
          cert: env('DATABASE_SSL_CERT', undefined),
          ca: env('DATABASE_SSL_CA', undefined),
          capath: env('DATABASE_SSL_CAPATH', undefined),
          cipher: env('DATABASE_SSL_CIPHER', undefined),
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
        // Si prefieres usar DATABASE_URL, Strapi lo descompone internamente
        connectionString: env('DATABASE_URL', null),

        // Estos valores se usan si NO proporcionas DATABASE_URL
        host: env('DATABASE_HOST', 'dpg-cvs43gur433s73btmsv0-a.oregon-postgres.render.com'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'designs_projects_mlxv'),
        user: env('DATABASE_USERNAME', 'designs_projects_mlxv_user'),
        password: env('DATABASE_PASSWORD', 'sVXTCwPJIFaxpVB4lqCo0EWmOKSluAm4'),

        // SSL en Render normalmente no es necesario, déjalo false
        ssl: env.bool('DATABASE_SSL', false) && {
          rejectUnauthorized: false,
        },

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
