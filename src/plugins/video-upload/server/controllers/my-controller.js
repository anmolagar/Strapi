'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('video-upload')
      .service('myService')
      .getWelcomeMessage();
  },
});
