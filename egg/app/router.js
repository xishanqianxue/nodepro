'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  //邓新华---------------------------------------------------------
  const { router, controller } = app;
  router.post("/register",controller.home.register);
  router.get("/verif",controller.home.verif);

  //张天豪--------------------------------------------------------------





  //向海川-------------------------------------------------------------

};
