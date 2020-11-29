const Service = require('egg').Service;
class proService extends Service {
  async personal(arg) {
    const sql = `UPDATE userinfo set(accountnumber,username,tel,maillbox,autograph,jianjie,jybj,lxqq)=(select  ${arg.accountnumber},${arg.username},${arg.tel},${arg.maillbox},${arg.autograph},${arg.jianjie},${arg.jybj},${arg.lxqq})`
    const re = await this.app.mysql.body(sql);
    return re;
  }
}
module.exports = proService;
