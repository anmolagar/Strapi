'use strict';

/**
 * video-detail controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::video-detail.video-detail', ({ strapi }) => ({
  async create(ctx, next) {
    console.log(ctx)
  }
    
  
}));
