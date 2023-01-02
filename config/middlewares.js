
module.exports =({env})=>[
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      headers: '*',
      origin: ['https://plankton-app-tmhr6.ondigitalocean.app','http://localhost:3000','http://142.93.210.142:1337','http://localhost:1337',"https://dolphin-app-6k3a8.ondigitalocean.app"]
    }
  },
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
          "connect-src": ["'self'", "https:","http:"],
          "img-src": ["'self'", "data:", "blob:", 'dl.airtable.com', `https://moodiday.${env("DO_SPACE_ENDPOINT")}`],
          "media-src": ["'self'", "data:", "blob:",  'dl.airtable.com',`https://moodiday.${env("DO_SPACE_ENDPOINT")}`],
          upgradeInsecureRequests: null,

        }
      },
      formidable: {
        maxFileSize: 10737418240, 
      },
    }
  },
];
