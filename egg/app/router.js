'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  //邓新华---------------------------------------------------------
  const { router, controller } = app;
  router.post("/mes_login",controller.mes.login);
  router.post("/mes_add",controller.mes.add);
  router.get("/mes_del",controller.mes.del);
  router.get("/mes_search",controller.mes.search);
  router.post("/mes_change",controller.mes.change);
  router.get("/search_search",controller.search.search);

  //张天豪--------------------------------------------------------------
  // router.post("/personal",controller.personal.personal)




  //向海川-------------------------------------------------------------
  // router.post("/registerxhc",controller.homexhc.registerxhc);
  // router.get("/getVerifxhc", controller.homexhc.getVerifxhc);
  // router.post('/loginxhc', controller.homexhc.loginxhc);
};
