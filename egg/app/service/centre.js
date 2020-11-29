const Service = require('egg').Service;
class proService extends Service {
  async personal(arg) {
    const sql = `update user set accountnumber="${arg.accountnumber}",username="${arg.username}",tel=${arg.tel},maillbox="${arg.maillbox}",autograph="${arg.autograph}",jianjie="${arg.jianjie}",jybj="${arg.jybj}",lxqq="${arg.lxqq}" where accountnumber="${arg.accountnumber}";`
    const re = await this.app.mysql.query(sql);
    return re;
  }
}
module.exports = proService;
