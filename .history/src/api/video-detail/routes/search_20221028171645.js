'use strict';

/**
 * video-detail router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::video-detail.video-detail',{
    "route":
        {
          "method": "POST",
          "path": "/search",
          "handler": "search.search"
        }
      
});
