switch (process.env.INSTANCE) {
  case 'staging':
    console.log('this is staging');
    module.exports = ({ env }) => ({
      connection: {
        client: 'postgres',
        connection: {
          host: env('DATABASE_HOST', 'localhost'),
          port: env.int('DATABASE_PORT', 5433),
          database: env('DATABASE_NAME', 'postgres'),
          user: env('DATABASE_USERNAME', 'postgres'),
          password: env('DATABASE_PASSWORD', 'qwerty'),
          schema: env('DATABASE_SCHEMA', 'public'), // Not required
         
        },
        debug: false,
      },
    });
    
    break;
    case 'prod':
      console.log('this is prod');
      module.exports = ({ env }) => ({
        connection: {
          client: 'postgres',
          connection: {
            host: env('DATABASE_HOST', 'localhost'),
            port: env.int('DATABASE_PORT', 5433),
            database: env('DATABASE_NAME', 'moodiday-prod'),
            user: env('DATABASE_USERNAME', 'postgres'),
            password: env('DATABASE_PASSWORD', 'qwerty'),
            schema: env('DATABASE_SCHEMA', 'public'), // Not required
           
          },
          debug: false,
        },
      });

  default:
    break;
}
