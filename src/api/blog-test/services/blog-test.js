'use strict';

/**
 * blog-test service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::blog-test.blog-test');
