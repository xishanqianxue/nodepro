const Service = require('egg').Service;
let fs = require("fs");
class MyService extends Service {
  async has(reg){
      console.log(reg.email);
    var data = `select * from user where email = "${reg.email}"`
    var re = await this.app.mysql.query(data);
    return re;
  }
  async register(reg1,reg2){
    // console.log(reg2[0].filepath);
    reg2[0].filepath = "http://192.168.2.125:7001/public/img"+reg2[0].filename;
    var data = `insert into user (userimg,username,tel,email,grade,birth) values("${reg2[0].filepath}","${reg1.username}","${reg1.tel}","${reg1.email}","${reg1.grade}","${reg1.birth}")`
    var re =  await this.app.mysql.query(data);
    return re
  }
}
module.exports = MyService;