// module.exports =({env})=>[
//   'strapi::errors',
//   'strapi::security',
//   'strapi::cors',
//   'strapi::poweredBy',
//   'strapi::logger',
//   {
//     name: 'strapi::cors',
//     config: {
//       enabled: true,
//       headers: '*',
//       origin: ['https://plankton-app-tmhr6.ondigitalocean.app','http://localhost:3000']
//     }
//   },
//   'strapi::query',
//   'strapi::body',
//   'strapi::session',
//   'strapi::favicon',
//   'strapi::public',
//   {
//     name: "strapi::security",
//     config: {
//       contentSecurityPolicy: {
//         useDefaults: true,
//         directives: {
//           "connect-src": ["'self'", "https:"],
//           "img-src": ["'self'", "data:", "blob:", 'dl.airtable.com', `https://moodiday.${env("DO_SPACE_ENDPOINT")}`],
//           "media-src": ["'self'", "data:", "blob:",  'dl.airtable.com',`https://moodiday.${env("DO_SPACE_ENDPOINT")}`],
//           upgradeInsecureRequests: null,

//         }
//       },
//       formidable: {
//         maxFileSize: 10737418240, // multipart data, modify here limit of uploaded file size
//       },
//     }
//   },
// ];

// s3 DO
module.exports = [
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
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            "moodiday-file-storage.s3.us-east-1.amazonaws.com",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            "moodiday-file-storage.s3.us-east-1.amazonaws.com",
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  // ...
];
