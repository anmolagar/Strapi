switch (process.env.INSTANCE) {
  case 'staging':
    console.log('this is staging');
    module.exports = ({ env }) => ({
      connection: {
        client: 'postgres',
        connection:env('DATABASE_URL', 'postgres://postgres:qwerty@localhost:5433/moodiday-prod'),
        debug: false,
      },
    });
    
    break;
    case 'prod':
      console.log('this is prod');
      module.exports = ({ env }) => ({
        connection: {
          client: 'postgres',
           connection:env('DATABASE_URL', 'postgres://postgres:qwerty@localhost:5433/moodiday-prod'),
          debug: false,
        },
      });

  default:
    break;
}
