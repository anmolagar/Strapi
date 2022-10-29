'use strict';

/**
 * admin-video controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::admin-video.admin-video', ({ strapi }) => ({
    async search(ctx) {
        console.log(ctx)
    },
    async find(ctx) {
        try {
            const data = await strapi.db.connection.select("*").from("admin_videos")
            return {
                status: 201,
                success: true,
                data: data
            };
        } catch (error) {
            throw error
        }


    }
}));
