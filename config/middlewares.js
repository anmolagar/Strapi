
module.exports =({env})=>[
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": ["'self'", "data:", "blob:", 'dl.airtable.com', `https://moodiday.${env("DO_SPACE_ENDPOINT")}`],
          "media-src": ["'self'", "data:", "blob:",  'dl.airtable.com',`https://moodiday.${env("DO_SPACE_ENDPOINT")}`],
          upgradeInsecureRequests: null,

        }
      },
      formidable: {
        maxFileSize: 10737418240, // multipart data, modify here limit of uploaded file size
      },
    }
  },
];
