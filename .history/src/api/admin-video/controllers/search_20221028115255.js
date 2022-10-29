'use strict';

/**
 * admin-video controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::admin-video.admin-video', ({ strapi }) => ({
    async search(ctx){
        try {
            console.log(ctx.body)
        } catch (error) {
            throw error
        }
    }
}));
