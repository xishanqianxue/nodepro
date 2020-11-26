/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  
  config.mysql={
    client:{
      //host
      host:"localhost",
      //端口
      port:"3306",
      //用户名
      user:"root",
      //密码
      password:"root",
      //数据库名
      database:"sql_firstday"   
    }
  }
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1605843912979_5050';

  config.security = {
    csrf: {
      enable:false
    }
  }

  config.multipart = {
    mode: 'file'
  }

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
