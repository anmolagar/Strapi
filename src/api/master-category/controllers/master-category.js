"use strict";

/**
 * master-category controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::master-category.master-category",
  ({ strapi }) => ({
    async find(ctx) {
      try {
        const category = await strapi.db.connection
          .raw(`select ms.*,fsi.url from master_categories ms
      inner join  files_related_morphs morf on ms.id=morf.related_id
      inner join  files fsi on morf.file_id=fsi.id`);
        return {
          status: 200,
          success: true,
          data: category?.rows,
        };
      } catch (error) {
        throw error;
      }
    },
  })
);
