'use strict';

/**
 * video-detail controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::video-detail.video-detail', ({ strapi }) => ({
  async find(ctx, next) {
    try {
      const data = await strapi.db.connection.select("*").from("video_details")
      return {
        status: 200,
        success: true,
        data: data

      }
    } catch (error) {
      throw error
      next()
    }
  },
  async create(ctx,next){
    console.log(ctx)
  },
  
}));
