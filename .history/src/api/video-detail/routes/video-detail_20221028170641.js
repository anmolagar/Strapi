'use strict';

/**
 * video-detail router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::video-detail.video-detail',{
    "routes": [
        {
          "method": "POST",
          "path": "/search",
          "handler": "video-detail.search"
        }
      ]
});
