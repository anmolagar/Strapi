'use strict';

/**
 * video-detail router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::video-detail.video-detail',{
    "routes": [
        {
          "method": "POST",
          "path": "/video-detail",
          "handler": "video-detail.search"
        }
      ]
});
