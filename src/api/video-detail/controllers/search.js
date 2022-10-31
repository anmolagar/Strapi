"use strict";

/**
 * video-detail controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::video-detail.video-detail",
  ({ strapi }) => ({
    async search(ctx) {
      const searchItem = ctx.request.body;

      try {
        const data = await strapi.db.connection.raw(
          `select * from video_details where lower(video_name) like lower('%${searchItem?.["searchItem"]}%')`
        );
        return {
          status: 200,
          success: true,
          data: data?.rows,
        };
      } catch (error) {
        throw error;
      }
    },
    async categoryFilter(ctx) {
      try {
        const category = ctx?.request?.body?.["category"];
        if (category && category.length > 0) {
          const catdata = await strapi.db.connection
            .select("id")
            .from("master_categories")
            .whereIn("category_name", category);
          if (catdata.length > 0) {
            const catId = catdata.map((id) => {
              return id.id;
            });

            const videodata = await strapi.db.connection
              .select("video_detail_id")
              .from("video_details_master_categories_links")
              .whereIn("master_category_id", catId);
            const videoId = videodata.map((id) => {
              return id?.["video_detail_id"];
            });
            const videoInfo = await strapi.db.connection
              .select("*")
              .from("video_details")
              .whereIn("id", videoId);
            return {
              status: 200,
              success: true,
              data: videoInfo,
              message: "Video Fetched Successfully",
            };
          } else {
            return {
              status: 201,
              success: false,
              message: "Category Not Found",
            };
          }
        } else {
          return {
            status: 201,
            success: false,
            message: "Unable to fetched video",
          };
        }
      } catch (error) {
        throw error;
      }
    },
    async tags(ctx) {
      try {
        const tags = ctx.request.body?.["tags"];
        if (tags && tags.length > 0) {
          const tagdata = await strapi.db.connection
            .select("id")
            .from("video_tags")
            .whereIn("tag_name", tags);
          if (tagdata.length > 0) {
            const tagId = tagdata.map((id) => {
              return id.id;
            });

            const videodata = await strapi.db.connection
              .select("video_detail_id")
              .from("video_tags_video_details_links")
              .whereIn("video_tag_id", tagId);
            const videoId = videodata.map((id) => {
              return id?.["video_detail_id"];
            });
            const videoInfo = await strapi.db.connection
              .select("*")
              .from("video_details")
              .whereIn("id", videoId);
            return {
              status: 200,
              success: true,
              data: videoInfo,
              message: "Video Fetched Successfully",
            };
          } else {
            return {
              status: 201,
              success: false,
              message: "Tag Not Found",
            };
          }
        } else {
          return {
            status: 201,
            success: false,
            message: "Unable to fetched video",
          };
        }
      } catch (error) {
        throw error;
      }
    },
  })
);
