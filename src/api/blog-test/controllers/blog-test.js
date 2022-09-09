'use strict';

/**
 * blog-test controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::blog-test.blog-test');
