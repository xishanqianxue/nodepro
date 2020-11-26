'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post("/register",controller.home.register);
  router.get("/verif",controller.home.verif);
};
