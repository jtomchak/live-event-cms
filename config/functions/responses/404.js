"use strict";

module.exports = async ({ request, response }) => {
  return response.notFound("Nope");
  // return ctx.notFound('My custom message 404');
};
