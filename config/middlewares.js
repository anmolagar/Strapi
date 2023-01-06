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

// s3 DO
module.exports = ({env})=>[
  "strapi::errors",
  "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::public",
   "strapi::favicon",
   "strapi::body",

  {
    name: "strapi::security",
    config: {
      formLimit: "10000mb", // modify form body
      jsonLimit: "10000mb", // modify JSON body
      textLimit: "10000mb", // modify text body
      formidable: {
        maxFileSize: 10737418240, // multipart data, modify here limit of uploaded file size
      },

      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            "https://moodiday-file-storage.amazonaws.com",
            `https://moodiday.${env("DO_SPACE_ENDPOINT")}`,
            `https://moodiday.cdn.${env("DO_SPACE_ENDPOINT")}`
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            "https://moodiday-file-storage.s3.amazonaws.com",
            `https://moodiday.${env("DO_SPACE_ENDPOINT")}`,
            `https://moodiday.nyc3.cdn.digitaloceanspaces.com`
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  // ...
];
