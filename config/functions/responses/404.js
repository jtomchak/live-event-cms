"use strict";

module.exports = async ({ request, response }) => {
  console.log(request);
  if (request.url === "/loaderio-f1e146938aa192280c8acfdadeb827b5/") {
    return (response.body = "loaderio-f1e146938aa192280c8acfdadeb827b5");
  }
  return response.notFound("Nope");
  // return ctx.notFound('My custom message 404');
};
