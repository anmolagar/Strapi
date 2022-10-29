'use strict';

/**
 * admin-video controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::admin-video.admin-video', ({ strapi }) => ({
    async search(ctx){
        const searchText=ctx.request.body.searchText
        try {
            console.log(searchText)
        } catch (error) {
            throw error
        }
    }
}));
